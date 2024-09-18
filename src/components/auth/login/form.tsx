'use client';

import { Anchor, Button, Group, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from '~/hooks/useForm';

export const LoginSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter.'),
  password: z.string().min(3, 'Password minimal 3 karakter.'),
});

export function LoginForm() {
  const [isLoading, toggle] = useToggle();
  const router = useRouter();

  /**
   * This function is called when the form is submitted and it will handle the action of the form.
   * @param formData FormData object.
   */

  const form = useForm<z.infer<typeof LoginSchema>>({
    schema: LoginSchema,
    initialValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof LoginSchema>) => {
    toggle();

    const result = await signIn('user-login', {
      username: values.username,
      password: values.password,
      redirect: false,
      callbackUrl: '/dashboard',
    });

    if (result?.url) {
      router.push(result.url);
    } else {
      alert('Failed to login!');
    }
    toggle();
  };

  return (
    <Paper withBorder shadow='md' p={30} mt={30} radius="md">
      <form
      /**
       * Please note that we are using action instead of onSubmit.
       */
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <TextInput 
        label="NRP" 
        id='username' 
        name='username' 
        placeholder="Cth : 12345" 
        required 
        key={form.key('username')}
        {...form.getInputProps('username')}
        disabled={isLoading}
      />
      <PasswordInput 
        label="Password" 
        id='password' 
        name='password' 
        placeholder="Masukan password..." 
        mt="md" 
        required         
        key={form.key('password')}
        {...form.getInputProps('password')}
        disabled={isLoading}
      />
      <Group justify="end" mt="lg">
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
      <Button fullWidth mt="xl" disabled={isLoading} type='submit'>
        Login
      </Button>
    </form>
    </Paper>
  );
}

import { useForm as useMantineForm, zodResolver } from '@mantine/form';
import { ZodSchema } from 'zod';

interface UseFormProps<T> {
  schema: ZodSchema<T>;
  initialValues: T;
  mode?: 'controlled' | 'uncontrolled';
}

export function useForm<T extends Record<string, any>>({
  schema,
  initialValues,
  mode = 'uncontrolled',
}: UseFormProps<T>) {
  return useMantineForm<T>({
    mode,
    initialValues,
    validate: zodResolver(schema),
  });
}
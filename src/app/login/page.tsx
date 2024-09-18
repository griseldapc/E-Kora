'use client';

import {
    Title,
    Container,
    Text,
    Anchor,
  } from '@mantine/core';
  import classes from '../../styles/login.module.css';
import { LoginForm } from '~/components/auth/login/form';
  
  function Login() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        width: 'full'
      }}>
        <Container my={40} p={0} w={450}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Silahkan masukan NRP dan password anda!
        </Text>
        <LoginForm />
      </Container>
      </div>
    );
  }

export default Login;
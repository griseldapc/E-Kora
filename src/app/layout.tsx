import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Navbar } from '~/components/(dashboard)/navbar';

export const metadata = {
  title: 'E-KORA',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingBottom: '20px'
    }}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider >
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
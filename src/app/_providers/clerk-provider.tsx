import { ClerkProvider as NextClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ReactNode } from 'react';

export const ClerkProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextClerkProvider appearance={{ baseTheme: dark }}>
      {children}
    </NextClerkProvider>
  );
};

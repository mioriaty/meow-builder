import { ClerkProvider } from '@/app/_providers/clerk-provider';
import React from 'react';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

import { ClerkProvider } from '@/providers/clerk-provider';
import React from 'react';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

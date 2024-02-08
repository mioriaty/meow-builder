import { ClerkProvider } from '@/_providers/clerk-provider';
import { Navigation } from '@/shared/components/navigation';

import React from 'react';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default SiteLayout;

import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface NavigationProps {
  user?: null | User;
}

export const Navigation: FC<NavigationProps> = ({ user }) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image src={'./assets/plura-logo.svg'} alt="logo" width={40} height={40} />
        <span className="text-xl font-bold">Meow.</span>
      </aside>
      <nav
        className={cn(
          'hidden',
          'md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'
        )}
      >
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>

      <aside className="flex gap-2 items-center">
        <Link href={'/agency'} className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">
          Login
        </Link>
        <UserButton />
      </aside>
    </div>
  );
};
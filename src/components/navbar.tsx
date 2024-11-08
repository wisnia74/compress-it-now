'use client';

import Link from 'next/link';

import { GithubButton, ThemeToggleButton } from './custom';
import { buttonVariants } from './ui';

export const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between p-5'>
      <Link className={`${buttonVariants({ variant: 'link' })} text-3xl hover:no-underline`} href='/'>
        Compress it. <span className='inline-flex items-center bg-primary px-2 py-1 text-primary-foreground'>Now.</span>
      </Link>
      <div className='flex justify-end'>
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

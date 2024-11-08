'use client';

import Link from 'next/link';

import { GithubButton, ThemeToggleButton } from './custom';
import { buttonVariants } from './ui';

export const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between py-5 px-5'>
      <Link className={`${buttonVariants({ variant: 'link' })} text-3xl hover:no-underline`} href='/'>
        Compress it. <span className='px-2 py-1 bg-primary text-primary-foreground inline-flex items-center'>Now.</span>
      </Link>
      <div className='flex justify-end'>
        <GithubButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

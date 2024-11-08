import Link from 'next/link';

import { GithubIcon } from '../icons';
import { buttonVariants } from '../ui';

export const GithubButton: React.FC = () => (
  <Link className={buttonVariants({ variant: 'ghost' })} href='https://github.com/wisnia74/compress-it-now'>
    <GithubIcon className='absolute h-[1.2rem] w-[1.2rem] transition-all' />
    <span className='sr-only'>GitHub page</span>
  </Link>
);

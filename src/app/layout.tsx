import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'compress-it-now',
  description: 'Compress it. Now.'
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html className='h-full' lang='en'>
    <body className={`antialiased h-full m-0 p-0`}>
      <div
        className='grid h-full min-w-96 mx-auto min-[1800px]:max-w-[1536px] min-[1800px]:border-x border-x-black text-center'
        style={{ gridTemplateAreas: `'header' 'main' 'footer'`, gridTemplateRows: 'auto 1fr auto' }}
      >
        <header className='min-[1800px]:border-b border-b-black'>HEADER</header>
        <main>{children}</main>
        <footer className='min-[1800px]:border-t border-t-black'>FOOTER</footer>
      </div>
    </body>
  </html>
);

export default RootLayout;

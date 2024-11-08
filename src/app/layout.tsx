import './globals.css';

import type { Metadata } from 'next';

import { Navbar, ThemeProvider } from '@/components';

export const metadata: Metadata = {
  title: 'compress-it-now',
  description: 'Compress it. Now.'
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html className='h-full' lang='en' suppressHydrationWarning>
    <body className={`antialiased h-full m-0 p-0`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <div
          className='grid h-full min-w-96 mx-auto min-[1800px]:max-w-[1536px] min-[1800px]:border-x'
          style={{ gridTemplateAreas: `'header' 'main' 'footer'`, gridTemplateRows: 'auto 1fr auto' }}
        >
          <header className='min-[1800px]:border-b'>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer className='min-[1800px]:border-t'>FOOTER</footer>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

import './globals.css';

import type { Metadata } from 'next';

import { Navbar, ThemeProvider } from '@/components';

export const metadata: Metadata = {
  title: 'compress-it-now',
  description: 'Compress it. Now.'
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html className='h-full' lang='en' suppressHydrationWarning>
    <body className={`m-0 h-full p-0 antialiased`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <div
          className='mx-auto grid h-full min-w-96 min-[1800px]:max-w-screen-2xl min-[1800px]:border-x'
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

import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Sai Rajesh Gudimetla';
  const pageTitle = title ? `${appName}` : appName;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-indigo-500 p-3 text-white transition-colors duration-150 hover:bg-indigo-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;

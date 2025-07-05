import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { PropsWithChildren } from 'react';

interface LayoutProps {
  // Add other properties here if needed
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className='layout'>
      <Head>
        <title>E-Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;



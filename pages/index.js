import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Elysian Web Design</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold'>
            Welcome to{' '}
            <a className='text-blue-600' href='https://nextjs.org'>
              Elysian Web Design
            </a>
          </h1>
        </main>
        <Footer />
      </div>
    </>
  );
}

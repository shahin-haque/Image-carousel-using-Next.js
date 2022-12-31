import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Image carousel without including other libraries</title>
        <meta
          name="description"
          content="My example below is going to show you how to create the simple responsive slider from images. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </>
  );
};

export default Layout;

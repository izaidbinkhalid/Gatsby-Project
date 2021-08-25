import * as React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import './layout.css';
import useSiteMetadata from '../hooks/use-siteMetaData';

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} author={author} />
      </Helmet>
      <Header siteTitle={'FEM Workshop'} />
      <div>
        <main
          style={{
            margin: `2rem auto 4rem`,
            maxWidth: `90vw`,
            width: `530px`,
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

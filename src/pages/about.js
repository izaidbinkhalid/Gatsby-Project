import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const about = () => {
  return (
    <Layout>
      <h1>About Me!</h1>
      <p>Learn more about me.</p>
      <Link to="/">Back to home &larr;</Link>
    </Layout>
  );
};

export default about;

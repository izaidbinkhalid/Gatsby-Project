import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => {
  return (
    <article
      className={css`
        border-bottom: 1px solid #ddd;
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;
        align-items: center;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        className={css`
          margin: 1rem 1rem 0 0;
          width: 150px;
        `}
      >
        <Image
          className={css`
            * {
              margin-top: 0;
            }
          `}
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <h3>{post.excerpt}</h3>
        <ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
      </div>
    </article>
  );
};

export default PostPreview;

import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/css';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPosts = useInstagram();

  return (
    <>
      <h2>Instagram posts from @9gag</h2>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaPosts.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc((33% - 1rem));
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              className={css`
                width: 100%;

                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a
        href={`https://instagram.com/9gag`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on instagram &rarr;
      </a>
    </>
  );
};

export default Insta;

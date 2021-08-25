import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &: last-of-type {
    margin-right: 0;
  }
`;
const customPadding = `calc((100vw - 550px - 0.5rem) / 2)`;

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: '#eee',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        padding: `0.5rem ${customPadding}`,
      }}
    >
      <NavLink to="/" fontWeight="bold">
        {siteTitle}
      </NavLink>
      <nav style={{ marginTop: 0 }}>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.main`
  text-align: center;
`;

export const ErrorTitle = styled.p`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: underline;
  color: black;
  font-weight: 500;

  :hover {
    color: orange;
  }
`;

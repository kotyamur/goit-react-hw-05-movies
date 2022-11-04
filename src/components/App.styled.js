import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 8px;
  margin-bottom: 16px;
  box-shadow: 1px 2px 9px 0px rgb(0 0 0 / 55%);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 28px;
  font-weight: 500;

  &.active {
    color: orange;
  }

  :hover {
    text-decoration: underline;
  }
`;

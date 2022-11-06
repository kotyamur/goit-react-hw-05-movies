import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: 1px 2px 9px 0px rgb(0 0 0 / 55%);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  &.active {
    color: ${p => p.theme.colors.orange};
  }

  :hover {
    text-decoration: underline;
  }
`;

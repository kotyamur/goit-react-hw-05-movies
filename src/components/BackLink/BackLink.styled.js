import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: 8px 20px;
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;

  :hover {
    color: ${p => p.theme.colors.orange};
  }
`;

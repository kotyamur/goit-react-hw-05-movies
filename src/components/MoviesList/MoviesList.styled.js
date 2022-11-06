import styled from 'styled-components';

export const Layout = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  list-style: disc;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

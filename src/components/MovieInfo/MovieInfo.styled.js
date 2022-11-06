import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  padding: 20px 20px;
  box-shadow: 0px 6px 5px -4px rgb(0 0 0 / 55%);
`;

export const FilmImage = styled.img`
  width: 300px;
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  width: 1000px;
  padding: 8px 4px;
`;

export const FilmTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Heading = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

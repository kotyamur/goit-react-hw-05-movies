import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 16px;
  padding: 20px 20px;
  box-shadow: 0px 6px 5px -4px rgb(0 0 0 / 55%);
`;

export const FilmImage = styled.img`
  width: 300px;
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 1000px;
  padding: 8px 4px;
`;

export const FilmTitle = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Heading = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

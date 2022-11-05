import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px;
`;

export const CastList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: disc;
`;

export const CastItem = styled.li`
  padding: 5px 5px;

  & > img {
    width: 150px;
    margin-bottom: 12px;
  }
`;

export const ActorName = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
`;

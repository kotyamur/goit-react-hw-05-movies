import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: 20px 20px;
`;

export const CastList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  list-style: disc;
`;

export const CastItem = styled.li`
  padding: 5px 5px;

  & > img {
    width: 150px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ActorName = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

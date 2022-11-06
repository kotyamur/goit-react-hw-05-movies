import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: 20px 20px;
`;

export const ReviewList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  list-style: disc;
`;

export const ReviewItem = styled.li`
  padding: 5px 5px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ReviewAvtor = styled.p`
  font-weight: 500;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

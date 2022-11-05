import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px;
`;

export const ReviewList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: disc;
`;

export const ReviewItem = styled.li`
  padding: 5px 5px;
  margin-bottom: 12px;
`;

export const ReviewAvtor = styled.p`
  font-weight: 500;
  margin-bottom: 12px;
`;

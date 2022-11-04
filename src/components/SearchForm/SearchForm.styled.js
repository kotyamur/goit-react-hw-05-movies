import styled from 'styled-components';

export const Layout = styled.form`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  height: 36px;
  width: 450px;
  padding: 1px 6px;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  font-size: 16px;
`;

export const FormButton = styled.button`
  width: 70px;
  border-width: 1px;
  border-color: orange;
  border-radius: 4px;
  border-style: solid;
  font-size: 16px;
  :hover {
    background-color: orange;
    color: white;
  }
`;

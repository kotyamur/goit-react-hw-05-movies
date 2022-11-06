import styled from 'styled-components';

export const Layout = styled.form`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  padding: 8px 0;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FormInput = styled.input`
  height: 36px;
  width: 450px;
  padding: 1px 6px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const FormButton = styled.button`
  width: 70px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  font-size: ${p => p.theme.fontSizes.m};
  :hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }
`;

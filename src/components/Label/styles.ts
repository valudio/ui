import styled from 'styled-components';

export default styled.span`
  height: 24px;
  border-radius: 12px;
  font-size: 14px;
  padding: 0 8px;
  color: ${ ({ theme }) => theme.colors.primary.dark };
  background: ${ ({ theme }) => theme.colors.primary.light };
`

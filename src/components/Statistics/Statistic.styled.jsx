import styled from '@emotion/styled'


export const List = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.04);
`;
export const Item = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 75px;
  height: 75px;
  border: 1px solid rgb(0 0 0 / 20%);
  background-color: ${props => props.backgroundColor}
`;
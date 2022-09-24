import styled from '@emotion/styled'

export const Section = styled.section`
  margin-left: auto;
  margin-top: 30px;
  margin-right: auto;
  text-align: center;
  width: 400px;
  height: 100%;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.04);
`;
export const Item = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  &:first-of-type {
border-bottom-left-radius: 5px;
}
&:last-of-type {
border-bottom-right-radius: 5px;
}
  text-align: center;
  width: 80px;
  height: 75px;
  border: 1px solid rgb(0 0 0 / 20%);
  background-color: ${props => props.backgroundColor}
`;

export const Label = styled.span`
margin-bottom: 5px;
font-weight: 600;
`
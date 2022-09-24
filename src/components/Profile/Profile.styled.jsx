import styled from '@emotion/styled'

export const Card = styled.div`
  margin-left: auto;
  margin-top: 30px;
  margin-right: auto;
  text-align: center;
  width: 400px;
  height: 100%;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Description = styled.div`
  padding: 25px;
` 

export const Name = styled.p`
  font-weight: 700;
  font-size: 25px;
  color: rgb(220,88,42)
`

export const Stats = styled.ul`
display: flex;
justify-content: space-around;
`

export const StatsItem = styled.li`
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(0 0 0/ 20%);
    background-color: rgb(0 0 0/ 10%);
    &:hover {
    background-color: rgb(100,100,100);
    }
`

export const Label = styled.span`
display: block;
font-weight: bold;
`


export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 5px solid rgb(220,88,42);
  overflow: hidden;
`;
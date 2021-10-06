import styled from 'styled-components'

//Component reuse many places

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ee4d2d;
  height: 3rem;
  border-radius: 2px;
  border: none;
  color: white;
  padding: 1px 6px;
  transition: 0ms.2s background-color ease;
  &:hover {
    background-color: #f05d40;
  }
`

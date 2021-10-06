//Styled component
import styled from 'styled-components'

export const Footer = styled.footer`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
  background: #f5f5f5;
  width: 10%;
  min-width: max-content;
  padding: 4.2rem 0 3.7rem;
  margin: 0 auto;
`
export const Footer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`
export const Footer2 = styled.div`
  font-size: 1.3rem;
  text-align: center;
  div {
    line-height: 2;
    &:first-child {
      margin-bottom: 1.5rem;
    }
  }
`
export const Language = styled.div`
  display: flex;
  span {
    padding: 0 0.3125rem;
    cursor: pointer;
    &::not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`

import styled from 'styled-components'
export const FormControl = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4rem;
  border-radius: 2px;
  border: ${props => (props.error ? '1px solid rgb(250 16 16 / 80%)' : '1px solid rgba(0, 0, 0, 0.14)')};
  border-color: ${({ focus }) => (focus ? 'rgba(0,0,0,0.54)' : '')};
  display: flex;
  box-shadow: inset 0 2px 0 rgb(0 0 0 / 2%);
  input {
    height: 4rem;
    width: 100%;
    outline: none;
    padding: 1.2rem;
    flex-grow: 1;
    font-size: 1.6rem;
    border: 0;
  }
`

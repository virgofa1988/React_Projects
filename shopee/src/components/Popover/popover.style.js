import styled, { keyframes } from 'styled-components'

//Popover
//PopOver Animation
export const PopoverEnterAnimation = keyframes`
0% {
  transform:scale(0);
  opacity:0;

}
to {
  transform:scale(1);
  opacity:1;  
}
`
export const Drawer = styled.div`
  top: 100%;
  right: 0;
  position: absolute;
  //Browser will know this component will change with animation, so it help to optimize change
  will-change: transform opacity transform-origin;
  //move the center of Drawer to Top and left
  transform-origin: calc(100% - 20px) top;

  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  opacity: 1;
  z-index: 400;
  border: 1px solid rgba(0, 0, 0, 0.09);
  :before {
    position: absolute;
    top: -10px;
    left: 0;
    content: '';
    height: 10px;
    opacity: 0;
    width: 100%;
  }
`
//Triangle Arrow
export const PopoverArrow = styled.div`
  border-bottom: 10px solid rgb(255, 255, 255);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  top: -10px;
  position: absolute;
  right: 6px;
  height: 0;
`
export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 /20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
`

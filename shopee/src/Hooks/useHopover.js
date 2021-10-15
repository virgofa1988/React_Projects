import { useState } from 'react'

export default function useHopover() {
  //State to control hover on profile
  const [activePopover, setActivePopover] = useState(false)

  //Action control on/off the Popover
  const showPopover = () => {
    setActivePopover(true)
  }
  const hidePopover = () => {
    setActivePopover(false)
  }
  return { activePopover, showPopover, hidePopover }
}

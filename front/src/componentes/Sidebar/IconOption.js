import React from 'react'
import { SidebarIcon } from './styled'

export const IconOption = ({text, Icon, active, secondary}) => {
  return (
    <SidebarIcon active = {active} secondary={secondary}>
        <Icon/>
        <h2>{text}</h2>
    </SidebarIcon>
  )
}



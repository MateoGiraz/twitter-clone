import React from 'react'
import { SidebarIcon } from './styled'

export const IconOption = ({text, Icon, active, secondary,func}) => {
  return (
    <SidebarIcon active = {active} secondary={secondary} onClick={()=> func ? func() : ()=>{}}>
        <Icon/>
        <h2>{text}</h2>
    </SidebarIcon>
  )
}



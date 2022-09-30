import React from 'react'
import { Contenedor } from './styled'
import { IconOption } from './IconOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

export const Sidebar = ({logout}) => {
  return (
    <Contenedor>
        <TwitterIcon className='twitter-icon'/>
        <IconOption Icon={HomeIcon} text='Home' active='true'/>
        <IconOption Icon={SearchIcon} text='Explore'/>  
        <IconOption Icon={NotificationsNoneIcon} text='Notifications'/>  
        <IconOption Icon={MailOutlineIcon} text='Messages'/>  
        <IconOption secondary='true' Icon={BookmarkBorderIcon} text='Bookmarks'/>  
        <IconOption secondary='true' Icon={ListAltIcon} text='Lists'/>  
        <IconOption secondary='true' Icon={PermIdentityIcon} text='Profile'/>  
        <IconOption secondary='true' Icon={MoreHorizIcon} text='Logout' func={logout}/>
        <Button variant='outlined' fullWidth >Tweet</Button>
    </Contenedor>
  )
}



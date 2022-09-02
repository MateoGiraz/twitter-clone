    import React from 'react'
    import { PostStyle, Avatar, PostBodyStyle, PostFooter, PostDescription, Images } from './styled'
    import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
    import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
    import RepeatIcon from '@mui/icons-material/Repeat';
    import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
    import PublishIcon from '@mui/icons-material/Publish';  


    export const Post = ({message, user}) => {
    return (
        <PostStyle>
            <div className="post-avatar">
                <Avatar>
                    <img  src='https://randomuser.me/api/portraits/men/89.jpg' alt='not found'></img>
                </Avatar>
            </div>
            <PostBodyStyle>
                <div>
                    <div>
                        <h3>{user}
                            <span> <VerifiedUserIcon className='post-icon'></VerifiedUserIcon> 
                            @mategzoficial </span></h3>
                            <p className='post-description'> {message} </p>
                    </div>
                    <Images>
                        <img src='http://i.stack.imgur.com/SBv4T.gif' alt='not found'></img>
                        <PostFooter>
                            <ChatBubbleOutlineIcon fontSize='small'/>
                            <RepeatIcon fontSize='small'/>
                            <FavoriteBorderIcon fontSize='small'/>
                            <PublishIcon fontSize='small'/>
                        </PostFooter>
                    </Images>
                </div>
            </PostBodyStyle>
        </PostStyle>
    )
    }


import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import { TweetBoxStyle, Form, Div, Avatar, DivBox, File } from './styled'
import { Button } from '@material-ui/core'

export const TweetBox = ({tweets, setTweets}) => {

function EventHandler(){
    const newTweet = [{message, user, gif}]
    setTweets([...newTweet, ...tweets])
    setMessage('')
    setUser('')
}

const [message, setMessage] = React.useState('')
const [user, setUser] = React.useState('')
const [gif, setGif] = React.useState('')


    return (    
            <TweetBoxStyle>
            <Form>
                <Div>
                    <Avatar>
                        <img  src='https://randomuser.me/api/portraits/men/89.jpg' alt='not found'></img>
                    </Avatar>
                    <File type='file'/>
                    <div className='columns'>
                        <input className='in'
                        placeholder='What´s happening?'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                        <input className='in'
                        type='text'
                        placeholder='User'
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        />
                    </div>
                </Div>
                <Div>
                    <DivBox>
                        <AddPhotoAlternateIcon/>
                        <File type='file' secondary className='onHover'/>
                        <GifIcon/>
                        <File type='file' primary className='onHover'/>
                    </DivBox>
                    <input
                    type='text'
                    placeholder='Optional: gif/image´s url'
                    onChange={(event)=> setGif(event.target.value)}
                    />
                    <Button onClick={EventHandler}>Tweet</Button>
                </Div>
            </Form>
        </TweetBoxStyle>
  )
}

import {useState} from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import { TweetBoxStyle, Form, Div, Avatar, DivBox, File } from './styled'
import { Button } from '@mui/material';

export const TweetBox = ({saveTweet, handleFileInput}) => {

const [message, setMessage] = useState('')
const [gif, setGif] = useState('')

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
                    </div>
                </Div>
                <Div>
                    <DivBox>
                        <AddPhotoAlternateIcon/>
                        <File 
                        type='file' 
                        secondary className='onHover'
                        onChange={e => handleFileInput(e)}
                        />
                    </DivBox>
                    <input
                    type='text'
                    placeholder='Optional: gif/image´s url'
                    onChange={(event)=> setGif(event.target.value)}
                    />
                    <Button onClick={()=> saveTweet(message, gif)}>Tweet</Button>
                </Div>
            </Form>
        </TweetBoxStyle>
  )
}

import { Search } from '@mui/icons-material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {WidgetsStyle, Header, DivIcon, DivContent} from './styled'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'


export const Widgets = () => {
  return (
    <WidgetsStyle>
      <Header>
        <DivIcon>
          <SearchIcon className='search-icon' />
          <input
          placeholder='Buscar en twitter'
          />
        </DivIcon>
      </Header>
      <DivContent>
        <h2>What´s happening</h2>

        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{height: 400}}
        />  

        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />

      </DivContent>
    </WidgetsStyle>
  )
}



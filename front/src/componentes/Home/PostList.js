import {Post} from './Post'

const PostList = ({tweets}) => {
  return tweets.map(tweet => <Post message={tweet.message} user={tweet.user}/>)
}
export default PostList

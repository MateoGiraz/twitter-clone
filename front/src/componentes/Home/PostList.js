import {Post} from './Post'

const PostList = ({tweets=[]}) => {
  return tweets.map(tweet => <Post file={tweet.file} key={tweet._id} img={tweet.image} message={tweet.data} username={tweet.user}/>)
}
export default PostList


const saveTweet = async (message, image, postTweet, setTweets, tweets, currentUser) => {

  if(currentUser){
    const newTweet = {data:message, user:currentUser, image}
    postTweet(newTweet)
    .then(data=>setTweets([data, ...tweets]))
    .catch(e => console.log(e))
  }
  else alert("Please Login to tweet")

}

export default saveTweet
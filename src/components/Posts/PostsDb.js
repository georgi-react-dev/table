import React, {useEffect} from 'react'

function PostsDb() {


    useEffect(() => {
      (async() => {
        const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/posts`);
        const data = await results.json();
        console.log("POSTS", data);
      })()
    
    }, [])
    

  return (
    <div>PostsDb</div>
  )
}

export default PostsDb
import React from 'react'
import Feed from './Feed'
import{ FaMobile,FaTablet,FaLaptop } from 'react-icons/fa';


  const Home = ({post,width}) => {
    return (
      <div>
          <h1>Home page</h1>
          {
              width<600 ? <FaMobile /> :width<900 ?<FaTablet />:<FaLaptop/>
          }
      
  
         {
          post.length?<Feed post={post}/>:<p>post not found</p>
         }
            </div>
  )
}

export default Home
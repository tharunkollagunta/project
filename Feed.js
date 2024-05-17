import React from 'react'
import Data from './Data'

const Feed = ({post}) => {
  return (
    <div>
        {
    post.map((po)=>(
    <Data po={po}key={po.id}/>
    ))
}
    </div>
  )
}

export default Feed
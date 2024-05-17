import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPage = ({post,editTitle,setEditTitle,editContent,setEditContent,handleEdit}) => {
    const {id}=useParams()
    const posts=post.find((post)=>(post.id).toString()===id)
    useEffect(()=>{
    if(posts){
        setEditTitle(posts.title)
        setEditContent(posts.content)
    }},[posts,setEditTitle,setEditContent])
    
  return (
    <div>
        {
            editTitle&&
            <>
            <label>Title</label>
            <input type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
            <label>Content</label>
          <input type='text' value={editContent} onChange={(e)=>setEditContent(e.target.value)} />
          <button onClick={()=>handleEdit(posts.id)}>Edit</button> 
            </>
        }
        {
            !editTitle&&
            <>
            <h2>Page not found</h2>
            <p>Please visit home page</p>
            </>
        }
    </div>
  )
}

export default EditPage
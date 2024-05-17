import {React} from 'react'
import {Link, useParams} from 'react-router-dom'


const Postpage = ({post,handleDelete,handleEdit}) => {
  const {id}=useParams()
  const posts=post.find((po)=>(po.id).toString()===id)
  return (
    <div>
     {
      posts&&
      <>
      <h1>{posts.title}</h1>
      <h3>{posts.date}</h3>
      <p>{posts.content}</p>
      <button onClick={()=>handleDelete(posts.id)}>Delete</button>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
      </>
     }
     {
      !posts&&
      <>
      <p>page not found</p>
      </>
     }
    </div>
  )
}

export default Postpage
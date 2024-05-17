import React from 'react'
import { Link} from 'react-router-dom'

const Navigation = ({search,setSearch}) => {
  return (
        
    <div>
        <label>search</label>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Newpost'>NewPost</Link></li>
        <li><Link to='/about'>About us</Link></li>
        </ul>
        </div>
  )
}

export default Navigation
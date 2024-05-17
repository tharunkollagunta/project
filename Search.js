import React from 'react'

const Search = ({Search,setsearch}) => {
  return (
    <div>
        <lable>search</lable>
        <input type='text'value={Search}onChange={(e)=>setsearch(e.target.value)}/>
    </div>
  )
}

export default Search
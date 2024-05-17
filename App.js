import { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from"./Postpage";
import Footer from"./Footer"
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import {format}from 'date-fns'
import Data from "./Data";
import api from './api/Posts'
import EditPage from "./EditPage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const {width}=useWindowSize()
  const [editTitle,setEditTitle]=useState('')
  const [editContent,setEditContent]=useState('')
  const[Title,setTitle]=useState('')
  const[Content,setContent]=useState('')
  const[Search,setSearch]=useState('')
  const navigate=useNavigate()
  const[fileredResult,setFilteredResult]=useState('')
  const [post,setPost]=useState([])
const handleSubmit=async(e)=>{
  e.preventDefault()
  const id=post.length?post[post.length-1].id+1:1
  const date=format(new Date(),'dd-MM-yyyy')
  const newitem={id,title:Title,date,content:Content}
  const response=await api.post('./list',newitem)
  setPost(response.data)
  navigate('/')

}
const handleDelete=async(id)=>{
  await api.delete(`/list/${id}`)
  const result=post.filter((po)=>po.id!==id)
  setPost(result)
  navigate('/')
}
useEffect(()=>{
  const result=post.filter((po)=>(po.title).toLowerCase().includes(Search.toLowerCase())||(po.content).toLowerCase().includes(Search.toLowerCase()))
  setFilteredResult(result)
},[Search,post])

useEffect(()=>{
  const fetchData=async()=>{
    try{
    const response=await api.get('/list')
    setPost(response.data)
    }
    catch(err){
      console.log(err.message)
    }
  }
  fetchData()
},[ ])

const handleEdit=async(id)=>{
  const date=format(new Date(),'dd-MM-yyyy')
  const updatedPost={id,title:editTitle,date,content:editContent}
  try{
    const response=api.put(`/list/${id}`,updatedPost)
    post.map((post)=>post.id===id? {...response.data}: post)
  }
  catch(err){
    console.log(err.message)
  }
  navigate('/')
}

  return (
    <div>
      <Navigation Search={Search}setSearch={setSearch}/>
      <Routes>
<Route path="/"element={<Home post={post}/>}/>
<Route path="/about"element={<About/>}/>
<Route path="/Newpost"element={<Newpost Title={Title}setTitle={setTitle}Content={Content} setContent={setContent}handleSubmit={handleSubmit}/>}/>
<Route path="/post/:id"element={<Postpage post={post}handleDelete={handleDelete}/>}/>
<Route path="/Footer"element={<Footer/>}/>
<Route path="/Navigation"element={<Navigation />}/>
<Route path="/Data"element={<Data/>}/>
<Route path="/edit/:id" element={<EditPage post={post} editTitle={editTitle} setEditTitle={setEditTitle} editContent={editContent} setEditContent={setEditContent} handleEdit={handleEdit}/>} />
</Routes>
<Home width={width} post={post}/>
    </div>
  );
}

export default App;

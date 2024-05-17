import { useEffect ,useState } from 'react'
const useWindowSize = () => {
const[windowsize,setWindowSize]=useState({
  width:undefined,
  height:undefined
})
useEffect(()=>{
  const handlesSize=()=>{
    setWindowSize({
    width:window.innerWidth,
    height:window.innerHeight
})
  }
handlesSize()
window.addEventListener("size",handlesSize)
return()=>window.removeEventListener("size",handlesSize)
},[])
return windowsize
}
export default useWindowSize
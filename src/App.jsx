import "./App.css"
import Nav from "./Nav"
import Bag from "./Bag"
import { useState } from "react"
let data1 = [
  {
    pic: "https://www.course-api.com/images/cart/phone-1.png",
    name: "Samsung Galaxy S8",
    price: 399.99,
    number: 1
  },
  {
    pic: "https://www.course-api.com/images/cart/phone-2.png",
    name: "Google Pixel",
    price: 499.99,number: 1
  },
  {
    pic: "https://www.course-api.com/images/cart/phone-3.png",
    name: "Xiaomi Redmi Note 2",
    price: 699.99,number: 1
  },
  {
    pic: "https://www.course-api.com/images/cart/phone-4.png",
    name: "Samsung Galaxy S7",
    price: 599.99,number: 1
  }
]

function App() {
  const [data,setData]=useState(data1);
  function remover(idx){
    setData(data.filter((ele,id)=>{
      if(id!=idx)
        return ele;
    }))
  }
  function increaser(idx){
    setData(data.map((ele,id)=>{
      if(id==idx)
       ele.number+=1;
      return ele;
    }))
  }
  function decreaser(idx){
    if(data[idx].number>1)
    setData(data.map((ele,id)=>{
      if(id==idx){
        ele.number-=1;
      }
      return ele;
    }))
    else
    remover(idx);
  }
  return (
    <>
      <Nav data={data}></Nav>
      <Bag data={data} setData={setData} remover={remover} increaser={increaser} decreaser={decreaser}></Bag>
    </>
  )
}
export default App;
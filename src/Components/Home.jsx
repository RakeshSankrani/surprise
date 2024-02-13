import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: 20, flex:1, height: "95vh" }}>
    <div style={{justifyContent:"center", flexDirection:"row", alignItems:"center", display:"flex"}}>   
    <h1 style={{textAlign:"center", marginRight:20}}> Hello Babyy</h1>
    <img src='http://pluspng.com/img-png/heart-png--3100.png' height="50" width="50" />
    </div> 
    <h4 style={{marginBottom:20, marginTop:20}}> I just wanted to make something for you with the skills that I have so that I can show you how much you mean to me.</h4>
    <h4 style={{marginBottom:20}}> So, I thought why not give it a try and see what I can do out of it.</h4>
    <h4 style={{marginBottom:20}}> I know I am not best at it but still trying to show that You mean world to me and just a small glimpse of our story using coding stuff.</h4>
    <h4 style={{marginBottom:20}}> Let get started, shall we?</h4>
    <div class="d-flex align-items-center justify-content-center flex-column">
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/me'} style={{color:"white", textDecorationLine:"none"}}> Click Me, Please </Link></button>
    </div>
  </div>
  )
}

export default Home
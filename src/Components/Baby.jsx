import React from 'react'
import { Link } from 'react-router-dom'
import la1 from "../Images/Baby1.jpeg"
import la2 from "../Images/baby2.jpeg"
import la3 from "../Images/baby3.jpeg"
import la4 from "../Images/baby4.jpeg"
import la5 from "../Images/baby5.jpeg"
import la6 from "../Images/baby6.jpeg"
const Baby = () => {
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
        <h1 style={{textAlign:'center'}}>This is Disha</h1>
        <h4 style={{textAlign:'center'}}>I also go by ("BABY", "BUBU", "JAAN", "SUNSHINE", and MAJORLY "KOHINOOR")</h4>

        <h4> She is Disha, she was literally opposite of me like she was living the best she could and always in demand and she was cute and hot for obvious reasons. </h4>
        <h4> The reason for Rakesh saying good things about her is below you can give it a look by your own</h4>

        <div class="row">
    <div class="col-sm">
     <img src={la1} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la2} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la3} class="img-fluid"/>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm">
     <img src={la4} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la5} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la6} class="img-fluid"/>
    </div>
  </div>
        <h4 style={{marginTop:20, marginBottom:20}}> For some reasons she is still not complete I mean you can see happiness and everything except satisfaction and I will show you what satisfaction looks like </h4>
        <div class="d-flex align-items-center justify-content-center flex-column">
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/Result'} style={{color:"white", textDecorationLine:"none"}}> Result </Link></button>
    </div>
    </div>
    </div>
  )
}

export default Baby
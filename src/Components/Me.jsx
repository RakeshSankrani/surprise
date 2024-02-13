import React from 'react'
import { Link } from 'react-router-dom'
import me1 from "../Images/me1.jpeg"
import me2 from "../Images/me2.jpeg"
import me3 from "../Images/me3.jpeg"
import me4 from "../Images/me4.jpeg"
import me5 from "../Images/me5.jpeg"
import me6 from "../Images/me6.jpeg"
const Me = () => {
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
        <h1 style={{textAlign:'center'}}>Hello I am Rakesh</h1>
        <h4 style={{textAlign:'center'}}>I also go by ("GOKU", "GANDU", "BABY", "LOVE", and MAJORLY "PANDU")</h4>

        <h4> SO, it's just a normal me i'e Rakesh who was all stupid, all misserable and weird and seriously not for this world or atleast someone who taught who doesn't belong with other people</h4>
        <h4> If you still think I am not the one mentioned above, you should ssly give a look on this photos I guess Poverty hitted me really hard, try not to laugh</h4>

        <div class="row">
    <div class="col-sm">
     <img src={me1} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me2} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me3} class="img-fluid"/>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm">
     <img src={me6} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me4} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me5} class="img-fluid"/>
    </div>
  </div>
        <div style={{margin:20}}>
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/baby'} style={{color:"white", textDecorationLine:"none"}}> wanna see next? </Link></button>
    </div>
    </div>
    </div>
  )
}

export default Me
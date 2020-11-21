import './card.css';
import React from 'react'; 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
function Card(x) {
    return (
        <div className="card">
        <div className="container">
        <button><i class="fas fa-pen"></i></button>

        <div className="imge">
        <img className="card-img" src={x.y} alt= " "/>
        </div>
        </div>
        <div className="container2">

        <div className="text">
        <h3>{x.n}</h3>
        </div>
<div className="subtext"></div>
      <div className="subtext">
      <p>
        {x.t}
        </p>
      </div>
        <div className="social-icon">
        <a href={x.i}><i class="fab fa-2x fa-instagram"></i></a>
            <a href={x.tw}><i class="fab fa-2x fa-twitter"></i></a>
            <a href={x.g}><i class="fab fa-2x fa-github"></i></a>


        </div>


        
</div> 
/</div>



     
    )
}
export default Card;

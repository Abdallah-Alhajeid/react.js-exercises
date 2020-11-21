import React from 'react'
// import './index.css';
import Card from './card'
import Abd from './images/abd.jpg';
import Ahmad from './images/ahmad.jpg';
import Ashraf from './images/ashraf.jpg';
import Monther from './images/monther.jpg';
import Osama from './images/osama.jpg';
import Diaa from './images/diaa.jpg';
import Anas from './images/anas.jpg';


function App (x) {
  return (
    <div className= "App">
    <div className="flex-container">
    <Card y={Abd} n="Abdallah"  t="I'm the best gamer on the world i taught ninja how to play 😎" i="instagram.com" tw="https://twitter.com/alhajeid_abd" g="https://www.linkedin.com/in/abdallah-alhajeid/" /> 
    <Card y={Ahmad} n="Ahmad" t="I'm a nurse but i code better than bill gates who wanna fight?🙂

"/>
    <Card y={Ashraf} n="Ashraf" t="I'm a control FREAK!! give me the host! and I'll mute everyone!😂

"/>
    <Card y={Monther} n="Monther"t="I'm civil engineer but i build cities of websites😏

" />
    <Card y={Osama} n="Osama" t="The boss of the MAFIA you mess with me consider your self DEAD!😎" />
    
    <Card y={Diaa} n="Diaa" t="lorem ipsum" s="facebook.com" />

    <Card y={Anas} n="Anas" t="lorem ipsum" />

</div>
</div>

  );
}






export default App;

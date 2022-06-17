var heading = 
     {
    'Moon' : 'MOON',
    'Mars' : 'MARS',
    'Europa':'EUROPA',
    'Titan': 'TITAN'
}
var desc ={
    'Moon' : `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    'Mars' : `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    'Europa':`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    'Titan': `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`
 }
 var avgDist = {
    'Moon' : '384,400 KM',
    'Mars' : '225 MIL. km',
    'Europa':'628 MIL. km',
    'Titan': '1.6 BIL. km'
 }
 var estTime = {
    'Moon' : '3 Days',
    'Mars' : '9 Months',
    'Europa':'3 Years',
    'Titan': '7 years'
 }
 var planetimg = {
    'Moon' : './assets/destination/image-moon.png',
    'Mars' : './assets/destination/image-mars.png',
    'Europa':'./assets/destination/image-europa.png',
    'Titan': './assets/destination/image-titan.png'
 }
 
 var nav = document.getElementsByClassName('destnav');
  
 var nounderline = "0px"
 var underline = "1px solid #fff"

 


 for(var a =0;a<nav.length; a++){
    nav[a].onclick =function(){
        var clickedValue = this.innerHTML;
        console.log(clickedValue);
       document.getElementById('destHead').innerHTML = heading[clickedValue]
       document.getElementById('destPara').innerHTML = desc[clickedValue]
       document.getElementById('avgDistance').innerHTML = avgDist[clickedValue]
       document.getElementById('estTime').innerHTML = estTime[clickedValue]
       document.querySelector('#planetimg').src= planetimg[clickedValue]

      for (b=0;b<nav.length;b++){
        nav[b].style["border-bottom"] = nounderline;

    }
    this.style["border-bottom"] = underline;

 }
 }
//  let img = document.querySelector('#planetimg');
//  let moon = document.querySelector('#moon');
//  let mars = document.querySelector('#mars');
//  let europa = document.querySelector('#europa');
//  let titan = document.querySelector('#titan');


//  moon.addEventListener('click', ()=>{
//     img.src = './assets/destination/image-moon.png';
//  })
//  mars.addEventListener('click', ()=>{
//     img.src = './assets/destination/image-mars.png';
//  })
//  europa.addEventListener('click', ()=>{
//     img.src = './assets/destination/image-europa.png';
//  })
//  titan.addEventListener('click', ()=>{
//     img.src = './assets/destination/image-titan.png';
//  })
 


 
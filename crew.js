var crew = [
    {
        "name": "Douglas Hurley",
        "images": "./assets/crew/image-douglas-hurley.png",
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "images":"./assets/crew/image-mark-shuttleworth.png",
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "images": "./assets/crew/image-victor-glover.png",
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "images": "./assets/crew/image-anousheh-ansari.png",
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
]




var serOne = document.getElementById('serOne');
var serTwo = document.getElementById('serTwo');
var serThree = document.getElementById('serThree');
var serFour = document.getElementById('serFour');

var Name = document.getElementById('name');
var role = document.getElementById('postion');
var bio = document.getElementById('desc');
var images = document.querySelector('#crewimg');


var curentservice = 0;
serOne.onclick = function(){
    curentservice = 0;
    var name= crew[curentservice].name;
    var postion = crew[curentservice].role;
    var desc = crew[curentservice].bio;
    var image = crew[curentservice].images;
    

    Name.innerHTML= name;
    role.innerHTML = postion;
    bio.innerHTML = desc;
    images.src = image; 
    
}

serFour.onclick = function(){
    curentservice = 3;
    var name= crew[curentservice].name;
    var postion = crew[curentservice].role;
    var desc = crew[curentservice].bio;
    var image = crew[curentservice].images;
       

    Name.innerHTML= name;
    role.innerHTML = postion;
    bio.innerHTML = desc;
    images.src = image; 
    
    
}

serTwo.onclick = function(){
    curentservice = 1;
    var name= crew[curentservice].name;
    var postion = crew[curentservice].role;
    var desc = crew[curentservice].bio;
    var image = crew[curentservice].images;
    

    Name.innerHTML= name;
    role.innerHTML = postion;
    bio.innerHTML = desc;
    images.src = image; 
   
}
serThree.onclick = function(){
    curentservice = 2;
    var name= crew[curentservice].name;
    var postion = crew[curentservice].role;
    var desc = crew[curentservice].bio;
    var image = crew[curentservice].images;
    

    Name.innerHTML= name;
    role.innerHTML = postion;
    bio.innerHTML = desc;
    images.src = image; 
   
    
}

var circleone =document.querySelector('.one')
var circletwo =document.querySelector('.two')
var circlethree =document.querySelector('.three')
var circlefour =document.querySelector('.four')

var prevcolor = '#000000'

var newcolor = 'fffff'


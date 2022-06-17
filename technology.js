var Name={
    '1' : 'Launch vehicle',
    '2' : 'Spaceport',
    '3' : 'Space capsule',
}

var desc ={
    '1' :  `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    '2' : `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    '3' : `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,

}
var img ={
    '1':'./assets/technology/image-launch-vehicle-portrait.jpg',
    '2':'./assets/technology/image-spaceport-portrait.jpg',
    '3':'./assets/technology/image-space-capsule-portrait.jpg',
}

var noBgColor = 'transparent'
var bgColor = "#fff"
var noFontColor = "#fff";
var fontColor = "#000"
var nav =document.getElementsByClassName('tech');

for(var i = 0; i < nav.length; i++){
    nav[i].onclick =function(){
        var clicked =  this.innerHTML;
        console.log(clicked);
        document.getElementById('name').innerHTML = Name[clicked];
        document.getElementById('desc').innerHTML = desc[clicked];
        document.querySelector('#techimg').src= img[clicked];

        for (b=0; b<nav.length;b++){
            nav[b].style.backgroundColor = noBgColor;
            nav[b].style.color = noFontColor;
        }
        this.style.backgroundColor = bgColor;
        this.style.color= fontColor;

    }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



const offset = window.scrollY;










function scroll(onscroll) {
    const offset = window.scrollY;
    console.log(offset);
        if(offset > 900){
        document.querySelector('.pl7x').classList.add('pl7xit')
    }
    else{
            document.querySelector('.pl7x').classList.remove('pl7xit')
    }
    
    
    
    
    
    
       if(offset > 900 && offset < 1801){
        document.querySelector('.pl1x').classList.add('pl1xit')
    }
    else{
            document.querySelector('.pl1x').classList.remove('pl1xit')
    }
    
    
    
    
    if(offset > 1801 && offset < 2701
){
        document.querySelector('.pl2x').classList.add('pl2xit')
    }
    else{
            document.querySelector('.pl2x').classList.remove('pl2xit')
    }
    
    
    
    
    if(offset > 2701
 && offset < 3601){
        document.querySelector('.pl3x').classList.add('pl3xit')
    }
    else{
            document.querySelector('.pl3x').classList.remove('pl3xit')
    }
    
    
    
    
    if(offset > 3601 && offset < 4501){
        document.querySelector('.pl4x').classList.add('pl4xit')
    }
    else {
            document.querySelector('.pl4x').classList.remove('pl4xit')
    }
    
    
    
    if(offset > 4501){
        document.querySelector('.pl5x').classList.add('pl5xit')
    }
    else{
            document.querySelector('.pl5x').classList.remove('pl5xit')
    }
    
    
 
    
    ;

}

 
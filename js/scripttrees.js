    const section = document.querySelector('section');
    const template = document.querySelector('#myTemp').content;


    const link = "https://spreadsheets.google.com/feeds/list/1KcKfNYIQ1ubnAnsOAxoC0gFCckfNb2HgLyDFf0HaFT4/od6/public/values?alt=json";

    const imgimport = "http://patwalmmd.tk/safetree/images/";



    function loadJSON(link) {
        fetch(link).then(e => e.json()).then(data => data.feed.entry.forEach(displayDrzewka));
    }

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    function displayDrzewka(data) {
        const clone = template.cloneNode('true');
        clone.querySelector("h1").textContent = data.gsx$name.$t;
        clone.querySelector(".latin").textContent = "Latin name: " + data.gsx$latin.$t;
        clone.querySelector(".origin").textContent = "Origin: " + data.gsx$origin.$t;

        clone.querySelector(".height").textContent = "Height: " + data.gsx$height.$t;

        clone.querySelector(".status").textContent = "Status: " + data.gsx$status.$t;
        
const xxx = data.gsx$wiki.$t;
        clone.querySelector(".wiki").setAttribute("href", xxx);
        
 

        clone.querySelector(".magic").textContent = "Energy: " + data.gsx$magic.$t;
        const img = data.gsx$image.$t;
        
        clone.querySelector(".img2").setAttribute("src", imgimport + img);


        section.appendChild(clone);
    }
    loadJSON(link);

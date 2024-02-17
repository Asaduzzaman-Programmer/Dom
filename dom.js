
// const allHead = document.getElementsByTagName("h1");
// for(const head of allHead){
//     console.log(head);
// }

// const innerText = document.getElementsByTagName("li");
// for(const inner of innerText){
//     console.log(inner.innerText)
// }


// document.getElementById("jhinuk")
// const sawon = document.getElementsByClassName("imp-place")
// for(const asad of sawon){
//     console.log(asad.innerText)
// }

// const changes = document.getElementById("jhinuk");
// changes.innerText = "koi koi koi";

// const chan = document.getElementById("come");
// chan.innerText = "koi koi koi"


// const ojil = document.querySelectorAll(".sec li");
// for (const bal of ojil){
//     console.log(bal.innerText)
// }

// document.getElementById("jhinuk").style.color = "green"

// document.getElementById("koi").style.color = "red"
// document.getElementById("koi").style.textAlign = "center"

const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section)
    section.style.color = "yellow";
    section.style.backgroundColor = "red";
    section.style.width = "200px"
    
}

const place = document.getElementById("jhinuk");
place.classList.add("jhinuk")
place.classList.remove("jhinuk")
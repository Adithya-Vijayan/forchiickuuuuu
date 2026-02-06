const screens=document.querySelectorAll(".screen");
let i=0;

function unlock(){
  const code=document.getElementById("code").value;
  if(code==="160923"){
    document.getElementById("lock").classList.remove("active");
    screens[1].classList.add("active");
  }else{
    document.getElementById("error").innerText="Still wrong 😏 try again";
  }
}

function start(){
  document.getElementById("music").play();
  next();
}

function next(){
  screens[i+1]?.classList.add("active");
  screens[i]?.classList.remove("active");
  i++;
}

screens.forEach(s=>{
  s.addEventListener("click",()=>{
    if(!s.classList.contains("proposal") && s.id!=="lock") next();
  });
});

function move(){
  const n=document.querySelector(".no");
  n.style.transform=`translate(${Math.random()*300-150}px,${Math.random()*300-150}px)`;
}

function yes(){
  document.getElementById("final").innerText=
  "Happy Valentine’s Day 💕\nThis year, next year, always — us.";
}


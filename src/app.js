 
  
  async function refreshimg() {
    const forWork=document.querySelector('#sfwChecker > input:checked ').value;
    const category=document.querySelector('categorySelect').value;
    const response = await fetch("https://api.waifu.pics/"+forWork+"/"+category); 
    const images = await response.json();
    document.getElementById("js-link").src=images["url"];
  } 
  refreshimg();
  function sfwChange(){
    const categoriesSFW=['waifu','neko','shinobu','megumin','bully','cuddle','hug','awoo','kiss','lick','pat','smug','bonk','yeet','blush','smile','happy','poke'];
    let p =document.getElementById('categorySelect'); 
    while(p.hasChildNodes()){
      p.removeChild(p.firstChild);
    }
    for(let i=0;i<categoriesSFW.length;i++){
      let x= document.createElement('option');
      p.appendChild(x);
      x.value=categoriesSFW[i];
      x.title=categoriesSFW[i];
      x.textContent=categoriesSFW[i];
    }
  }
  
  function nsfwChange(){
    const categoriesNSFW=['waifu','neko','blowjob'];
    let p =document.getElementById('categorySelect'); 
    while(p.hasChildNodes()){
      p.removeChild(p.firstChild);
    }
    for(let i=0;i<categoriesNSFW.length;i++){
      let x= document.createElement('option');
      p.appendChild(x);
      x.value=categoriesNSFW[i];
      x.title=categoriesNSFW[i];
      x.textContent=categoriesNSFW[i];
    }
  }
  document.getElementById("sfwbutton").addEventListener("click",sfwChange);
  document.getElementById("nsfwbutton").addEventListener("click",nsfwChange);
  document.getElementById("button").addEventListener("click",refreshimg);
  
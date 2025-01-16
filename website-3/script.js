const toggle = document.querySelector(".nav-toggle");
const header = document.querySelector("header");
const apiUrl = "https://dummyjson.com/posts";
const apiContainer = document.querySelector(".api-container");

toggle.addEventListener("click", ()=>{
  header.classList.toggle("active")
})


async function fetchApi(){
  try{
    const res = await fetch(apiUrl);
    const data = await res.json();
    displayPosts(data.posts);
  }catch(err){
    console.log("error:", err);
    apiContainer.innerHTML = `<p> try again</p>`
  }
}

function displayPosts(posts){
  apiContainer.innerHTML="";
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className="api-card";
    card.innerHTML= `
    <div class="title">${post.title}</div>
    <div class="body">${post.body}</div>
    <div class="likes">Likes: ${post.reactions.likes}</div>    
    `
    apiContainer.appendChild(card);
  });
  
};


fetchApi();

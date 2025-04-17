function savePost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (!title || !content) {
      alert("Please fill in both fields.");
      return;
    }
  
    const post = { title, content, date: new Date().toLocaleString() };
  
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post); // add new post at the top
    localStorage.setItem("posts", JSON.stringify(posts));
  
    document.getElementById('title').value = "";
    document.getElementById('content').value = "";
  
    displayPosts();
  }
  
  function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1); // remove post at index
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
  }
  
  function displayPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postContainer = document.getElementById("posts");
    postContainer.innerHTML = "";
  
    posts.forEach((post, index) => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
      <small>${post.date}</small> 
      <h3>${post.title}</h3>
        <p>${post.content}</p>
        
        <br/>
        <button onclick="deletePost(${index})">Delete</button>
         <button onclick="editPost(${index})">edit</button>
      `;
      postContainer.appendChild(div);
    });
  }
  
  
  // Load posts on page load
  window.onload = displayPosts;
  
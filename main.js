const LinksSocialMedia = {
  github: "keitioliveira",
  linkedin: "in/keitioliveira/",
  instagram: "keiti.oliveira",
  facebook: "keiti.deoliveira"
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

   li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    UserImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

var iconlinkedin = document.getElementById("iconlinkedin");
iconlinkedin.addEventListener("mouseenter", function( event ) {
  this.className= "animate__animated animate__bounce";
}, false);
iconlinkedin.addEventListener("mouseover", function( event ) {
  this.className = "";
}, false);

var iconinstagram = document.getElementById("iconinstagram");
iconinstagram.addEventListener("mouseenter", function( event ) {
  this.className= "animate__animated animate__bounce";
}, false);
iconinstagram.addEventListener("mouseover", function( event ) {
  this.className = "";
}, false);

var iconfacebook = document.getElementById("iconfacebook");
iconfacebook.addEventListener("mouseenter", function( event ) {
  this.className= "animate__animated animate__bounce";
}, false);
iconfacebook.addEventListener("mouseover", function( event ) {
  this.className = "";
}, false);


getGitHubProfileInfos()

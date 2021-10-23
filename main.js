const LinksSocialMedia = {
  github: "keitioliveira",
  youtube: "UCCwQ5XWH_jMGfasJZTyPJMQ",
  facebook: "keiti.deoliveira",
  instagram: "keiti.oliveira",
  twitter: "keitioliveira3"
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

getGitHubProfileInfos()

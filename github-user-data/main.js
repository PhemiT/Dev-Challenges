const searchInput = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const userInfo = {
    userName: document.getElementById("user-name"),
    userJoinDate: document.getElementById("user-join-date"),
    userTag: document.getElementById("user-tag"),
    userBio: document.getElementById("user-bio"),
    userRepos: document.getElementById("user-repos"),
    userFollowers: document.getElementById("user-followers"),
    userFollowing: document.getElementById("user-following"),
    userLocation: document.getElementById("user-location"),
    userTwitterTag: document.getElementById("user-twitter-tag"),
    userWebsite: document.getElementById("user-website"),
    userOrganization: document.getElementById("user-organization"),
    userImg: document.getElementById("user-img")
}
const userCardComponent = document.getElementById("user-card-component-details")
const emptyField = document.getElementById("empty-field-text")

const getRepoData = async() => {
    let response = await fetch(`https://api.github.com/users/${searchInput.value}`)
    let repoData = await response.json()

    userInfo.userName.innerHTML = repoData.name;
    userInfo.userTag.innerHTML = repoData.login;
    userInfo.userBio.innerHTML = repoData.bio;
    userInfo.userRepos.innerHTML = repoData.public_repos;
    userInfo.userFollowers.innerHTML = repoData.followers;
    userInfo.userFollowing.innerHTML = repoData.following;
    userInfo.userLocation.innerHTML = repoData.location;
    userInfo.userTwitterTag.innerHTML = repoData.twitter_username;
    userInfo.userWebsite.innerHTML = repoData.blog;
    userInfo.userOrganization.innerHTML = repoData.company;
    userInfo.userImg.src = repoData.avatar_url

    console.log(repoData.login)
    emptyField.style.display = "none"
    userCardComponent.style.display = "grid"
}

searchBtn.addEventListener("click", getRepoData)
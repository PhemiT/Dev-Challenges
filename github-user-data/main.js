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
const notFound = "unavailable"
const themeChanger = document.getElementById("theme-changer")
const darkTheme = document.getElementById("dark")
const bodyClass = document.body.classList




const getRepoData = async() => {
    let response = await fetch(`https://api.github.com/users/${searchInput.value}`)
    let repoData = await response.json()


    // update DOM
    userInfo.userName.innerHTML = repoData.name?repoData.name:notFound
    userInfo.userTag.innerHTML = repoData.login;
    userInfo.userBio.innerHTML = repoData.bio?repoData.bio:notFound
    userInfo.userRepos.innerHTML = repoData.public_repos;
    userInfo.userFollowers.innerHTML = repoData.followers;
    userInfo.userFollowing.innerHTML = repoData.following;
    userInfo.userLocation.innerHTML = repoData.location?repoData.location:notFound
    userInfo.userTwitterTag.innerHTML = repoData.twitter_username?repoData.twitter_username:notFound
    userInfo.userWebsite.innerHTML = repoData.blog?repoData.blog:notFound
    userInfo.userOrganization.innerHTML = repoData.company?repoData.company:notFound
    userInfo.userImg.src = repoData.avatar_url
    userInfo.userJoinDate.innerHTML = `Joined ${repoData.created_at.slice(0, 10)}`
    emptyField.style.display = "none"
    userCardComponent.style.display = "grid"
}

searchBtn.addEventListener("click", getRepoData)

const changeTheme = () => {
    bodyClass.toggle("lightTheme")
}

themeChanger.addEventListener("click", changeTheme)
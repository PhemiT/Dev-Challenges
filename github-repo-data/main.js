const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const repoContainer = document.getElementById("repo-details")



const getRepoData = async() => {
    let response = await fetch(`https://api.github.com/users/${searchInput.value}/repos`)
    let repoData = await response.json()

    console.log(repoData)

    const repoRender = (repo) =>  { return (`
        <div key=${repo.id} class="repo-box">
            <h1 class="repo-title">${repo.name}</h1>
            <p>${repo.description}</p>
        </div>
    `)}

    repoContainer.innerHTML = repoData.map((repo) => {
        return(repoRender(repo))
    }).join("")
}

searchBtn.addEventListener("click", getRepoData)

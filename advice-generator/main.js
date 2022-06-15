const adviceText = document.getElementById('advice__text')
const adviceNumber = document.getElementById('advice__number')
const adviceDice = document.getElementById('advice__dice')

const getAdvice = async() => {
    let response = await fetch('https://api.adviceslip.com/advice')
    let adviceData = await response.json()

    adviceNumber.innerHTML= ` #${adviceData.slip.id}`
    adviceText.innerHTML= adviceData.slip.advice
}

getAdvice()

adviceDice.addEventListener("click", getAdvice)

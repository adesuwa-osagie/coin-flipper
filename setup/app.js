const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")

const color = document.querySelector(".color")

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

const backgroundColor = () => {
    const randomNum = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNum]

    color.textContent = colors[randomNum]
}

btn.addEventListener("click", backgroundColor)
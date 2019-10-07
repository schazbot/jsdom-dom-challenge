window.addEventListener('DOMContentLoaded', () => {

    const counterEl = document.querySelector("#counter")
    let counterNumber = document.querySelector("#counter").innerText


    const minusBtn = document.querySelector("#minus")
    minusBtn.addEventListener('click', decreaseByOneSecond)

    const plusBtn = document.querySelector("#plus")
    plusBtn.addEventListener('click', increaseByOneSecond)

    const heartBtn = document.querySelector("#heart")
    heartBtn.addEventListener('click', createLike)

    const pauseBtn = document.querySelector("#pause")
    pauseBtn.addEventListener('click', pauseToggle)

    const likesUl = document.querySelector(".likes")
    const commentListUl = document.querySelector("#list")

    const commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener('submit', createComment)
    const commentInput = document.querySelector("#comment-input")


    function setTimer() {
        return setInterval(increaseByOneSecond, 1000)
    }

    function increaseByOneSecond() {
        return counterEl.innerText = ++counterNumber
    }

    function decreaseByOneSecond() {
        return counterEl.innerText = --counterNumber
    }

    function createLike() {
        let likedLi = document.querySelector(`.number-${counterNumber}`)
        if (likedLi) {
            let currentLikes = likedLi.innerText.split(" ")[4]

            currentLikes++

            likedLi.innerText = `${counterNumber} has been liked ${currentLikes} times`
        } else {
            let li = document.createElement('li')
            li.className = `number-${counterNumber}`
            li.innerText = `${counterNumber} has been liked 1 time.`
            likesUl.append(li)
        }

    }

    function createComment(e) {
        e.preventDefault()
        content = e.target[0].value
        let li = document.createElement('li')
        li.className = "comment"
        li.innerText = content
        commentListUl.append(li)
        commentForm.reset()
    }

    function pauseToggle() {
        if (pauseBtn.innerText === "pause") {
            pauseBtn.innerText = "resume"
            clearInterval(counter)
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            heartBtn.disabled = true;
        } else if (pauseBtn.innerText === "resume") {
            counter = setTimer()
            pauseBtn.innerText = "pause"
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            heartBtn.disabled = false;
        }

    }

    let counter = setTimer()

});
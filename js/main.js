// slider items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'))
// number items
var sliderNum = sliderImages.length
// set current slide
var currentSlide = 1;
// get number element
var numSlider = document.getElementById('slider-number')
// next prev slide
var nextButton = document.getElementById('next')
var prevButton = document.getElementById('prev')
// Handle Click on Previous and Next Buttons
nextButton.onclick = nextslide;
prevButton.onclick = prevslide;
// Add Ul Element
var eleUl = document.createElement('ul');
eleUl.setAttribute('id', 'slide-ul')
// Add li to Ul Element
for (var i = 1; i <= sliderNum; i++) {
    // Add Ul Element
    var childLi = document.createElement('li');
    // Add attr To li
    childLi.setAttribute('data-index', i)
    // Add text(Value) To Li
    childLi.appendChild(document.createTextNode(i))
    // Add li to Ul Element
    eleUl.appendChild(childLi)
}
document.getElementById('indicators').appendChild(eleUl);
// get ul element
var eleCreateUl = document.getElementById('slide-ul')
// slider items
var ulArray = Array.from(document.querySelectorAll('#slide-ul li'))
// loop Ul LI Slide
for (var i = 0; i < ulArray.length; i++) {
    ulArray[i].onclick = function () {
        currentSlide = this.getAttribute('data-index')
        addActive()
    }
}
// function Add Class Active And Value Slider
addActive()
// Next Slide Function
function nextslide(r) {
    if (nextButton.classList.contains('disabled')) {
        r = '';
    }else {
        currentSlide++;
        addActive()
    }
}
// prev Slide Function
function prevslide(r) {
    if (prevButton.classList.contains('disabled')) {
        r = '';
    }else {
        currentSlide--;
        addActive()
    }
}
// function Add Class Active And Value Slider
function addActive() {
    // Add Value Slider
    numSlider.textContent = 'slide #' + currentSlide + ' of ' + sliderNum
    // Remove All Classes Active
    removeActive();
    // Add Class Active To Li
    eleCreateUl.children[currentSlide - 1].classList.add('active')
    // Add Class Active To Images
    sliderImages[currentSlide - 1].classList.add('active')
    // Add Class Disabled To Button Prev
    if (currentSlide === 1) {
        prevButton.classList.add('disabled')
    } else {
        prevButton.classList.remove('disabled')
    }
    // Add Class Disabled To Button next
    if (currentSlide === sliderNum) {
        nextButton.classList.add('disabled')
    } else {
        nextButton.classList.remove('disabled')
    }
}
// Remove All Classes Active
function removeActive() {
    // Remove Active From Images
    sliderImages.forEach(function (img) {
        img.classList.remove('active')
    })
    // Remove Active From Li
    ulArray.forEach(function (e) {
        e.classList.remove('active')
    })
}
// console.log(eleCreateUl.children);
/*                          Start Memory Game                       */
document.querySelector('h3').onclick = function () {
    let yourName = prompt('Type Your Name')
    if (yourName == null || yourName == "") {
        document.querySelector('.name span').innerHTML = 'Unknown'
    } else {
        document.querySelector('.name span').innerHTML = yourName
    }
    document.querySelector('.start-game').remove()
    show()
    document.getElementById('music-game').play()
    timer()
}
var felo = document.querySelectorAll('.games')
function show() {
    felo.forEach(function (e) {
        e.classList.add('rotate')
    })
    setTimeout(() => {
        felo.forEach(function (e) {
            e.classList.remove('rotate')
        })
    }, 2000)
}
// Effect time
let duration = 1000;
// Get Memory
let memory = document.querySelector('.memory')
// Add Array Form To Memory
let memroyArray = Array.from(memory.children)
// Create Range Of Keys from memory array
// let orderRange = [...Array(memroyArray.length).keys()]
let orderRange = Array.from(Array(memroyArray.length).keys())
    // console.log(orderRange)
    shuffle(orderRange)
    // console.log(orderRange)
        memroyArray.forEach(function (games, index) {
            games.style.order = orderRange[index]
            // Click To Class Games
            games.addEventListener('click', function () {
                // Add Class Rotate To Games Classes
                rotate(games)
            })
        })
// Add Class Rotate To Games Classes
function rotate(selected) {
    selected.classList.add('rotate')
    // check Class Rotate
    let allRotates = memroyArray.filter(
        checkclasses => checkclasses.classList.contains('rotate'))
    if (allRotates.length === 2) {
        // if (document.querySelector('.games').getAttribute('data-sport', 'barcelona')) {
        //     console.log('felo')
        // }
        // Stop Clicking Function
        stopClicking()
        // Check Matched Block
        checkMatchedBlock(allRotates[0], allRotates[1])
    }
}
//// Stop Clicking Function
function stopClicking() {
    memory.classList.add('no-click')
    setTimeout(() => {
        memory.classList.remove('no-click')
    }, duration)
}
// Function Check Matched Block
function checkMatchedBlock(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span')
    if (firstBlock.dataset.sport === secondBlock.dataset.sport) {
        firstBlock.classList.remove('rotate')
        secondBlock.classList.remove('rotate')

        firstBlock.classList.add('true')
        secondBlock.classList.add('true')
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1
        setTimeout(() => {
            firstBlock.classList.remove('rotate')
            secondBlock.classList.remove('rotate')
        }, duration)
    }
}
// Shuffle Function
function shuffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--;
        // [1] Save Current Element in temp
        temp = array[current]
        // [2] Current Element = Random Element
        array[current] = array[random]
        // [3] Random Element = Get Element From temp
        array[random] = temp
    }
    return array;
}
// var ourCountDown = setInterval(function () {
//     var counter = parseInt($('.countdown').html())
//     if (counter !== 0) {
//         $('.countdown').html(counter - 1)
//     } else {
//         clearInterval(ourCountDown)
//         $('.countdown').html('Finished')
//     }
// }, 1000)
var ourCountDown = document.querySelector('.countdown span')
// console.log(ourCountDown.innerHTML)
function timer() {
    var ourTimer = setInterval(function () {
        var counter = parseInt(ourCountDown.innerHTML)
        if (counter !== 0) {
            ourCountDown.innerHTML = counter - 1
        } else {
            clearInterval(ourTimer)
            ourCountDown.innerHTML = 'Finished'
            felo.forEach(function (e) {
                e.classList.remove('true')
            })
        }
    }, 1000)
}

/*                          End Memory Game                       */














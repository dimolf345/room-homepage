const nav = document.querySelector('nav');
const toggler = document.getElementById('toggler');
const navLinks = document.querySelectorAll('.nav-links li a');
const pictures = document.querySelectorAll('picture');
const controls = document.querySelectorAll('.control');
const textContainer = document.querySelectorAll('.text-container div');


console.log(textContainer);

toggler.addEventListener('click', () => {
    nav.classList.toggle('open');
});


navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        nav.classList.toggle('open');
    })
})

controls.forEach((control) => {
    control.addEventListener('click', function(control) {
        let direction = control.originalTarget.dataset.direction;
        move(pictures,direction);
    })
})

function move(collection, direction) {
    let index = getIndexActive(pictures);
    let next = (direction==='right')? 1 : -1;
    let nextIndex = calculateNex(index, collection.length-1, next);
    switchActive(pictures, index, nextIndex);
    switchActive(textContainer, index, nextIndex);

}

function getIndexActive(collection) {
 for (let i=0; i< collection.length; i++) {
       if(collection[i].className === 'active') {
           return i;
       }
    }
}

function calculateNex(current, length, move) {
    if(current+move > length) {
        return 0;
    }
    else if(current+move<0) return length;
    else {
        return current+move;
    }
}

function switchActive(collection, index, nextIndex) {
    collection[index].classList.remove('active');
    collection[nextIndex].classList.add('active');
}

// setTimeout(function() {
//     pictures[0].classList.remove('active');
//     pictures[-1].classList.add('active');
// }, 3000)
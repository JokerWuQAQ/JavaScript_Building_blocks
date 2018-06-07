var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
btn.removeEventListener('click', bgChange);
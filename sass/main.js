const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const introduce = $('.introduce');
const choose = $('.choose');
const boximg = $$('.box-img');
const btn = $('.introduce-box-btn');
const backbtn = $('.back-btn');
const homebtn = $('.home-btn');
const time = $('.time');
const score = $('.score');
let idx = 0;
let scores = 1;
let ismax = false;
var myVar;
score.innerHTML = 'Score:0'
function date() {
    let m = Math.floor(idx / 60)
    let s = idx % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    time.innerHTML = `Time: ${m}:${s}`
    idx++;
}
function stoptime(e) {
    clearInterval(date)
}
function start() {
    let max = 0;
    if (max < 30) {
        const game = $('.game');
        var element = document.createElement('div')
        element.className = "game-img1";
        console.log(element);
        const { x, y } = getRandomLocation();
        element.style.top = `${y}px`;
        element.style.left = `${x}px`;
        element.innerHTML = `<img src="https://pngimg.com/uploads/fly/fly_PNG3946.png" alt="" class="img">`
        game.appendChild(element);
        max++;
        const classcreate = $$('.game-img1');
        classcreate.forEach((f) => {
            f.onclick = () => {
                f.classList.add('off')
                score.innerHTML = `Score:${scores++}`
            }
        })
        return max;
    }
    return 0;
}
function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 300) + 100;
    return { x, y }
}
btn.addEventListener('click', () => {
    introduce.classList.add('up')
})

boximg.forEach((img, idx) => {
    img.onclick = () => {
        choose.classList.add('up')
        setInterval(date, 1000);
        setInterval(start, 1000);
    }
})
backbtn.addEventListener('click', (e) => {
    choose.classList.remove('up')
    stoptime(e);
})
homebtn.addEventListener('click', () => {
    choose.classList.remove('up')
    introduce.classList.remove('up')
})

const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}

const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', () => {
    setTimeout(() => {
        var audio = new Audio('theme.mp3');
        audio.play();
    }, 8500);

    playBtn.classList.add("active");

    console.log('click');

    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin',
        `<section class="player">
            <section class="intro">
                Not a long time ago, in a galaxy not far away....
            </section>
            <section class="logo">
                <h1>STAR BOOKS <br/> PARTY</h1>
            </section>
            <div id="scroller">
            </div>
        </section>`
    );
    
    setTimeout(() => {
        body.insertAdjacentHTML('beforeend',
        ` <div id="scroller">
        <div id="content">
            <p id="title">Episode I</p>
            <p id="subtitle">Ksenia Birthday</p>
            <br>
            <p>Сьогодні всі зібралися для того, щоб привітати нашу подругу Ксенію! Від імені усіх присутніх ( а також тих хто подалі ) хочу привітати тебе з Днем народження!</p>
            <p>Хочу побажати тобі, перш за все здоровʼя, мирного неба, а ще такої ж наснаги для творчості, буктюба і усіх твоїх починань!</p>
            <p>Я хочу подякувати тобі за той конент що ти робиш, за український контент! Але найбільше за тих людей котрі зібралися довкола тебе і тих хто трохи на відстані :) Це топ компанія і атмосфера! Дякую усім хто долучається до цього! Сподіваюсь скоро всі зберемося разом</p>
            <p>Також хочу вибачитися, що трохи не тим форматом привітаня роблю це, але я хворію і сівший голос не дасть мені цього зробити.. Зробив що найбілше вмію )))</p>
            <p>Ще раз з днем народження!!</p>
            <p style="margin-top: 50px;">Ваш покірний слуга, Іван</p>
            <p class="ps">P.S. мерщій відкривати подарунки!</p>
            <p class="ps">P.S.S. Не забудь просканувати усі QR що знайдеш!!!!</p>
        </div>
    </div>`);
       
    }, 10500);
});

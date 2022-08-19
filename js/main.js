
const no = document.getElementById('no');


no.addEventListener('mouseenter',(e)=>{
    fuck();
})

function fuck(){
    var tmp = Math.floor(Math.random() * 2);
    switch (tmp) {
        case 0:
            ran_pos();
            // swap_pos();
            setTimeout(()=>{
                mew();
            },0);
            
            break;
        case 1:
            // swap_pos();
            ran_pos();
            setTimeout(()=>{
                mew();
            },0);
            
            break;
        default:
            break;
    }

    
}

function ju(){
    playsound();
    var modal = document.getElementById('modallll');
    modal.classList.add('is-active');
    // var title = document.getElementsByClassName('title-main')[0];
}

function playsound() {
    var tmp = `
    <div id="player">
        <audio controls autoplay hidden>
        <source src="./mp3/3000.mp3" type="audio/mpeg">
                    unsupported !! 
        </audio>
    </div>
    `;
    var main = document.getElementsByTagName('body')[0];
    main.innerHTML += tmp;
}

function mew(){

    var main = document.getElementsByTagName('body')[0];
    var ranX = Math.floor(Math.random() * 90);
    var ranY = Math.floor(Math.random() * 90);
    var ranS = Math.floor(Math.random() * 5);
    main.innerHTML += `
    <img src="./img/sad${ranS}.jpg" style="left: ${ranX}vw; top: ${ranY}vh;" class="mew">
    `;
}
function mewju(){

    var main = document.getElementById('main');
    var ranX = Math.floor(Math.random() * 90);
    var ranY = Math.floor(Math.random() * 20);
    var ranS = Math.floor(Math.random() * 3);
    main.innerHTML += `
    <img src="./img/gif${1+ranS}.gif" style="left: ${ranX}vw; top: ${ranY}vh;" class="mew">
    `;
}
function swap_pos(){
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');

    const pos_yes = getOffset(yes);
    const pos_no = getOffset(no);

    console.log(pos_yes);
    console.log(pos_no)
    
    yes.style.position = 'fixed';
    no.style.position = 'fixed';
    yes.style.left = `${pos_no.left - 10}px`;
    no.style.left = `${pos_yes.left - 10}px`;
    yes.style.top = `${pos_no.top - 10}px`;
    no.style.top = `${pos_yes.top - 10}px`;
}

function ran_pos(){
    var no = document.getElementById('no');
    no.style.position = 'fixed';
    no.style.left = `${Math.floor(Math.random() * 70)}vw`;
    no.style.top = `${Math.floor(Math.random() * 90)}vh`;
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

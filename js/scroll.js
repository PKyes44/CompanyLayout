const btnCall = document.querySelector('.btnCall');
const menuMobile = document.querySelector('.menu_mobile');
const sections = document.querySelectorAll ('figure, section');
const btns = document.querySelectorAll('.btns li');

// hamburger clicked
btnCall.addEventListener("click", (e) => {
    e.preventDefault();

    btnCall.classList.toggle('on');
    menuMobile.classList.toggle('on');
})
// scroll button clicked
btns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        console.log(`Clicked Target !`)

        let isOn = e.currentTarget.classList.contains('on');
        if (isOn) {
            return;
        }
        console.log(sections);
        console.log(idx);
        window.scroll({
            top: sections[idx].offsetTop,
            left: 0,
            behavior: 'smooth',
        });

        for (let btn of btns) {
            btn.classList.remove('on');
        }
        btns[idx].classList.add('on');
    })
})
// wheel scroll
window.addEventListener('scroll', (e) => {
    let scroll = window.scrollY;

    sections.forEach((section, idx) => {
        if (scroll >= section.offsetTop) {
            for (let btn of btns) {
                btn.classList.remove('on');
            }
            btns[idx].classList.add('on');
        }
    })
})

const gnbList = document.querySelectorAll('nav.menu_web #gnb_web li');

gnbList.forEach((gnb, idx) => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap')
    let sub = document.createElement('div');
    sub.classList.add('sub');

    for (let li = 0; li < 5; li++) {
        let ul = document.createElement(`ul`);

        if (idx == li) {
            ul.classList.add('on');
        } else {
            
        }
        ul.innerHTML = `
        <li ${idx == li ? 'class="focus"' : ''}>
            <a href="#" ${idx == li ? '' : 'tabindex="-1"'}>${idx + 1}depth ${li+1}</a>
        </li>
        <li ${idx == li ? 'class="focus"' : ''}>
            <a href="#" ${idx == li ? '' : 'tabindex="-1"'}>${idx + 1}depth ${li+1}</a>
        </li>
        <li ${idx == li ? 'class="focus"' : ''}>
            <a href="#" ${idx == li ? '' : 'tabindex="-1"'}>${idx + 1}depth ${li+1}</a>
        </li>`;
        sub.append(ul);
    }
    wrap.append(sub);
    gnb.append(wrap);

    let subLiList = wrap.querySelectorAll('.sub ul li');
    subLiList.forEach((li) => {
        if (li.classList.contains('focus')) {
            li.addEventListener('focusin', (e) => {
                let wrapList = document.querySelectorAll('.wrap');
                wrapList.forEach(element => {
                    element.classList.remove('on');
                })

                let wrap = e.currentTarget.closest('.wrap');
                wrap.classList.add('on');
            })
        }
    })
    gnb.addEventListener('focusin', (e) => {
        let wrapList = document.querySelectorAll('.wrap');
        wrapList.forEach(element => {
            element.classList.remove('on');
        })

        let wrap = e.currentTarget.querySelector('.wrap');
        wrap.classList.add('on');
    })

    if (gnb.querySelector('a').textContent == "LOCATION") {
        let liList = gnb.querySelectorAll('.on .focus');
        liList.forEach((li, idx) => {
            if (idx == 2) {
                li.addEventListener('focusout', (e) => {
                    let wrapList = document.querySelectorAll('.wrap');
                    wrapList.forEach(element => {
                        element.classList.remove('on');
                    })
                    
                    let wrap = e.currentTarget.closest('.wrap');
                    wrap.classList.remove('on');
                })
            }
        })
    }
});

// let activeLi = wrap.querySelectorAll('.menu_web #gnb_web li ul')

/*
  <div class="wrap">
        <div class="sub on">
            <ul>
                <li><a href="#">2depth 1</a></li>
                <li><a href="#">2depth 1</a></li>
                <li><a href="#">2depth 1</a></li>
            </ul>
            <ul>
                <li><a href="#">2depth 2</a></li>
                <li><a href="#">2depth 2</a></li>
                <li><a href="#">2depth 2</a></li>
            </ul>
            <ul>
                <li><a href="#">2depth 3</a></li>
                <li><a href="#">2depth 3</a></li>
                <li><a href="#">2depth 3</a></li>
            </ul>
            <ul>
                <li><a href="#">2depth 4</a></li>
                <li><a href="#">2depth 4</a></li>
                <li><a href="#">2depth 4</a></li>
            </ul>
            <ul>
                <li><a href="#">2depth 5</a></li>
                <li><a href="#">2depth 5</a></li>
                <li><a href="#">2depth 5</a></li>
            </ul>
        </div>
    </div>   
*/

const gnbList = document.querySelectorAll('nav.menu_web #gnb_web li');

gnbList.forEach((gnb, idx) => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap')
    let sub = document.createElement('div');
    sub.classList.add('sub');

    const actvieList = [
        (idx==0),
        (idx==1),
        (idx==2),
        (idx==3),
        (idx==4),
    ];

    wrap.innerHTML = `
    <div class="sub">
        <ul ${actvieList[0] ? 'class="on"' : ''}>
            <li><a href="#" ${actvieList[0] ? '' : 'tabindex="-1"'}>Introduction</a></li>
            <li><a href="#" ${actvieList[0] ? '' : 'tabindex="-1"'}>Missions</a></li>
            <li><a href="#" ${actvieList[0] ? '' : 'tabindex="-1"'}ß>Archives</a></li>
        </ul>
        <ul ${actvieList[1] ? 'class="on"' : ''}>
            <li><a href="#" ${actvieList[1] ? '' : 'tabindex="-1"'}>Members</a></li>
            <li><a href="#" ${actvieList[1] ? '' : 'tabindex="-1"'}>Archives</a></li>
            <li><a href="#" ${actvieList[1] ? '' : 'tabindex="-1"'}>Vision</a></li>
        </ul>
        <ul ${actvieList[2] ? 'class="on"' : ''}>
            <li><a href="#" ${actvieList[2] ? '' : 'tabindex="-1"'}>Notion</a></li>
            <li><a href="#" ${actvieList[2] ? '' : 'tabindex="-1"'}>Public</a></li>
            <li><a href="#" ${actvieList[2] ? '' : 'tabindex="-1"'}>Events</a></li>
        </ul>
        <ul ${actvieList[3] ? 'class="on"' : ''}>
            <li><a href="#" ${actvieList[3] ? '' : 'tabindex="-1"'}>Organizations</a></li>
            <li><a href="#" ${actvieList[3] ? '' : 'tabindex="-1"'}>Event Gallery</a></li>
        </ul>
        <ul ${actvieList[4] ? 'class="on"' : ''}>
            <li><a href="#" ${actvieList[4] ? '' : 'tabindex="-1"'}>Head Quarters</a></li>
            <li><a href="#" ${actvieList[4] ? '' : 'tabindex="-1"'}>Branch</a></li>
        </ul>
    </div>`

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
    console.log(gnb.querySelector('a').textContent == "LOCATION");
    if (gnb.querySelector('a').textContent == "LOCATION") {
        let liList = gnb.querySelectorAll('#lastGNB .wrap .sub ul.on li');
        console.log(liList);
        liList.forEach((li, idx) => {
            if (idx == liList.length - 1) {
                console.log(li);
                li.addEventListener('focusout', (e) => {
                    console.log('LOCATION last gnb is Focus out');
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

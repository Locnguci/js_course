const btns = document.querySelectorAll('.active-btn');
const left = $('#left');
const right = $('#right');

// add hightlight
function activeHightlight(numb) {
    btns.forEach(e => e.classList.remove('active'));
    btns[numb].classList.add('active');
}

// select btn by nav
let index = 0;
btns[0].classList.add('active')
getData(index);

function selectBtn() {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains('active')) {
            index = i;
        }
    }
    //right
    right.click(() => {
        if (index === btns.length - 1) index = 0
        else index++;
        // console.log("🚀 ~ file: main.js:19 ~ right.click ~ index:", index)
        activeHightlight(index);
        getData(index);

    })

    //left
    left.click(() => {
        if (index === 0) index = btns.length - 1
        else index--;
        // console.log("🚀 ~ file: main.js:19 ~ right.click ~ index:", index)
        activeHightlight(index);
        getData(index);
    })

    // click random
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            activeHightlight(i);
            index = i;
            getData(index);
        })
    }

    // get 10 info/page

}

// get info 
function getData(index) {
    $.ajax({
        url: `https://64a3d188c3b509573b5695fd.mockapi.io/profile`,
        method: 'GET'
    }).done((data) => {
        let body = '';
        for (let i = 0; i < 10; i++) {
            const dataItem = data[i + index * 10];
            if (dataItem) {
                body +=
                    `<tr>
                        <th>${dataItem.id}</th>
                        <td>${dataItem.title}</td>
                        <td>${dataItem.brief}</td>
                        <td>${dataItem.content}</td>
                    </tr>`
            }
        }
        $('tbody').html(body);
    }).fail(() => {
        alert('Can not get user information!');
    })
}

// change page
function changePage() {
    $('tbody').remove();
    const node = document.createElement("tbody");
    $('table').append(node);
}


$(document).ready(() => {
    selectBtn();
})

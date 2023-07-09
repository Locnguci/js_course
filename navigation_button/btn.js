// 1. Function to create button
function create(nameBtn, nameClass) {
    const btn = document.createElement('button');
    btn.innerText = nameBtn;
    btn.className = nameClass
    return btn;
}

// 2.arr btn
const btns = [];
for (let i = 0; i < 6; i++) {
    if (i === 0) {
        btns.push(create('<', 'btn'))

    } else if (i === 5) {
        btns.push(create('>', 'btn'))
    } else {
        btns.push(create('Button', 'btn'))
    }
}

// 3. Add btn to main + add attribute to btn
for (let i = 0; i < btns.length; i++) {
    document.querySelector('main').appendChild(btns[i]);
    btns[i].id = i + 1;
    btns[i].style.padding = '20px';
    btns[i].style.margin = '10px';
    btns[i].style.cursor = 'pointer';
}

// 4. releate btn
for (let i = 0; i < btns.length; i++) {
    if (i > 0) {
        btns[i].classList.add('releate');
    }
}

let itemSelected = 2;
function handleClick() {

    if (this.id > 1 && this.id < 6) itemSelected = this.id;

    // left
    if (this.id == btns[0].id) {
        if (itemSelected == 2) itemSelected = 5
        else itemSelected--;
    }

    // right
    if (this.id == btns[btns.length - 1].id) {
        if (itemSelected == 5) itemSelected = 2
        else itemSelected++;
    }


    for (let i = 1; i < btns.length - 1; i++) {
        /// ép kiểu string to numb: +'str'
        /// ép kiểu numb to string: numb + ''
        const isActive = btns[i].id == itemSelected;

        if (isActive) {
            btns[i].classList.add('active');
        } else {
            btns[i].classList.remove('active');
        }
    }

}

handleClick();

// 6.add event on button
for (const btn of btns) {
    btn.addEventListener('click', handleClick);
}



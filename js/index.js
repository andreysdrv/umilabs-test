const showButton = document.querySelector('.btn')

for (i = 6; i <= 12; i++) {
    const el = document.querySelector(`.cards__item:nth-child(${i})`)
    el.classList.add('cards__item_type_hidden')
}

function click() {
    for (i = 6; i <= 12; i++) {
        const el = document.querySelector(`.cards__item:nth-child(${i})`)
        el.classList.remove('cards__item_type_hidden')
    }
    showButton.classList.add('btn_type_hidden')
}

showButton.addEventListener('click', click)
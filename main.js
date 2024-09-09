const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

const del = () => box.classList.remove('show', 'hide')

btn.addEventListener('click', () => {
    if(box.classList.contains('show')){
        box.classList.add('hide')
        box.addEventListener('animationend', del)
    } else {
        box.classList.add('show')
        box.removeEventListener('animationend', del)
    }
})

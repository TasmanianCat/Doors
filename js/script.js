const moveAside = (e) => {
    document.getElementById('moveLeft');
    moveLeft.classList.toggle('container__content-left-right-move');
    document.getElementById('moveRight');
    moveRight.classList.toggle('container__content-left-right-move');
    document.getElementById('greeting');
    greeting.classList.toggle('container__content-greeting-show');
    document.getElementById('removeBtn');
    removeBtn.classList.remove('container__content-center');
    document.getElementById('sidesShadow');
    sidesShadow.classList.add('container__content-shadow');
    document.getElementById('iconHidden');
    iconHidden.classList.add('fa-power-off-hidden');
}
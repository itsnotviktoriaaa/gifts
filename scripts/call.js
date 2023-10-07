$(document).ready(function () {

    let buttonHeader = document.getElementById('main-button-call');
    let buttonFooter = document.getElementById('base-call');

    let arrayOfButtons = [buttonHeader, buttonFooter];

    arrayOfButtons.forEach(function (item) {
        item.addEventListener('click', openPopup);
    });

    let popup = document.getElementById('popup-wrapper');
    let done = document.getElementById('done-wrapper');

    function openPopup() {
        popup.classList.add('popup-open');
    }


    let popupCancel = document.getElementById('popup-cancel');
    let doneCancel = document.getElementById('done-cancel');

    popupCancel.onclick = function () {
        popup.classList.remove('popup-open');
    }

    doneCancel.onclick = function () {
        done.classList.remove('popup-open');
    }


});

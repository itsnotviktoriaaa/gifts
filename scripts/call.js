$(document).ready(function () {

    let buttonHeader = document.getElementById('main-button-call');
    let buttonPopular = document.getElementById('popular-button-call');
    let buttonFooter = document.getElementById('base-call');

    let arrayOfButtons = [buttonHeader, buttonPopular, buttonFooter];

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


    $('#popup-call').click(() => {

        let name = $('#name');
        let phone = $('#phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    popup.classList.remove('popup-open');
                    done.classList.add('popup-open');
                },
                error: () => {
                    alert('Ошибка отправки. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            alert('Заполните все данные формы');
        }

    });


    $('#not-find-call').click(() => {

        let name = $('#not-find-name');
        let phone = $('#not-find-phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    popup.classList.remove('popup-open');
                    done.classList.add('popup-open');
                },
                error: () => {
                    alert('Ошибка отправки. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            alert('Заполните все данные формы');
        }

    });


    $('#partners-call').click(() => {

        let name = $('#partners-name');
        let phone = $('#partners-phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    popup.classList.remove('popup-open');
                    done.classList.add('popup-open');
                },
                error: () => {
                    alert('Ошибка отправки. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            alert('Заполните все данные формы');
        }

    });

});

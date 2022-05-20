let listArray = [];
let openPopupButtons = document.querySelectorAll('[data-popup-target]');
let closePopupButtons = document.querySelectorAll('[data-luk-button]');
let overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (listArray.length == 0) {
            popuptext = "20-25%";
        } else if (listArray.length == 1) {
            popuptext = "10-20%";
        } else if (listArray.length == 2) {
            popuptext = "10-20%";
        } else if (listArray.length == 3) {
            popuptext = "10-20%";
        } else if (listArray.length == 4) {
            popuptext = "10-20%";
        } else if (listArray.length == 5) {
            popuptext = "5-10%";
        }
        document.getElementById('valueList').innerHTML = popuptext;
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    });
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    });
});

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
};

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
};

let checkboxes = document.querySelectorAll('.checkbox');

for(let checkbox of checkboxes) {
    checkbox.addEventListener('click', function(){
        if(this.checked == true) {
            listArray.push(this.value);
        }
        else {
            listArray = listArray.filter(e => e !== this.value);
        }
    })
};
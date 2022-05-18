const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-luk-button]');
const overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
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

var valueList = document.getElementById('valueList');
var text = '<span> Du kan spare </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes) {
    checkbox.addEventListener('click', function(){
        if(this.checked == true) {
            listArray.push(this.value);
            valueList.innerHTML = text + listArray.join('/');
        }
        else {
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text + listArray.join('/');
        }
    })
}
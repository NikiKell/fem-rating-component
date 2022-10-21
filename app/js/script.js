const rating = document.querySelectorAll('.circle');
const submit = document.querySelector('.btn-submit');
const complete = document.querySelector('.complete');
const card = document.querySelector('.card');
const num = document.querySelector('.num');
const error = document.querySelector('.card__error');


let finalRating = 0


// Save rating
rating.forEach(el => {
    el.addEventListener('click', function() {
        finalRating = this.innerText;
    })
})

// Display thank you screen with selected rating
submit.addEventListener('click', function() {
    if (finalRating === 0) {
        error.classList.remove('hidden');
    } 
    else {
        complete.classList.remove('hidden');
        card.classList.add('hidden');
        num.append(finalRating);
    }
})
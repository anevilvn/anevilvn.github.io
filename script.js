var imgFeature = document.querySelector('.img-feature');
var listimg = document.querySelectorAll('.list-img img');
var prevbtn = document.querySelector('.prev');
var nextbtn = document.querySelector('.next');
var currentIndex = 0;
var interval;

function updateImgByIndex(index) {
    // remove active class
    document.querySelectorAll('.list-img div').forEach(item => {
        item.classList.remove('active');
    });

    currentIndex = index;
    imgFeature.src = listimg[index].getAttribute('src');
    listimg[index].parentElement.classList.add('active');
}

listimg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0';
        setTimeout(() => {
            updateImgByIndex(index);
            imgFeature.style.opacity = '1';
        }, 300);
    });
});

prevbtn.addEventListener('click', e => {
    imgFeature.style.animation = '';
    currentIndex = (currentIndex - 1 + listimg.length) % listimg.length;

    imgFeature.style.animation = '';
    setTimeout(() => {
        updateImgByIndex(currentIndex);
        imgFeature.style.animation = 'slideleft 1s ease-in-out forwards';
    }, 100);
});

nextbtn.addEventListener('click', e => {
    currentIndex = (currentIndex + 1) % listimg.length;

    imgFeature.style.animation = '';
    setTimeout(() => {
        updateImgByIndex(currentIndex);
        imgFeature.style.animation = 'slideright 1s ease-in-out forwards';
    }, 100);
});

function autoSlide() {
    interval = setInterval(() => {
        nextbtn.click();
    }, 3000);
}

// Ngừng chuyển động khi hover
listimg.forEach(imgElement => {
    imgElement.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    imgElement.addEventListener('mouseleave', () => {
        autoSlide();
    });
});

autoSlide();

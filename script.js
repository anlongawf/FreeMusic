// First page
window.onload = function() {
    showPage('explore');
};

function showPage(page) {
    document.getElementById('explore').style.display = 'none';
    document.getElementById('libary').style.display = 'none';
    document.getElementById('podcast').style.display = 'none';
    document.getElementById('live').style.display = 'none';
    document.getElementById('top-music').style.display = 'none';
    document.getElementById('playlist').style.display = 'none';
    document.getElementById('upload').style.display = 'none';
    

    document.getElementById(page).style.display = 'block';
}

// Change img

function moveCards() {
    const galleryItem = document.querySelector('.gallery-item');
    const cards = Array.from(galleryItem.querySelectorAll('.card'));

    if (cards.length > 0) {
        const firstCard = cards[0];
        galleryItem.appendChild(firstCard);
    }
}


setInterval(moveCards, 3000);

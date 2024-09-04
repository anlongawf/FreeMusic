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
    const galleryItem = document.querySelector('.row');
    const cards = Array.from(galleryItem.querySelectorAll('.col-sm'));

    if (cards.length > 0) {
        const firstCard = cards[0];
        galleryItem.appendChild(firstCard);
    }
}


setInterval(moveCards, 5000);



  function removeSidebarOnMobile() {
    if (window.innerWidth <= 768) {
      var sidebar = document.querySelector(".sidebar");
      if (sidebar) {
        sidebar.remove(); // Xoá sidebar trên mobile
      }
    }
  }

  // Gọi hàm khi trang tải lần đầu
  removeSidebarOnMobile();

  // Gọi hàm khi cửa sổ thay đổi kích thước
  window.addEventListener('resize', removeSidebarOnMobile);
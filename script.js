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
        sidebar.remove(); 
      }
    }
  }

  removeSidebarOnMobile();

  window.addEventListener('resize', removeSidebarOnMobile);




// Login page
const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Nhập địa chỉ email hợp lệ": errorTxt.innerText = "Email không được để trống";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}

// LocalStorage
const accounts = [
    { email: "admin", password: "admin123", redirect: "./admin/index.html", isPremium: true },
    { email: "user", password: "user123", redirect: "index.html", isPremium: true }
];

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector(".field.email input").value;
    const passwordInput = document.querySelector(".field.password input").value;


    const account = accounts.find(acc => acc.email === emailInput && acc.password === passwordInput);
    if (account) {
        if (account.isPremium) {
            window.location.href = account.redirect;
        } else {
            window.location.href = "upgrade-premium.html"; 
        }
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});


// const navLinks = document.querySelectorAll('.navList a');
// const dataTables = document.querySelectorAll('.data-table');

// navLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const target = e.target.closest('a').innerText.toLowerCase();

//         dataTables.forEach((table) => {
//             table.style.display = 'none'; 
//         });

//         const activeTable = document.querySelector(`.${target}`);
//         if (activeTable) {
//             activeTable.style.display = 'block';
//         }
//     });
// });



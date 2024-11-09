// ==================================== Nav bar js ===============================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (window.innerWidth < 1024) {
        menuList.classList.toggle("-right-full");
        menuList.classList.toggle("right-0");
        menubarFirst.classList.toggle("rotate-[40deg]");
        menubarSecond.classList.toggle("hidden");
        menubarThird.classList.toggle("-rotate-[40deg]");
        body.classList.toggle("overflow-hidden");
    }
}
const menuItems = document.querySelectorAll(".menulist button, .menulist a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            toggleMenu();
        }
    });
});

// ========================= attach Files js ===================
let selectedFilesArray = [];

function handleFiles(event) {
    selectedFilesArray = Array.from(event.target.files);
    displaySelectedFiles();
}

function displaySelectedFiles() {
    const selectedFilesDiv = document.getElementById('selectedFiles');
    selectedFilesDiv.innerHTML = ''; 

    selectedFilesArray.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'flex items-center justify-between bg-gray-200 px-3 py-2 rounded-md';

        const fileName = document.createElement('span');
        fileName.className = 'text-gray-700';
        fileName.innerText = `${file.name}`;

        const removeButton = document.createElement('button');
        removeButton.className = 'text-red-500 hover:text-red-700 ml-4';
        removeButton.innerText = 'X';
        removeButton.onclick = () => {
            removeFile(index);
        };

        fileDiv.appendChild(fileName);
        fileDiv.appendChild(removeButton);
        selectedFilesDiv.appendChild(fileDiv);
    });
}

function removeFile(index) {
    selectedFilesArray.splice(index, 1);
    displaySelectedFiles();
}
// =================================== book btn js ==========================================

const bookNowBtn = document.getElementById("bookNowBtn");
const authModal = document.getElementById("authModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

bookNowBtn.onclick = () => {
    authModal.classList.remove("hidden");
    authModal.classList.add("flex");
    showLoginForm();
};

closeModalBtn.onclick = () => {
    authModal.classList.add("hidden");
};

function showLoginForm() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("border-blue-600", "text-blue-600");
    signupTab.classList.remove("border-blue-600", "text-blue-600");
}

function showSignupForm() {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupTab.classList.add("border-blue-600", "text-blue-600");
    loginTab.classList.remove("border-blue-600", "text-blue-600");
}

loginTab.onclick = showLoginForm;
signupTab.onclick = showSignupForm;

window.onclick = (event) => {
    if (event.target === authModal) {
        authModal.classList.add("hidden");
    }
};
// ============================== scrool up btn js ===================================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let scrollTrigger = 300;

function updateScrollTrigger() {
    if (window.innerWidth >= 1024) {
        scrollTrigger = 500;
    } else {
        scrollTrigger = 300;
    }
}

updateScrollTrigger();
window.addEventListener('resize', updateScrollTrigger);

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollTrigger) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


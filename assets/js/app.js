// ==================================== Nav bar js===============================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (window.innerWidth < 992) {
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

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        menuList.classList.add("-right-full");
        menuList.classList.remove("right-0");
        menubarFirst.classList.remove("rotate-[40deg]");
        menubarSecond.classList.remove("hidden");
        menubarThird.classList.remove("-rotate-[40deg]");
        body.classList.remove("overflow-hidden");
    }
});

// ========================= attach Files js===================
let selectedFilesArray = [];

function handleFiles(event) {
    selectedFilesArray = Array.from(event.target.files);
    displaySelectedFiles();
}

function displaySelectedFiles() {
    const selectedFilesDiv = document.getElementById('selectedFiles');
    selectedFilesDiv.innerHTML = ''; // Clear previous list

    selectedFilesArray.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'flex items-center justify-between bg-gray-200 px-3 py-2 rounded-md';

        // File name
        const fileName = document.createElement('span');
        fileName.className = 'text-gray-700';
        fileName.innerText = `${file.name}`;

        // Remove button
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

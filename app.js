// MENU TRÊN ĐIỆN THOẠI
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
});


// ĐỔI SÁNG / TỐI
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// CLICK KỸ NĂNG MỚI HIỆN THÔNG TIN
function hienKyNang(skill) {
    skill.classList.toggle("active");
}


// CLICK DỰ ÁN MỚI HIỆN THÔNG TIN THÊM
function hienDuAn(project) {
    project.classList.toggle("active");
}


// TÌM KIẾM DỰ ÁN
let searchProject = document.getElementById("searchProject");
let projects = document.querySelectorAll(".project");

searchProject.addEventListener("input", function () {
    let keyword = searchProject.value.toLowerCase();

    for (let i = 0; i < projects.length; i++) {
        let projectText = projects[i].textContent.toLowerCase();

        if (projectText.includes(keyword)) {
            projects[i].style.display = "block";
        } else {
            projects[i].style.display = "none";
        }
    }
});


// FORM LIÊN HỆ
let form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Vui lòng nhập tên!");
        return;
    }

    if (email == "") {
        alert("Vui lòng nhập email!");
        return;
    }

    if (message == "") {
        alert("Vui lòng nhập tin nhắn!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email không hợp lệ!");
        return;
    }

    alert("Gửi thông tin thành công!");
    form.reset();
});


// ĐẾM KÝ TỰ
let message = document.getElementById("message");
let count = document.getElementById("count");

message.addEventListener("input", function () {
    count.textContent = "Số ký tự: " + message.value.length;
});

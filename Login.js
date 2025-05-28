const users = [
    { username: "ADOMIN", password: "123", fname: "ADMIN", access: "profile" },
    { username: "ADOSTAFF", password: "321", fname: "STAFF", access: "profile1" },
];

function login() {
    const uname = document.loginfrm.uname.value.trim();
    const pass = document.loginfrm.pass.value.trim();
    const errorMsg = document.getElementById("error-message");

    const res = users.find(u => u.username === uname && u.password === pass);

    if (res) {
        localStorage.setItem("fname", res.fname);
        alert("Login Successful!");

        if (res.access === "profile") {
            window.location.href = "Home.html";
        } else if (res.access === "profile1") {
            window.location.href = "Home1.html";
        } else {
            errorMsg.textContent = "NO ACCESS ASSIGNED";
        }
    } else {
        errorMsg.textContent = "USER DOES NOT EXIST";
        setTimeout(() => {
            errorMsg.textContent = "";
        }, 3000);
    }
}

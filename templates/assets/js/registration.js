var license_checkbox = document.querySelector('input[name=license]');
var password_box = document.querySelector('.password');
license_checkbox.addEventListener('change', function() {
    if (this.checked) {
        password_box.style.display = 'none';
    } else {
        password_box.style.display = 'block';
    }
});

var send_btn = document.querySelector('.send_btn');

send_btn.addEventListener('click', function() {
    // send captcha
}
// spinner

(function initSpinner() {
    document.addEventListener('DOMContentLoaded', function() {
        const spinner = document.getElementById('loading-spinner');

        if (!spinner) {
            console.warn('Spinner element not found - this is not critical');
            return;
        }

        // اگر DOM از قبل لود شده باشد
        if (document.readyState === 'complete') {
            setTimeout(() => spinner.style.display = 'none', 1000);
        } else {
            window.addEventListener('load', function() {
                setTimeout(() => spinner.style.display = 'none', 1000);
            });
        }
    });
})();

// icon-eye-password

document.addEventListener("DOMContentLoaded", () => {
    window.togglePasswordVisibility = function (button) {
        const parent = button.closest('.parent-input');
        const passwordInput = parent.querySelector('input[type="password"], input[type="text"]');
        const icon = button.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    };
});



// submenu

document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        const icon = button.querySelector('i');

        // اول همه ساب‌منوها و دکمه‌ها رو ریست کن
        document.querySelectorAll('.submenu').forEach(s => {
            if (s !== submenu) {
                s.classList.add('hidden');
                s.classList.remove('open');

                const otherButton = s.previousElementSibling;
                const otherIcon = otherButton.querySelector('i');
                otherButton.classList.remove('open');
                otherIcon.classList.remove('fa-minus', 'rotate-180');
                otherIcon.classList.add('fa-plus');
            }
        });

        // وضعیت جدید این منو رو بررسی کن
        const isOpening = submenu.classList.contains('hidden');

        submenu.classList.toggle('hidden');
        submenu.classList.toggle('open');

        if (isOpening) {
            button.classList.add('open');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus', 'rotate-180');
        } else {
            button.classList.remove('open');
            icon.classList.remove('fa-minus', 'rotate-180');
            icon.classList.add('fa-plus');
        }
    });
});



// upload file

const fileInput = document.getElementById('fileInput');
const uploadText = document.getElementById('uploadText');
const uploadBox = document.getElementById('uploadBox');

if (fileInput && uploadText && uploadBox) {
    uploadBox.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const fileName = event.target.files[0]?.name || 'فایلی انتخاب نشد';
        uploadText.textContent = fileName;
    });
}


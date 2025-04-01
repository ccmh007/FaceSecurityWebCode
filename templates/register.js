// 获取相关元素
const sendCodeButton = document.getElementById('sendCodeButton');
const registerForm = document.getElementById('registerForm');

// 模拟验证码（实际应用中应从后端获取）
let verificationCode = '';

// 生成随机验证码
function generateVerificationCode() {
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('验证码:', verificationCode);
}

// 发送验证码按钮点击事件
sendCodeButton.addEventListener('click', function () {
    const phone = document.getElementById('phone').value;
    // 这里可以添加与后端交互发送验证码的逻辑，此处仅模拟
    if (phone.match(/^1[3-9]\d{9}$/)) {
        generateVerificationCode();
        alert('验证码已发送至手机：' + phone);
    } else {
        alert('请输入正确的手机号');
    }
});

// 注册表单提交事件
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const inputCode = document.getElementById('verificationCode').value;

    // 简单验证验证码是否正确（实际应用中应与后端验证）
    if (inputCode === verificationCode) {
        // 这里可以添加与后端交互注册用户的逻辑，此处仅模拟
        alert('注册成功！');
    } else {
        alert('验证码错误，请重新输入');
    }
});
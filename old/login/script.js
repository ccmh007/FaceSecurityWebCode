document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 这里可以添加登录验证逻辑
    window.location.href = '../main/index.html'; // 登录成功后跳转到主页面
});
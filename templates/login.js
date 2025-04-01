//// 获取表单元素
// const loginForm = document.getElementById('loginForm');
//
// // 为表单添加提交事件监听器
// loginForm.addEventListener('submit', function (e) {
//     e.preventDefault(); // 阻止表单默认提交行为
//
//     // 获取用户名和密码输入框的值
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//
//     // 这里可以添加与后端进行交互的代码，例如使用fetch API发送登录请求
//     // 示例：
//     // fetch('/login', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({ username, password })
//     // })
//     //.then(response => response.json())
//     //.then(data => {
//     //     if (data.success) {
//     //         // 登录成功，跳转到相应页面
//     //         window.location.href = '/dashboard';
//     //     } else {
//     //         // 登录失败，显示错误消息
//     //         alert('用户名或密码错误');
//     //     }
//     // })
//     //.catch(error => {
//     //     console.error('登录请求出错:', error);
//     //     alert('登录请求出错，请稍后重试');
//     // });
//
//     // 这里只是简单的示例，实际应用中需要与后端进行交互来验证用户名和密码
//     if (username === 'admin' && password === '123456') {
//         // 模拟登录成功，跳转到主页面（这里的路径需要根据实际情况修改）
//         window.location.href = '/index.html';
//     } else {
//         // 登录失败，显示错误消息
//         alert('用户名或密码错误');
//     }
// });
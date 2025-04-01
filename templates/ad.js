// 模拟数据
const usersData = [
    { username: 'user1', role: 'attacker' },
    { username: 'user2', role: 'defender' },
    { username: 'user3', role: 'admin' }
];

const targetsData = [
    { name: '靶场 1', creator: 'creator1', createTime: '2020-01-01' },
    { name: '靶场 2', creator: 'creator2', createTime: '2021-02-02' }
];

const uploadApprovals = [
    { submitter: 'user1', type: '攻击成果', status: '待审批' },
    { submitter: 'user2', type: '模型提交', status: '已通过' }
];


function hideAllSections() {
    const sections = document.querySelectorAll('.main-content section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}


function showSection(id) {
    const section = document.getElementById(id);
    section.style.display = 'block';
}


// 导航栏点击事件处理
const userManagementLink = document.getElementById('userManagementLink');
const targetManagementLink = document.getElementById('targetManagementLink');
const uploadApprovalLink = document.getElementById('uploadApprovalLink');
const dataStatisticsLink = document.getElementById('dataStatisticsLink');
const personalLink = document.getElementById('personalLink');


userManagementLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('userManagement');
    populateUserManagement();
});


targetManagementLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('targetManagement');
    populateTargetManagement();
});


uploadApprovalLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('uploadApproval');
    populateUploadApproval();
});


dataStatisticsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('dataStatistics');
    populateDataStatistics();
});


personalLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('personal');
    populatePersonalInfo();
});


// 填充用户管理数据
function populateUserManagement() {
    const userSearchInput = document.getElementById('userSearchInput');
    const filteredData = usersData.filter(user =>
        user.username.toLowerCase().includes(userSearchInput.value.toLowerCase()) ||
        user.role.toLowerCase().includes(userSearchInput.value.toLowerCase())
    );
    const userBody = document.getElementById('userBody');
    userBody.innerHTML = '';
    filteredData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.username}</td><td>${user.role}</td><td><button class="edit-button">编辑</button><button class="delete-button">删除</button></td>`;
        userBody.appendChild(row);
    });
}


// 填充靶场管理数据
function populateTargetManagement() {
    const targetSearchInput = document.getElementById('targetSearchInput');
    const filteredData = targetsData.filter(target =>
        target.name.toLowerCase().includes(targetSearchInput.value.toLowerCase()) ||
        target.creator.toLowerCase().includes(targetSearchInput.value.toLowerCase()) ||
        target.createTime.toLowerCase().includes(targetSearchInput.value.toLowerCase())
    );
    const targetBody = document.getElementById('targetBody');
    targetBody.innerHTML = '';
    filteredData.forEach(target => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${target.name}</td><td>${target.creator}</td><td>${target.createTime}</td><td><button class="edit-button">编辑</button><button class="delete-button">删除</button></td>`;
        targetBody.appendChild(row);
    });
}


// 填充上传审批数据
function populateUploadApproval() {
    const approvalSearchInput = document.getElementById('approvalSearchInput');
    const filteredData = uploadApprovals.filter(approval =>
        approval.submitter.toLowerCase().includes(approvalSearchInput.value.toLowerCase()) ||
        approval.type.toLowerCase().includes(approvalSearchInput.value.toLowerCase()) ||
        approval.status.toLowerCase().includes(approvalSearchInput.value.toLowerCase())
    );
    const approvalBody = document.getElementById('approvalBody');
    approvalBody.innerHTML = '';
    filteredData.forEach(approval => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${approval.submitter}</td><td>${approval.type}</td><td>${approval.status}</td><td><button class="approve-button">批准</button><button class="reject-button">拒绝</button></td>`;
        approvalBody.appendChild(row);
    });
}


// 填充数据统计信息（这里仅为示例，实际需要使用图表库，如 Chart.js 进行数据可视化）
function populateDataStatistics() {
    // 假设使用 Chart.js 进行数据可视化
    const userActivityChart = document.getElementById('userActivityChart');
    const attackSuccessRateChart = document.getElementById('attackSuccessRateChart');
    const modelUsageChart = document.getElementById('modelUsageChart');


    // 这里应该添加使用 Chart.js 绘制图表的逻辑
    // 例如：
    // new Chart(userActivityChart, { type: 'bar', data: {...} });
    // new Chart(attackSuccessRateChart, { type: 'line', data: {...} });
    // new Chart(modelUsageChart, { type: 'pie', data: {...} });
}


// 填充个人信息（这里只是简单示例，实际可能需要从后端获取数据并填充）
function populatePersonalInfo() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const avatar = document.getElementById('avatar');
    const introduction = document.getElementById('introduction');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const qq = document.getElementById('qq');
    const weixin = document.getElementById('weixin');


    // 假设这里有实际的用户数据，这里只是模拟设置一些默认值
    username.value = '默认用户名';
    password.value = '默认密码';
    introduction.value = '默认个人简介';
    email.value = '默认邮箱';
    phone.value = '默认电话';
    qq.value = '默认 QQ';
    weixin.value = '默认微信';
}


window.addEventListener('load', function () {
    hideAllSections();
    showSection('userManagement');
});


// 表单提交处理（示例，可根据需求完善）
document.getElementById('userManagementForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 处理用户管理表单提交逻辑
});


document.getElementById('targetManagementForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 处理靶场管理表单提交逻辑
});


document.getElementById('uploadApprovalForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 处理上传审批表单提交逻辑
});


document.getElementById('personalForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // 处理个人信息表单提交逻辑
});
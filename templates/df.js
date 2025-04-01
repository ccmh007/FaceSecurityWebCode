// 模拟数据
const modelsData = [
    { name: '模型 A', author: '作者 A', year: 2020, description: '这是模型 A 的描述' },
    { name: '模型 B', author: '作者 B', year: 2021, description: '这是模型 B 的描述' }
];

const attacksData = [
    { attackMethod: '攻击方法 1', modelName: '模型 A', misjudgmentRate: '10%', averageMisjudgmentRate: '8%', attackerContact: 'attacker1@example.com' },
    { attackMethod: '攻击方法 2', modelName: '模型 B', misjudgmentRate: '15%', averageMisjudgmentRate: '12%', attackerContact: 'attacker2@example.com' }
];

const attackMethods = ['攻击方法 1', '攻击方法 2', '攻击方法 3'];

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
const dashboardLink = document.getElementById('dashboardLink');
const modelsLink = document.getElementById('modelsLink');
const attacksLink = document.getElementById('attacksLink');
const testLink = document.getElementById('testLink');
const personalLink = document.getElementById('personalLink');

dashboardLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('dashboard');
});

modelsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('models');
    populateModels();
});

attacksLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('attacks');
    populateAttacks();
});

testLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('test');
    populateTestOptions();
});

personalLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('personal');
    populatePersonalInfo();
});


// 填充我的模型数据
function populateModels() {
    const modelSearchInput = document.getElementById('modelSearchInput');
    const filteredData = modelsData.filter(model =>
        model.name.toLowerCase().includes(modelSearchInput.value.toLowerCase()) ||
        model.author.toLowerCase().includes(modelSearchInput.value.toLowerCase()) ||
        model.description.toLowerCase().includes(modelSearchInput.value.toLowerCase())
    );
    const modelBody = document.getElementById('modelBody');
    modelBody.innerHTML = '';
    filteredData.forEach(model => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${model.name}</td><td>${model.author}</td><td>${model.year}</td><td><button class="edit-button">编辑</button><button class="delete-button">删除</button></td>`;
        modelBody.appendChild(row);
    });
}


// 填充查看攻击数据
function populateAttacks() {
    const attackSearchInput = document.getElementById('attackSearchInput');
    const filteredData = attacksData.filter(attack =>
        attack.attackMethod.toLowerCase().includes(attackSearchInput.value.toLowerCase()) ||
        attack.modelName.toLowerCase().includes(attackSearchInput.value.toLowerCase()) ||
        attack.attackerContact.toLowerCase().includes(attackSearchInput.value.toLowerCase())
    );
    const attackBody = document.getElementById('attackBody');
    attackBody.innerHTML = '';
    filteredData.forEach(attack => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${attack.attackMethod}</td><td>${attack.modelName}</td><td>${attack.misjudgmentRate}</td><td>${attack.averageMisjudgmentRate}</td><td>${attack.attackerContact}</td>`;
        attackBody.appendChild(row);
    });
}


// 填充测试选项
function populateTestOptions() {
    const testModelSelect = document.getElementById('testModel');
    const testAttackMethodSelect = document.getElementById('testAttackMethod');
    modelsData.forEach(model => {
        const option = document.createElement('option');
        option.value = model.name;
        option.textContent = model.name;
        testModelSelect.appendChild(option);
    });
    attackMethods.forEach(method => {
        const option = document.createElement('option');
        option.value = method;
        option.textContent = method;
        testAttackMethodSelect.appendChild(option);
    });
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
    showSection('dashboard');
});


// 表单提交处理
document.getElementById('modelUploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const modelName = document.getElementById('modelName').value;
    const modelAuthor = document.getElementById('modelAuthor').value;
    const modelYear = document.getElementById('modelYear').value;
    const modelDescription = document.getElementById('modelDescription').value;
    const modelFile = document.getElementById('modelFile').files[0];
    // 这里应该添加将数据发送到后端的逻辑，例如使用 fetch API 或 XMLHttpRequest
    console.log('上传新模型:', modelName, modelAuthor, modelYear, modelDescription, modelFile);
    // 可以添加代码发送数据到后端
});


document.getElementById('testForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const testModel = document.getElementById('testModel').value;
    const testAttackMethod = document.getElementById('testAttackMethod').value;
    const testResult = document.getElementById('testResult');
    // 这里应该添加模型测试的逻辑，例如调用后端 API 进行测试并显示结果
    testResult.value = '测试中...';
    // 可以添加代码调用后端 API 进行测试
});
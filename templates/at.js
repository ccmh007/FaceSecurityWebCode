// 假设已经有模拟的攻击历史记录数据、靶标数据等
const attackHistoryData = [
    { attackMethod: '方法 1', misjudgmentRate: '10%', contact: 'attacker1@example.com', introduction: '这是攻击者 1 的简介' },
    { attackMethod: '方法 2', misjudgmentRate: '15%', contact: 'attacker2@example.com', introduction: '这是攻击者 2 的简介' }
];

const targetsData = [
    { name: '模型 1', author: '作者 1', contact: 'author1@example.com', year: '2020', source: '机构 1', defense: '方式 1', description: '这是模型 1 的原理介绍', sourceCode: 'https://example.com/model1.zip' },
    { name: '模型 2', author: '作者 2', contact: 'author2@example.com', year: '2021', source: '机构 2', defense: '方式 2', description: '这是模型 2 的原理介绍', sourceCode: 'https://example.com/model2.zip' }
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
const dashboardLink = document.getElementById('dashboardLink');
const targetsLink = document.getElementById('targetsLink');
const submitLink = document.getElementById('submitLink');
const resultsLink = document.getElementById('resultsLink');
const personalLink = document.getElementById('personalLink');

dashboardLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('dashboard');
    populateAttackHistory();
});

targetsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('targets');
    populateTargets();
});

submitLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('submit');
    populateSubmitTargets();
});

resultsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('results');
    populateResults();
});

personalLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('personal');
    populatePersonalInfo();
});

// 填充攻击历史记录数据
function populateAttackHistory() {
    const searchInput = document.getElementById('modelSearchInput').value.toLowerCase();
    const filteredData = attackHistoryData.filter(item =>
        item.attackMethod.toLowerCase().includes(searchInput) ||
        item.contact.toLowerCase().includes(searchInput) ||
        item.introduction.toLowerCase().includes(searchInput)
    );
    const attackHistoryBody = document.getElementById('attackHistoryBody');
    attackHistoryBody.innerHTML = '';
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.attackMethod}</td><td>${item.misjudgmentRate}</td><td>${item.contact}</td><td>${item.introduction}</td>`;
        attackHistoryBody.appendChild(row);
    });
}

// 填充靶标数据
function populateTargets() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = targetsData.filter(target =>
        target.name.toLowerCase().includes(searchInput) ||
        target.author.toLowerCase().includes(searchInput) ||
        target.source.toLowerCase().includes(searchInput) ||
        target.defense.toLowerCase().includes(searchInput)
    );
    const targetsBody = document.getElementById('targetsBody');
    targetsBody.innerHTML = '';
    filteredData.forEach(target => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${target.name}</td><td>${target.author} - ${target.contact}</td><td>${target.year}</td><td>${target.source}</td><td>${target.defense}</td><td>${target.description}</td><td><a href="${target.sourceCode}" download>下载源码</a></td>`;
        targetsBody.appendChild(row);
    });
}

// 填充成果提交的靶标选项
function populateSubmitTargets() {
    const targetSelect = document.getElementById('target');
    targetsData.forEach(target => {
        const option = document.createElement('option');
        option.value = target.name;
        option.textContent = target.name;
        targetSelect.appendChild(option);
    });
}

// 填充成果查看数据
function populateResults() {
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';
    // 假设这里有实际的成果数据，这里只是模拟
    const resultsData = [
        { attackMethod: '成果方法 1', misjudgmentRate: '8%' },
        { attackMethod: '成果方法 2', misjudgmentRate: '12%' }
    ];
    resultsData.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${result.attackMethod}</td><td>${result.misjudgmentRate}</td>`;
        resultsBody.appendChild(row);
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
    populateAttackHistory();
});
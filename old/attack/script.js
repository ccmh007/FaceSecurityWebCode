// 模拟排行榜数据
const rankingData = [
    { rank: 1, team: '测试队伍', reports: 2, score: 200 },
    { rank: 2, team: '测试添加队伍', reports: 0, score: 0 },
    { rank: 3, team: '第三队伍', reports: 0, score: 0 },
    { rank: 4, team: '第四队伍', reports: 0, score: 0 },
    { rank: 5, team: '第五队伍', reports: 0, score: 0 },
    { rank: 6, team: '第六队伍', reports: 0, score: 0 },
    { rank: 7, team: '第七队伍', reports: 0, score: 0 },
    { rank: 8, team: '第八队伍', reports: 0, score: 0 },
    { rank: 9, team: '第九队伍', reports: 0, score: 0 },
    { rank: 10, team: '第十队伍', reports: 0, score: 0 }
];

// 模拟攻击靶标数据
const targetsData = [
    { name: '模型1', year: '2020', source: '机构1', defense: '方式1', description: '这是模型1的原理介绍', sourceCode: 'https://example.com/model1.zip' },
    { name: '模型2', year: '2021', source: '机构2', defense: '方式2', description: '这是模型2的原理介绍', sourceCode: 'https://example.com/model2.zip' },
    { name: '模型3', year: '2022', source: '机构3', defense: '方式3', description: '这是模型3的原理介绍', sourceCode: 'https://example.com/model3.zip' },
    { name: '模型4', year: '2023', source: '机构4', defense: '方式4', description: '这是模型4的原理介绍', sourceCode: 'https://example.com/model4.zip' },
    { name: '模型5', year: '2024', source: '机构5', defense: '方式5', description: '这是模型5的原理介绍', sourceCode: 'https://example.com/model5.zip' },
    { name: '模型6', year: '2025', source: '机构6', defense: '方式6', description: '这是模型6的原理介绍', sourceCode: 'https://example.com/model6.zip' },
    { name: '模型7', year: '2026', source: '机构7', defense: '方式7', description: '这是模型7的原理介绍', sourceCode: 'https://example.com/model7.zip' },
    { name: '模型8', year: '2027', source: '机构8', defense: '方式8', description: '这是模型8的原理介绍', sourceCode: 'https://example.com/model8.zip' },
    { name: '模型9', year: '2028', source: '机构9', defense: '方式9', description: '这是模型9的原理介绍', sourceCode: 'https://example.com/model9.zip' },
    { name: '模型10', year: '2029', source: '机构10', defense: '方式10', description: '这是模型10的原理介绍', sourceCode: 'https://example.com/model10.zip' }
];

const itemsPerPage = 3; // 每页显示的队伍数量（主控台）
const targetsItemsPerPage = 5; // 每页显示的靶标数量

let currentPage = 1;
let currentPageTargets = 1;
let filteredTargetsData = targetsData;

// 隐藏所有页面
function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// 显示指定页面
function showSection(id) {
    const section = document.getElementById(id);
    section.style.display = 'block';
}

// 导航栏链接点击事件处理
const dashboardLink = document.getElementById('dashboardLink');
const targetsLink = document.getElementById('targetsLink');
const submitLink = document.getElementById('submitLink');
const resultsLink = document.getElementById('resultsLink');

dashboardLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('dashboard');
    populateRanking();
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
});

resultsLink.addEventListener('click', function (e) {
    e.preventDefault();
    hideAllSections();
    showSection('results');
});

// 填充排行榜数据
function populateRanking() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const rankingBody = document.getElementById('rankingBody');
    rankingBody.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < rankingData.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${rankingData[i].rank}</td><td>${rankingData[i].team}</td><td>${rankingData[i].reports}份</td><td>${rankingData[i].score}分</td>`;
        rankingBody.appendChild(row);
    }

    updatePagination();
}

// 更新主控台分页按钮状态
function updatePagination() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');

    currentPageSpan.textContent = currentPage;

    if (currentPage === 1) {
        prevPageButton.disabled = true;
    } else {
        prevPageButton.disabled = false;
    }

    if (currentPage * itemsPerPage >= rankingData.length) {
        nextPageButton.disabled = true;
    } else {
        nextPageButton.disabled = false;
    }
}

// 主控台上一页按钮点击事件
document.getElementById('prevPage').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        populateRanking();
    }
});

// 主控台下一页按钮点击事件
document.getElementById('nextPage').addEventListener('click', function () {
    if (currentPage * itemsPerPage < rankingData.length) {
        currentPage++;
        populateRanking();
    }
});

// 填充攻击靶标数据
function populateTargets() {
    const startIndex = (currentPageTargets - 1) * targetsItemsPerPage;
    const endIndex = startIndex + targetsItemsPerPage;
    const targetsBody = document.getElementById('targetsBody');
    targetsBody.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < filteredTargetsData.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${filteredTargetsData[i].name}</td><td>${filteredTargetsData[i].year}</td><td>${filteredTargetsData[i].source}</td><td>${filteredTargetsData[i].defense}</td><td>${filteredTargetsData[i].description}</td><td><a href="${filteredTargetsData[i].sourceCode}" download>下载源码</a></td>`;
        targetsBody.appendChild(row);
    }

    updateTargetsPagination();
    updateEntriesInfo();
}

// 更新攻击靶标分页按钮状态
function updateTargetsPagination() {
    const prevPageButtonTargets = document.getElementById('prevPageTargets');
    const nextPageButtonTargets = document.getElementById('nextPageTargets');
    const currentPageSpanTargets = document.getElementById('currentPageTargets');

    currentPageSpanTargets.textContent = currentPageTargets;

    if (currentPageTargets === 1) {
        prevPageButtonTargets.disabled = true;
    } else {
        prevPageButtonTargets.disabled = false;
    }

    if (currentPageTargets * targetsItemsPerPage >= filteredTargetsData.length) {
        nextPageButtonTargets.disabled = true;
    } else {
        nextPageButtonTargets.disabled = false;
    }
}

// 更新显示条目信息
function updateEntriesInfo() {
    const startIndex = (currentPageTargets - 1) * targetsItemsPerPage + 1;
    const endIndex = Math.min(currentPageTargets * targetsItemsPerPage, filteredTargetsData.length);
    const entriesInfoSpan = document.getElementById('entriesInfo');
    entriesInfoSpan.textContent = `Showing ${startIndex} to ${endIndex} of ${filteredTargetsData.length} entries`;
}

// 攻击靶标上一页按钮点击事件
document.getElementById('prevPageTargets').addEventListener('click', function () {
    if (currentPageTargets > 1) {
        currentPageTargets--;
        populateTargets();
    }
});

// 攻击靶标下一页按钮点击事件
document.getElementById('nextPageTargets').addEventListener('click', function () {
    if (currentPageTargets * targetsItemsPerPage < filteredTargetsData.length) {
        currentPageTargets++;
        populateTargets();
    }
});

// 搜索按钮点击事件
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    filteredTargetsData = targetsData.filter(target =>
        target.name.toLowerCase().includes(searchInput) ||
        target.year.toLowerCase().includes(searchInput) ||
        target.source.toLowerCase().includes(searchInput) ||
        target.defense.toLowerCase().includes(searchInput)
    );
    currentPageTargets = 1;
    populateTargets();
});

// 每页显示条目数选择框改变事件
document.getElementById('entriesSelect').addEventListener('change', function () {
    targetsItemsPerPage = parseInt(this.value);
    currentPageTargets = 1;
    populateTargets();
});

// 页面加载时初始化，默认显示主控台页面
window.addEventListener('load', function () {
    hideAllSections();
    showSection('dashboard');
    populateRanking();
});
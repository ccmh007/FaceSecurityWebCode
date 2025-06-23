// 初始化：显示主控制台
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
    setActiveNav('dashboard');
});

// 导航点击事件
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section; // 从data-section获取目标section
        showSection(sectionId);
        setActiveNav(sectionId);
    });
});

// 显示指定section
function showSection(sectionId) {
    // 隐藏所有section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // 显示目标section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// 设置导航激活状态
function setActiveNav(sectionId) {
    // 移除所有导航的active类
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // 给对应导航添加active类
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// 示例：成果提交表单提交
document.getElementById('submitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        attackMethod: document.getElementById('attackMethod').value,
        targetModel: document.getElementById('targetModel').value,
        file: document.getElementById('attackFile').files[0],
        description: document.getElementById('description').value
    };
    alert('提交成功！\n' + JSON.stringify(formData, null, 2));
});

// 示例：个人信息保存
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const profileData = {
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        bio: document.getElementById('bio').value
    };
    alert('保存成功！\n' + JSON.stringify(profileData, null, 2));
});

function showSection(sectionId) {
    // 隱藏所有部分
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // 顯示選定的部分
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');
}

// 確保頁面加載時顯示首頁
window.onload = function() {
    showSection('home');
};
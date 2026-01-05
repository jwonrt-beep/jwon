// 로고 로더 - 모든 페이지에서 커스텀 로고를 로드
document.addEventListener('DOMContentLoaded', function() {
    loadCustomLogo();
});

function loadCustomLogo() {
    const customLogo = localStorage.getItem('customLogo');
    if (customLogo) {
        // 모든 로고 이미지를 찾아서 업데이트
        const logoImages = document.querySelectorAll('.logo img, .admin-logo img');
        logoImages.forEach(img => {
            img.src = customLogo;
        });
        
        // 로고가 로드되었음을 표시
        console.log('Custom logo loaded successfully');
    }
}

// 로고 업데이트 감지
window.addEventListener('storage', function(e) {
    if (e.key === 'logoUpdated') {
        loadCustomLogo();
    }
});

// 페이지 로드 시 로고 확인
if (localStorage.getItem('customLogo')) {
    loadCustomLogo();
}

// P키 연타 감지 (관리자 로그인)
let pKeyCount = 0;
let pKeyTimer = null;

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'p') {
        pKeyCount++;
        
        // 타이머 리셋
        if (pKeyTimer) {
            clearTimeout(pKeyTimer);
        }
        
        // 3초 내에 P키를 5번 연타하면 관리자 로그인 페이지로 이동
        if (pKeyCount >= 5) {
            // 현재 페이지의 경로에 따라 관리자 로그인 페이지 경로 결정
            const currentPath = window.location.pathname;
            let adminPath = 'admin/login.html';
            
            if (currentPath.includes('/products/')) {
                adminPath = '../admin/login.html';
            } else if (currentPath.includes('/media/')) {
                adminPath = '../../admin/login.html';
            } else if (currentPath.includes('/about/') || currentPath.includes('/contact/')) {
                adminPath = '../admin/login.html';
            }
            
            window.location.href = adminPath;
            pKeyCount = 0;
        } else {
            pKeyTimer = setTimeout(() => {
                pKeyCount = 0;
            }, 3000);
        }
    }
});

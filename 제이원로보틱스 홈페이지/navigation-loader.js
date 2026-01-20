// 네비게이션 로더 - 저장된 네비게이션을 실제로 적용
document.addEventListener('DOMContentLoaded', function() {
    loadCustomNavigation();
});

function loadCustomNavigation() {
    const savedNav = localStorage.getItem('jwonNavigation');
    if (savedNav) {
        try {
            const navItems = JSON.parse(savedNav);
            updateNavigation(navItems);
        } catch (e) {
            console.error('Failed to parse navigation data:', e);
        }
    }
}

function updateNavigation(navItems) {
    // 모든 네비게이션 메뉴를 찾아서 업데이트
    const navLists = document.querySelectorAll('.nav-list');
    
    navLists.forEach(navList => {
        // 기존 메뉴 항목들 제거 (홈 링크는 제외)
        const existingItems = navList.querySelectorAll('li:not(:first-child)');
        existingItems.forEach(item => item.remove());
        
        // 새로운 메뉴 항목들 추가
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.href = item.url;
            a.textContent = item.text;
            
            // 현재 페이지 확인
            const currentPath = window.location.pathname;
            if (currentPath.includes(item.url.replace('.html', ''))) {
                a.classList.add('active');
            }
            
            li.appendChild(a);
            navList.appendChild(li);
        });
    });
    
    // 푸터 네비게이션도 업데이트
    updateFooterNavigation(navItems);
}

function updateFooterNavigation(navItems) {
    const footerSections = document.querySelectorAll('.footer-section');
    
    footerSections.forEach(section => {
        const h3 = section.querySelector('h3');
        if (h3 && h3.textContent.includes('홍보센터')) {
            const ul = section.querySelector('ul');
            if (ul) {
                ul.innerHTML = '';
                
                // 홍보센터 하위 메뉴들
                const subMenus = [
                    { text: '동영상', url: 'videos/index.html' },
                    { text: '솔루션', url: 'solutions/index.html' },
                    { text: '사례', url: 'cases/index.html' },
                    { text: '자료실', url: 'resources/index.html' }
                ];
                
                subMenus.forEach(subMenu => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = subMenu.url;
                    a.textContent = subMenu.text;
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            }
        } else if (h3 && h3.textContent.includes('사이트')) {
            const ul = section.querySelector('ul');
            if (ul) {
                ul.innerHTML = '';
                
                navItems.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.url;
                    a.textContent = item.text;
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            }
        }
    });
}

// 네비게이션 업데이트 감지
window.addEventListener('storage', function(e) {
    if (e.key === 'jwonNavigation') {
        loadCustomNavigation();
    }
});

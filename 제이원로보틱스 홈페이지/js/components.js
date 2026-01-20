// 제이원로보틱스 컴포넌트 스크립트

// 컴포넌트 초기화
function initComponents() {
    // 현재는 특별한 컴포넌트가 없으므로 빈 함수로 유지
    console.log('컴포넌트 초기화 완료');
}

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initComponents();
});

// 전역으로 노출
window.JaywonComponents = {
    initComponents
};

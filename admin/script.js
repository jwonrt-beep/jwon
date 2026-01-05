// 제이원로보틱스 관리자 콘솔 JavaScript
(function() {
    'use strict';

    // 전역 변수
    let currentUser = null;
    let currentSection = 'dashboard';
    
    // 페이징 관련 변수
    const pageSize = 10;
    const paginationState = {
        leads: { currentPage: 1, totalPages: 1 },
        products: { currentPage: 1, totalPages: 1 },
        solutions: { currentPage: 1, totalPages: 1 },
        cases: { currentPage: 1, totalPages: 1 },
        resources: { currentPage: 1, totalPages: 1 },
        media: { currentPage: 1, totalPages: 1 },
        faq: { currentPage: 1, totalPages: 1 },
        users: { currentPage: 1, totalPages: 1 },
        tickets: { currentPage: 1, totalPages: 1 },
        audit: { currentPage: 1, totalPages: 1 }
    };

    // RBAC 권한 정의
    const permissions = {
        admin: {
            dashboard: ['view', 'edit'],
            leads: ['view', 'create', 'edit', 'delete', 'assign', 'export', 'import'],
            tickets: ['view', 'create', 'edit', 'delete', 'assign', 'export', 'import'],
            products: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            solutions: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            cases: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            resources: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            media: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            faq: ['view', 'create', 'edit', 'delete', 'reorder', 'export', 'import'],
            users: ['view', 'create', 'edit', 'delete', 'export', 'import'],
            settings: ['view', 'edit'],
            hero: ['view', 'edit'],
            audit: ['view', 'export'],
            backup: ['view', 'export', 'import', 'delete'],
            system: ['view', 'monitor', 'logs']
        },
        editor: {
            dashboard: ['view'],
            leads: ['view', 'edit', 'assign', 'export'],
            tickets: ['view', 'edit', 'assign', 'export'],
            products: ['view', 'edit', 'export'],
            solutions: ['view', 'edit', 'export'],
            cases: ['view', 'edit', 'export'],
            resources: ['view', 'edit', 'export'],
            media: ['view', 'edit', 'export'],
            faq: ['view', 'edit', 'reorder', 'export'],
            users: ['view'],
            settings: ['view'],
            hero: ['view', 'edit'],
            audit: ['view'],
            backup: ['view', 'export'],
            system: ['view']
        },
        viewer: {
            dashboard: ['view'],
            leads: ['view'],
            tickets: ['view'],
            products: ['view'],
            solutions: ['view'],
            cases: ['view'],
            resources: ['view'],
            media: ['view'],
            faq: ['view'],
            users: ['view'],
            settings: ['view'],
            hero: ['view'],
            audit: ['view'],
            backup: ['view'],
            system: ['view']
        }
    };

    // 권한 확인 함수
    function hasPermission(section, action) {
        if (!currentUser || !currentUser.role) return false;
        const userPermissions = permissions[currentUser.role];
        return userPermissions && userPermissions[section] && userPermissions[section].includes(action);
    }

    // UI 요소 권한 제어 함수
    function applyRBAC() {
        // 버튼 권한 제어
        const buttons = document.querySelectorAll('[data-permission]');
        buttons.forEach(button => {
            const [section, action] = button.getAttribute('data-permission').split(':');
            if (!hasPermission(section, action)) {
                button.style.display = 'none';
            }
        });

        // 입력 필드 권한 제어
        const inputs = document.querySelectorAll('[data-permission-input]');
        inputs.forEach(input => {
            const [section, action] = input.getAttribute('data-permission-input').split(':');
            if (!hasPermission(section, action)) {
                input.disabled = true;
                input.style.opacity = '0.6';
            }
        });

        // 메뉴 권한 제어
        const menuItems = document.querySelectorAll('[data-permission-menu]');
        menuItems.forEach(item => {
            const [section, action] = item.getAttribute('data-permission-menu').split(':');
            if (!hasPermission(section, action)) {
                item.style.display = 'none';
            }
        });
    }

    // 초기화
    function init() {
        setupEventListeners();
        setupGlobalErrorHandling();
        checkAuth();
        loadDashboardData();
    }

    // 이벤트 리스너 설정
    function setupEventListeners() {
        // 로그인 폼
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }

        // 로그아웃 버튼
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        // 네비게이션
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavigation);
        });

        // 검색 및 필터
        const leadSearch = document.getElementById('leadSearch');
        if (leadSearch) {
            leadSearch.addEventListener('input', filterLeads);
        }

        const leadStatusFilter = document.getElementById('leadStatusFilter');
        if (leadStatusFilter) {
            leadStatusFilter.addEventListener('change', filterLeads);
        }

        // 설정 폼
        const settingsForm = document.getElementById('settingsForm');
        if (settingsForm) {
            settingsForm.addEventListener('submit', handleSettingsSave);
        }

        // 히어로 폼
        const heroForm = document.getElementById('heroForm');
        if (heroForm) {
            heroForm.addEventListener('submit', handleHeroSave);
        }

        // 티켓 검색 및 필터
        const ticketSearch = document.getElementById('ticketSearch');
        if (ticketSearch) {
            ticketSearch.addEventListener('input', filterTickets);
        }

        const ticketStatusFilter = document.getElementById('ticketStatusFilter');
        if (ticketStatusFilter) {
            ticketStatusFilter.addEventListener('change', filterTickets);
        }

        const ticketPriorityFilter = document.getElementById('ticketPriorityFilter');
        if (ticketPriorityFilter) {
            ticketPriorityFilter.addEventListener('change', filterTickets);
        }

        // 감사로그 검색 및 필터
        const auditSearch = document.getElementById('auditSearch');
        if (auditSearch) {
            auditSearch.addEventListener('input', filterAudit);
        }

        const auditActionFilter = document.getElementById('auditActionFilter');
        if (auditActionFilter) {
            auditActionFilter.addEventListener('change', filterAudit);
        }
    }

    // 인증 확인
    function checkAuth() {
        const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
        if (isAuthenticated) {
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                // 세션 유효성 검사
                if (isSessionValid(currentUser)) {
                    showDashboard();
                    // 사용자 활동 추적 시작
                    startActivityTracking();
                } else {
                    showToast('세션이 만료되었습니다. 다시 로그인해주세요.', 'warning');
                    handleLogout();
                }
            } else {
                showLogin();
            }
        } else {
            showLogin();
        }
    }

    // 세션 유효성 검사
    function isSessionValid(user) {
        if (!user || !user.loginTime) return false;
        
        const loginTime = new Date(user.loginTime);
        const now = new Date();
        const sessionTimeout = 8 * 60 * 60 * 1000; // 8시간
        
        return (now - loginTime) < sessionTimeout;
    }

    // 사용자 활동 추적 시작
    function startActivityTracking() {
        // 주기적 활동 추적 (5분마다)
        setInterval(trackUserActivity, 5 * 60 * 1000);
        
        // 사용자 상호작용 이벤트 리스너
        document.addEventListener('click', trackUserActivity);
        document.addEventListener('keypress', trackUserActivity);
        document.addEventListener('scroll', throttle(trackUserActivity, 1000));
    }

    // 로그인 처리
    function handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        let role = formData.get('role') || 'admin';

        // 데모 계정 검증
        const demoAccounts = {
            'admin': { password: 'admin123', role: 'admin' },
            'editor': { password: 'edit123', role: 'editor' },
            'viewer': { password: 'view123', role: 'viewer' }
        };
        
        // 데모 계정으로 로그인한 경우
        if (demoAccounts[username] && demoAccounts[username].password === password) {
            role = demoAccounts[username].role;
        }

        // 데모용: 아무 아이디/비밀번호로 로그인 가능
        if (username && password) {
            currentUser = { 
                username: username, 
                role: role,
                loginTime: new Date().toISOString(),
                sessionId: generateSessionId()
            };
            localStorage.setItem('adminAuth', 'true');
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // 사용자 세션 정보 저장
            const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
            sessions.push({
                sessionId: currentUser.sessionId,
                username: currentUser.username,
                role: currentUser.role,
                loginTime: currentUser.loginTime,
                lastActivity: new Date().toISOString(),
                ipAddress: '127.0.0.1',
                userAgent: navigator.userAgent
            });
            localStorage.setItem('userSessions', JSON.stringify(sessions));
            
            // 감사 로그에 로그인 기록
            logAuditEvent('user_login', {
                username: currentUser.username,
                role: currentUser.role,
                sessionId: currentUser.sessionId,
                loginTime: currentUser.loginTime
            });
            
            // 역할별 초기 화면 설정
            setInitialScreenByRole(currentUser.role);
            
            showDashboard();
            showToast(`${getRoleText(currentUser.role)} 권한으로 로그인되었습니다.`, 'success');
        } else {
            showToast('아이디와 비밀번호를 입력해주세요.', 'error');
        }
    }

    // 세션 ID 생성
    function generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // 역할별 초기 화면 설정
    function setInitialScreenByRole(role) {
        let initialSection = 'dashboard';
        
        switch (role) {
            case 'admin':
                initialSection = 'dashboard';
                break;
            case 'editor':
                initialSection = 'leads';
                break;
            case 'viewer':
                initialSection = 'dashboard';
                break;
        }
        
        showSection(initialSection);
        currentSection = initialSection;
    }

    // 사용자 활동 추적
    function trackUserActivity() {
        if (!currentUser) return;
        
        // 세션 업데이트
        const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
        const sessionIndex = sessions.findIndex(s => s.sessionId === currentUser.sessionId);
        if (sessionIndex !== -1) {
            sessions[sessionIndex].lastActivity = new Date().toISOString();
            localStorage.setItem('userSessions', JSON.stringify(sessions));
        }
        
        // 역할별 세션 제한 체크
        checkSessionLimits();
    }

    // 세션 제한 체크
    function checkSessionLimits() {
        if (!currentUser) return;
        
        const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
        const userSessions = sessions.filter(s => s.username === currentUser.username);
        
        // 역할별 세션 제한
        const sessionLimits = {
            admin: 3,
            editor: 2,
            viewer: 1
        };
        
        const limit = sessionLimits[currentUser.role] || 1;
        if (userSessions.length > limit) {
            // 가장 오래된 세션 종료
            const oldestSession = userSessions.sort((a, b) => 
                new Date(a.loginTime) - new Date(b.loginTime)
            )[0];
            
            if (oldestSession.sessionId !== currentUser.sessionId) {
                showToast('다른 세션에서 로그아웃되었습니다.', 'warning');
                handleLogout();
            }
        }
    }

    // 로그아웃 처리
    function handleLogout() {
        if (currentUser) {
            // 세션 종료 기록
            const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
            const sessionIndex = sessions.findIndex(s => s.sessionId === currentUser.sessionId);
            if (sessionIndex !== -1) {
                sessions[sessionIndex].logoutTime = new Date().toISOString();
                sessions[sessionIndex].sessionDuration = 
                    new Date(sessions[sessionIndex].logoutTime) - new Date(sessions[sessionIndex].loginTime);
                localStorage.setItem('userSessions', JSON.stringify(sessions));
            }
            
            // 감사 로그에 로그아웃 기록
            logAuditEvent('user_logout', {
                username: currentUser.username,
                role: currentUser.role,
                sessionId: currentUser.sessionId,
                logoutTime: new Date().toISOString(),
                sessionDuration: sessions[sessionIndex] ? sessions[sessionIndex].sessionDuration : 0
            });
        }
        
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('currentUser');
        currentUser = null;
        showLogin();
        showToast('로그아웃되었습니다.', 'info');
    }

    // 로그인 화면 표시
    function showLogin() {
        document.getElementById('loginScreen').style.display = 'flex';
        document.getElementById('adminDashboard').style.display = 'none';
    }

    // 대시보드 표시
    function showDashboard() {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'grid';
        document.getElementById('currentUser').textContent = currentUser ? `${currentUser.username} (${currentUser.role})` : '관리자';
        applyRBAC(); // 대시보드 로드 시 권한 적용
    }

    // 네비게이션 처리
    function handleNavigation(event) {
        event.preventDefault();
        const section = event.target.getAttribute('data-section');
        
        // 활성 네비게이션 링크 업데이트
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');

        // 섹션 표시
        showSection(section);
        currentSection = section;

        // 섹션별 데이터 로드
        loadSectionData(section);
    }

    // 섹션 표시
    function showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // 섹션별 데이터 로드
    function loadSectionData(section) {
        switch (section) {
            case 'dashboard':
                loadDashboardData();
                break;
            case 'leads':
                loadLeadsData();
                break;
            case 'tickets':
                loadTicketsData();
                break;
            case 'products':
                loadProductsData();
                break;
            case 'solutions':
                loadSolutionsData();
                break;
            case 'cases':
                loadCasesData();
                break;
            case 'resources':
                loadResourcesData();
                break;
            case 'media':
                loadMediaData();
                break;
            case 'faq':
                loadFAQData();
                break;
            case 'users':
                loadUsersData();
                break;
            case 'hero':
                loadHeroData();
                break;
            case 'audit':
                loadAuditData();
                break;
            case 'settings':
                loadSettingsData();
                break;
            case 'backup':
                updateBackupInfo();
                break;
            case 'system':
                updateSystemStats();
                updateSystemLogs();
                break;
        }
    }

    // 대시보드 데이터 로드
    function loadDashboardData() {
        // 통계 데이터 계산
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const cases = JSON.parse(localStorage.getItem('cases') || '[]');
        const resources = JSON.parse(localStorage.getItem('resources') || '[]');
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const audit = JSON.parse(localStorage.getItem('audit') || '[]');

        // 기본 통계 (모든 역할에서 접근 가능)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentLeads = leads.filter(lead => 
            new Date(lead.createdAt) > sevenDaysAgo
        ).length;

        const pendingInquiries = leads.filter(lead => 
            lead.status === 'new' || lead.status === 'qualified'
        ).length;

        const completedTickets = tickets.filter(ticket => 
            ticket.status === 'resolved'
        ).length;

        const publishedCases = cases.filter(caseItem => 
            caseItem.visible
        ).length;

        const resourceDownloads = Math.floor(Math.random() * 50) + 10;
        const conversionRate = Math.floor(Math.random() * 20) + 5;

        // 역할별 차별화된 통계
        let roleSpecificStats = {};
        
        if (hasPermission('leads', 'view')) {
            roleSpecificStats.leadsByStatus = {
                new: leads.filter(l => l.status === 'new').length,
                contacted: leads.filter(l => l.status === 'contacted').length,
                qualified: leads.filter(l => l.status === 'qualified').length,
                converted: leads.filter(l => l.status === 'converted').length
            };
        }

        if (hasPermission('tickets', 'view')) {
            roleSpecificStats.ticketsByPriority = {
                high: tickets.filter(t => t.priority === 'high').length,
                medium: tickets.filter(t => t.priority === 'med').length,
                low: tickets.filter(t => t.priority === 'low').length
            };
            
            roleSpecificStats.ticketsByStatus = {
                open: tickets.filter(t => t.status === 'open').length,
                inProgress: tickets.filter(t => t.status === 'in_progress').length,
                resolved: tickets.filter(t => t.status === 'resolved').length
            };
        }

        if (hasPermission('audit', 'view')) {
            const dayAgo = new Date();
            dayAgo.setDate(dayAgo.getDate() - 1);
            roleSpecificStats.recentActivity = audit.filter(log => 
                new Date(log.timestamp) > dayAgo
            ).length;
            
            roleSpecificStats.activityByUser = {};
            audit.forEach(log => {
                const username = log.actor.split(' ')[0];
                roleSpecificStats.activityByUser[username] = (roleSpecificStats.activityByUser[username] || 0) + 1;
            });
        }

        if (hasPermission('users', 'view')) {
            roleSpecificStats.usersByRole = {
                admin: users.filter(u => u.role === 'admin').length,
                editor: users.filter(u => u.role === 'editor').length,
                viewer: users.filter(u => u.role === 'viewer').length
            };
            
            roleSpecificStats.activeUsers = users.filter(u => u.active !== false).length;
        }

        // 통계 업데이트
        document.getElementById('recentLeads').textContent = recentLeads;
        document.getElementById('pendingInquiries').textContent = pendingInquiries;
        document.getElementById('completedTickets').textContent = completedTickets;
        document.getElementById('publishedCases').textContent = publishedCases;
        document.getElementById('resourceDownloads').textContent = resourceDownloads;
        document.getElementById('conversionRate').textContent = conversionRate + '%';

        // 역할별 추가 통계 표시
        updateRoleSpecificStats(roleSpecificStats);

        // 시스템 모니터링 로드
        loadSystemMonitoring();

        // 최근 활동 로드
        loadRecentActivity();
    }

    // 역할별 통계 업데이트
    function updateRoleSpecificStats(stats) {
        const statsContainer = document.getElementById('roleSpecificStats');
        if (!statsContainer) return;

        let statsHTML = '<div class="role-stats-section">';
        
        if (stats.leadsByStatus) {
            statsHTML += `
                <div class="stat-group">
                    <h4>리드 상태별 분포</h4>
                    <div class="stat-grid">
                        <div class="stat-item">
                            <span class="stat-value">${stats.leadsByStatus.new}</span>
                            <span class="stat-label">신규</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${stats.leadsByStatus.contacted}</span>
                            <span class="stat-label">연락됨</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${stats.leadsByStatus.qualified}</span>
                            <span class="stat-label">검증됨</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${stats.leadsByStatus.converted}</span>
                            <span class="stat-label">전환됨</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (stats.ticketsByPriority) {
            statsHTML += `
                <div class="stat-group">
                    <h4>티켓 우선순위별 분포</h4>
                    <div class="stat-grid">
                        <div class="stat-item">
                            <span class="stat-value high">${stats.ticketsByPriority.high}</span>
                            <span class="stat-label">높음</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value medium">${stats.ticketsByPriority.medium}</span>
                            <span class="stat-label">보통</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value low">${stats.ticketsByPriority.low}</span>
                            <span class="stat-label">낮음</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (stats.usersByRole) {
            statsHTML += `
                <div class="stat-group">
                    <h4>사용자 역할별 분포</h4>
                    <div class="stat-grid">
                        <div class="stat-item">
                            <span class="stat-value">${stats.usersByRole.admin}</span>
                            <span class="stat-label">관리자</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${stats.usersByRole.editor}</span>
                            <span class="stat-label">편집자</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${stats.usersByRole.viewer}</span>
                            <span class="stat-label">조회자</span>
                        </div>
                    </div>
                </div>
            `;
        }

        statsHTML += '</div>';
        statsContainer.innerHTML = statsHTML;
    }

    // 최근 활동 로드
    function loadRecentActivity() {
        const activityList = document.getElementById('activityList');
        if (!activityList) return;

        // 실제 감사 로그에서 최근 활동 가져오기
        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        const recentAudit = audit.slice(-5).reverse(); // 최근 5개

        if (recentAudit.length === 0) {
            activityList.innerHTML = '<div class="activity-item">최근 활동이 없습니다.</div>';
            return;
        }

        activityList.innerHTML = recentAudit.map(log => {
            const timeAgo = getTimeAgo(new Date(log.timestamp));
            return `
                <div class="activity-item">
                    <div><strong>${log.action}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${timeAgo} • ${log.actor}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 시간 경과 계산
    function getTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) {
            return `${diffInSeconds}초 전`;
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes}분 전`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours}시간 전`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days}일 전`;
        }
    }

    // 시스템 모니터링 데이터 로드
    function loadSystemMonitoring() {
        if (!hasPermission('audit', 'view')) return;

        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        const sessions = JSON.parse(localStorage.getItem('userSessions') || '[]');
        
        // 시스템 통계 계산
        const systemStats = {
            totalAuditLogs: audit.length,
            activeSessions: sessions.filter(s => !s.logoutTime).length,
            todayLogins: sessions.filter(s => {
                const loginDate = new Date(s.loginTime).toDateString();
                const today = new Date().toDateString();
                return loginDate === today;
            }).length,
            highSeverityEvents: audit.filter(log => log.severity === 'high').length
        };

        // 시스템 상태 업데이트
        updateSystemStatus(systemStats);
    }

    // 시스템 상태 업데이트
    function updateSystemStatus(stats) {
        const statusContainer = document.getElementById('systemStatus');
        if (!statusContainer) return;

        const statusHTML = `
            <div class="system-status">
                <h4>시스템 상태</h4>
                <div class="status-grid">
                    <div class="status-item">
                        <span class="status-value">${stats.totalAuditLogs}</span>
                        <span class="status-label">총 감사 로그</span>
                    </div>
                    <div class="status-item">
                        <span class="status-value">${stats.activeSessions}</span>
                        <span class="status-label">활성 세션</span>
                    </div>
                    <div class="status-item">
                        <span class="status-value">${stats.todayLogins}</span>
                        <span class="status-label">오늘 로그인</span>
                    </div>
                    <div class="status-item">
                        <span class="status-value ${stats.highSeverityEvents > 0 ? 'warning' : 'normal'}">${stats.highSeverityEvents}</span>
                        <span class="status-label">높은 심각도 이벤트</span>
                    </div>
                </div>
            </div>
        `;
        
        statusContainer.innerHTML = statusHTML;
    }

    // 리드 데이터 로드
    function loadLeadsData() {
        const leadsList = document.getElementById('leadsList');
        if (!leadsList) return;

        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        
        if (leads.length === 0) {
            leadsList.innerHTML = '<div class="data-item">등록된 리드가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedLeads = applyPagination(leads, 'leads');

        leadsList.innerHTML = paginatedLeads.map(lead => `
            <div class="data-item">
                <div>
                    <div><strong>${lead.name}</strong> (${lead.company})</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${lead.phone} • ${new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                    ${lead.issues && lead.issues.length > 0 ? 
                        `<div style="color: var(--primary); font-size: 0.875rem;">
                            관심분야: ${lead.issues.join(', ')}
                        </div>` : ''
                    }
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${lead.status}">${getStatusText(lead.status)}</span>
                    <button class="btn btn-secondary" onclick="viewLead('${lead.id}')">상세보기</button>
                </div>
            </div>
        `).join('');
    }

    // 제품 데이터 로드
    function loadProductsData() {
        const productsList = document.getElementById('productsList');
        if (!productsList) return;

        const products = JSON.parse(localStorage.getItem('products') || '[]');
        
        // 기본 제품이 없으면 생성
        if (products.length === 0) {
            const defaultProducts = [
                { id: '1', name: 'Active GⅢ', summary: '박판·아연도금(Zn) 용접 시 스패터를 줄여 후처리 시간을 단축', visible: true },
                { id: '2', name: 'High Power GⅢ', summary: '두꺼운 철판·중후판을 빠르고 강하게 용접', visible: true },
                { id: '3', name: 'DTPSⅢ', summary: '오프라인에서 티칭(셋업)을 미리 해두어 라인이 멈추지 않도록 함', visible: true }
            ];
            localStorage.setItem('products', JSON.stringify(defaultProducts));
            loadProductsData();
            return;
        }

        // 페이징 적용
        const paginatedProducts = applyPagination(products, 'products');

        productsList.innerHTML = paginatedProducts.map(product => `
            <div class="data-item">
                <div>
                    <div><strong>${product.name}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${product.summary}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${product.visible ? 'visible' : 'hidden'}">
                        ${product.visible ? '공개' : '비공개'}
                    </span>
                    <button class="btn btn-secondary" onclick="editProduct('${product.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 사례 데이터 로드
    function loadCasesData() {
        const casesList = document.getElementById('casesList');
        if (!casesList) return;

        const cases = JSON.parse(localStorage.getItem('cases') || '[]');
        
        if (cases.length === 0) {
            casesList.innerHTML = '<div class="data-item">등록된 사례가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedCases = applyPagination(cases, 'cases');

        casesList.innerHTML = paginatedCases.map(caseItem => `
            <div class="data-item">
                <div>
                    <div><strong>${caseItem.title}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${caseItem.industry} • ${caseItem.material}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${caseItem.visible ? 'visible' : 'hidden'}">
                        ${caseItem.visible ? '공개' : '비공개'}
                    </span>
                    <button class="btn btn-secondary" onclick="editCase('${caseItem.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 설정 데이터 로드
    function loadSettingsData() {
        const settings = JSON.parse(localStorage.getItem('settings') || '{}');
        
        document.getElementById('siteTitle').value = settings.siteTitle || '제이원로보틱스 - 스패터는 줄이고, 속도는 올리고, 라인은 멈추지 않는다';
        document.getElementById('metaDescription').value = settings.metaDescription || 'Active GⅢ, High Power GⅢ, DTPSⅢ로 저스패터·초고속·다운타임 최소화. 용접 로봇 전문 기업';
        document.getElementById('metaKeywords').value = settings.metaKeywords || '용접로봇,스패터감소,초고속용접,다운타임최소화,Active GⅢ,High Power GⅢ,DTPSⅢ';
        document.getElementById('ogImage').value = settings.ogImage || 'assets/images/og-image.jpg';
    }

    // 설정 저장
    function handleSettingsSave(event) {
        event.preventDefault();
        
        if (!hasPermission('settings', 'edit')) {
            showToast('설정 변경 권한이 없습니다.', 'error');
            return;
        }
        
        const formData = new FormData(event.target);
        const oldSettings = JSON.parse(localStorage.getItem('settings') || '{}');
        const newSettings = {
            siteTitle: formData.get('siteTitle'),
            metaDescription: formData.get('metaDescription'),
            metaKeywords: formData.get('metaKeywords'),
            ogImage: formData.get('ogImage'),
            lastModified: new Date().toISOString(),
            modifiedBy: currentUser.username
        };

        // 변경사항 추적
        const changes = {};
        Object.keys(newSettings).forEach(key => {
            if (key !== 'lastModified' && key !== 'modifiedBy' && oldSettings[key] !== newSettings[key]) {
                changes[key] = {
                    old: oldSettings[key] || '',
                    new: newSettings[key] || ''
                };
            }
        });

        localStorage.setItem('settings', JSON.stringify(newSettings));
        
        // 감사 로그에 설정 변경 기록
        if (Object.keys(changes).length > 0) {
            logAuditEvent('settings_changed', {
                modifiedBy: currentUser.username,
                changes: changes
            });
        }
        
        showToast('설정이 저장되었습니다.', 'success');
        logAudit('update', 'settings', 'system', '시스템 설정 변경');
    }

    // 리드 필터링
    function filterLeads() {
        const searchTerm = document.getElementById('leadSearch').value.toLowerCase();
        const statusFilter = document.getElementById('leadStatusFilter').value;
        
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        const filteredLeads = leads.filter(lead => {
            const matchesSearch = lead.name.toLowerCase().includes(searchTerm) ||
                                lead.company.toLowerCase().includes(searchTerm) ||
                                lead.phone.includes(searchTerm);
            const matchesStatus = !statusFilter || lead.status === statusFilter;
            
            return matchesSearch && matchesStatus;
        });

        // 페이징 적용
        const paginatedLeads = applyPagination(filteredLeads, 'leads');

        const leadsList = document.getElementById('leadsList');
        if (paginatedLeads.length === 0) {
            leadsList.innerHTML = '<div class="data-item">검색 결과가 없습니다.</div>';
            return;
        }

        leadsList.innerHTML = paginatedLeads.map(lead => `
            <div class="data-item">
                <div>
                    <div><strong>${lead.name}</strong> (${lead.company})</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${lead.phone} • ${new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${lead.status}">${getStatusText(lead.status)}</span>
                    <button class="btn btn-secondary" onclick="viewLead('${lead.id}')">상세보기</button>
                </div>
            </div>
        `).join('');
    }

    // 데이터 내보내기
    window.exportData = function(type) {
        if (!hasPermission(type, 'export')) {
            showToast('내보내기 권한이 없습니다.', 'error');
            return;
        }
        
        const data = localStorage.getItem(type);
        if (!data) {
            showToast('내보낼 데이터가 없습니다.', 'error');
            return;
        }

        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${type}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('데이터가 내보내졌습니다.', 'success');
        logAudit('export', type, `${type} 데이터 내보내기`);
    };

    // 데이터 가져오기/복원
    window.importData = function(type) {
        if (!hasPermission(type, 'import')) {
            showToast('가져오기 권한이 없습니다.', 'error');
            return;
        }
        
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const data = JSON.parse(e.target.result);
                        localStorage.setItem(type, JSON.stringify(data));
                        showToast('데이터가 성공적으로 가져와졌습니다.', 'success');
                        logAudit('import', type, `${type} 데이터 가져오기`);
                        
                        // 현재 섹션 데이터 다시 로드
                        loadSectionData(type);
                    } catch (error) {
                        showToast('잘못된 JSON 파일입니다.', 'error');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    };

    // 제품 편집
    window.editProduct = function(id = null) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const product = id ? products.find(p => p.id === id) : null;
        
        // 권한 체크
        if (product && !hasPermission('products', 'edit')) {
            showToast('제품 수정 권한이 없습니다.', 'error');
            return;
        }
        if (!product && !hasPermission('products', 'create')) {
            showToast('제품 생성 권한이 없습니다.', 'error');
            return;
        }
        
        showModal('제품 ' + (product ? '수정' : '추가'), `
            <form id="productForm">
                <div class="form-group">
                    <label for="productName">제품명</label>
                    <input type="text" id="productName" name="name" value="${product ? product.name : ''}" required ${!hasPermission('products', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="productSummary">요약</label>
                    <textarea id="productSummary" name="summary" rows="3" required ${!hasPermission('products', 'edit') ? 'disabled' : ''}>${product ? product.summary : ''}</textarea>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="productVisible" name="visible" ${product && product.visible ? 'checked' : ''} ${!hasPermission('products', 'edit') ? 'disabled' : ''}>
                        공개
                    </label>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('productForm'));
            const productData = {
                id: product ? product.id : Date.now().toString(),
                name: formData.get('name'),
                summary: formData.get('summary'),
                visible: formData.get('visible') === 'on',
                lastModified: new Date().toISOString(),
                modifiedBy: currentUser.username
            };

            if (product) {
                const index = products.findIndex(p => p.id === id);
                products[index] = productData;
                
                // 감사 로그에 수정 기록
                logAuditEvent('product_modified', {
                    productId: productData.id,
                    productName: productData.name,
                    modifiedBy: currentUser.username,
                    changes: {
                        name: product.name !== productData.name ? `${product.name} → ${productData.name}` : null,
                        summary: product.summary !== productData.summary ? '요약 변경' : null,
                        visible: product.visible !== productData.visible ? `${product.visible} → ${productData.visible}` : null
                    }
                });
            } else {
                products.push(productData);
                
                // 감사 로그에 생성 기록
                logAuditEvent('product_created', {
                    productId: productData.id,
                    productName: productData.name,
                    createdBy: currentUser.username
                });
            }

            localStorage.setItem('products', JSON.stringify(products));
            loadProductsData();
            showToast('제품이 저장되었습니다.', 'success');
            logAudit(product ? 'update' : 'create', 'product', productData.id, `제품 ${product ? '수정' : '생성'}`);
        });
    };

    // 사례 편집
    window.editCase = function(id = null) {
        const cases = JSON.parse(localStorage.getItem('cases') || '[]');
        const caseItem = id ? cases.find(c => c.id === id) : null;
        
        showModal('사례 ' + (caseItem ? '수정' : '추가'), `
            <form id="caseForm">
                <div class="form-group">
                    <label for="caseTitle">제목</label>
                    <input type="text" id="caseTitle" name="title" value="${caseItem ? caseItem.title : ''}" required>
                </div>
                <div class="form-group">
                    <label for="caseIndustry">산업</label>
                    <input type="text" id="caseIndustry" name="industry" value="${caseItem ? caseItem.industry : ''}" required>
                </div>
                <div class="form-group">
                    <label for="caseMaterial">재질</label>
                    <input type="text" id="caseMaterial" name="material" value="${caseItem ? caseItem.material : ''}" required>
                </div>
                <div class="form-group">
                    <label for="caseThickness">두께</label>
                    <input type="text" id="caseThickness" name="thickness" value="${caseItem ? caseItem.thickness : ''}" required>
                </div>
                <div class="form-group">
                    <label for="caseWeldingType">용접 종류</label>
                    <input type="text" id="caseWeldingType" name="weldingType" value="${caseItem ? caseItem.weldingType : ''}" required>
                </div>
                <div class="form-group">
                    <label for="caseQuote">담당자 코멘트</label>
                    <textarea id="caseQuote" name="quote" rows="3">${caseItem ? caseItem.quote : ''}</textarea>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="caseVisible" name="visible" ${caseItem && caseItem.visible ? 'checked' : ''}>
                        공개
                    </label>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('caseForm'));
            const caseData = {
                id: caseItem ? caseItem.id : Date.now().toString(),
                title: formData.get('title'),
                industry: formData.get('industry'),
                material: formData.get('material'),
                thickness: formData.get('thickness'),
                weldingType: formData.get('weldingType'),
                quote: formData.get('quote'),
                visible: formData.get('visible') === 'on',
                kpis: caseItem ? caseItem.kpis : [
                    { label: '스패터 감소', value: '99', unit: '%' },
                    { label: '속도 향상', value: '50', unit: '%' },
                    { label: '다운타임 절감', value: '30', unit: '%' }
                ]
            };

            if (caseItem) {
                const index = cases.findIndex(c => c.id === id);
                cases[index] = caseData;
            } else {
                cases.push(caseData);
            }

            localStorage.setItem('cases', JSON.stringify(cases));
            loadCasesData();
            showToast('사례가 저장되었습니다.', 'success');
        });
    };

    // 리드 상세보기
    window.viewLead = function(id) {
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        const lead = leads.find(l => l.id === id);
        
        if (!lead) {
            showToast('리드를 찾을 수 없습니다.', 'error');
            return;
        }

        showModal('리드 상세정보', `
            <div>
                <div class="form-group">
                    <label>이름</label>
                    <div>${lead.name}</div>
                </div>
                <div class="form-group">
                    <label>회사</label>
                    <div>${lead.company}</div>
                </div>
                <div class="form-group">
                    <label>연락처</label>
                    <div>${lead.phone}</div>
                </div>
                ${lead.email ? `
                <div class="form-group">
                    <label>이메일</label>
                    <div>${lead.email}</div>
                </div>
                ` : ''}
                ${lead.message ? `
                <div class="form-group">
                    <label>요청사항</label>
                    <div>${lead.message}</div>
                </div>
                ` : ''}
                <div class="form-group">
                    <label>관심분야</label>
                    <div class="checkbox-list">
                        <label class="checkbox-item">
                            <input type="checkbox" id="issueSpatter" ${lead.issues && lead.issues.includes('spatter') ? 'checked' : ''} disabled>
                            <span>스패터</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="issueCycle" ${lead.issues && lead.issues.includes('cycle') ? 'checked' : ''} disabled>
                            <span>사이클</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="issueDowntime" ${lead.issues && lead.issues.includes('downtime') ? 'checked' : ''} disabled>
                            <span>라인정지</span>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label>메모</label>
                    <textarea id="leadNotes" rows="3" placeholder="리드에 대한 메모를 입력하세요">${lead.notes || ''}</textarea>
                </div>
                <div class="form-group">
                    <label>담당자</label>
                    <select id="leadOwner">
                        <option value="">담당자 미배정</option>
                        <option value="admin" ${lead.owner === 'admin' ? 'selected' : ''}>관리자</option>
                        <option value="editor1" ${lead.owner === 'editor1' ? 'selected' : ''}>편집자1</option>
                        <option value="editor2" ${lead.owner === 'editor2' ? 'selected' : ''}>편집자2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>등록일</label>
                    <div>${new Date(lead.createdAt).toLocaleString()}</div>
                </div>
                <div class="form-group">
                    <label>상태</label>
                    <select id="leadStatus">
                        <option value="new" ${lead.status === 'new' ? 'selected' : ''}>신규</option>
                        <option value="qualified" ${lead.status === 'qualified' ? 'selected' : ''}>검토중</option>
                        <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>완료</option>
                    </select>
                </div>
                <div class="form-group">
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <button type="button" class="btn btn-secondary" onclick="createTicketFromLead('${id}')">티켓 생성</button>
                        <button type="button" class="btn btn-primary" onclick="assignLeadOwner('${id}')">담당자 배정</button>
                    </div>
                </div>
            </div>
        `, () => {
            const newStatus = document.getElementById('leadStatus').value;
            const newNotes = document.getElementById('leadNotes').value;
            const newOwner = document.getElementById('leadOwner').value;
            
            lead.status = newStatus;
            lead.notes = newNotes;
            lead.owner = newOwner;
            
            const index = leads.findIndex(l => l.id === id);
            leads[index] = lead;
            localStorage.setItem('leads', JSON.stringify(leads));
            
            loadLeadsData();
            showToast('리드 정보가 업데이트되었습니다.', 'success');
            logAudit('edit', 'leads', `리드 ${lead.name} 정보 수정`);
        });
    };

    // 리드 담당자 배정
    window.assignLeadOwner = function(leadId) {
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        const lead = leads.find(l => l.id === leadId);
        
        if (!lead) {
            showToast('리드를 찾을 수 없습니다.', 'error');
            return;
        }

        const owner = document.getElementById('leadOwner').value;
        if (!owner) {
            showToast('담당자를 선택해주세요.', 'error');
            return;
        }

        lead.owner = owner;
        const index = leads.findIndex(l => l.id === leadId);
        leads[index] = lead;
        localStorage.setItem('leads', JSON.stringify(leads));
        
        showToast('담당자가 배정되었습니다.', 'success');
        logAudit('assign', 'leads', `리드 ${lead.name} 담당자 배정: ${owner}`);
    };

    // 리드에서 티켓 생성
    window.createTicketFromLead = function(leadId) {
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        const lead = leads.find(l => l.id === leadId);
        
        if (!lead) {
            showToast('리드를 찾을 수 없습니다.', 'error');
            return;
        }

        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const newTicket = {
            id: Date.now().toString(),
            title: `${lead.name} - ${lead.company} 문의`,
            description: lead.message || '리드에서 생성된 티켓',
            status: 'open',
            priority: 'medium',
            category: 'inquiry',
            leadId: leadId,
            assignedTo: lead.owner || '',
            createdBy: currentUser ? currentUser.username : 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            timeline: [
                {
                    id: Date.now().toString(),
                    action: 'created',
                    description: '리드에서 티켓 생성',
                    actor: currentUser ? currentUser.username : 'admin',
                    timestamp: new Date().toISOString()
                }
            ],
            attachments: []
        };

        tickets.push(newTicket);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
        showToast('티켓이 생성되었습니다.', 'success');
        logAudit('create', 'tickets', `리드 ${lead.name}에서 티켓 생성`);
        
        // 모달 닫기
        closeModal();
    };

    // 모달 표시
    function showModal(title, content, onSave) {
        const modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="btn btn-secondary" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeModal()">취소</button>
                    <button class="btn btn-primary" onclick="saveModal()">저장</button>
                </div>
            </div>
        `;
        
        modalContainer.style.display = 'flex';
        
        // 전역 함수로 저장
        window.closeModal = function() {
            modalContainer.style.display = 'none';
        };
        
        window.saveModal = function() {
            if (onSave) onSave();
            closeModal();
        };
    }

    // 토스트 메시지 표시
    function showToast(message, type = 'info') {
        // 역할별 메시지 제어
        if (currentUser && currentUser.role === 'viewer' && type === 'error') {
            // viewer는 상세한 에러 메시지를 볼 수 없음
            message = '작업을 완료할 수 없습니다. 관리자에게 문의하세요.';
        }
        
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
        
        // 에러 로그 기록
        if (type === 'error') {
            logAuditEvent('error_occurred', {
                message: message,
                user: currentUser ? currentUser.username : 'unknown',
                role: currentUser ? currentUser.role : 'unknown',
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            });
        }
    }

    // 전역 에러 핸들러
    function setupGlobalErrorHandling() {
        window.addEventListener('error', function(event) {
            const errorInfo = {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                user: currentUser ? currentUser.username : 'unknown',
                role: currentUser ? currentUser.role : 'unknown',
                timestamp: new Date().toISOString()
            };
            
            logAuditEvent('javascript_error', errorInfo);
            
            // 사용자에게는 일반적인 에러 메시지 표시
            showToast('시스템 오류가 발생했습니다. 페이지를 새로고침해주세요.', 'error');
        });
        
        window.addEventListener('unhandledrejection', function(event) {
            const errorInfo = {
                message: event.reason,
                user: currentUser ? currentUser.username : 'unknown',
                role: currentUser ? currentUser.role : 'unknown',
                timestamp: new Date().toISOString()
            };
            
            logAuditEvent('unhandled_promise_rejection', errorInfo);
            showToast('네트워크 오류가 발생했습니다. 다시 시도해주세요.', 'error');
        });
    }

    // 상태 텍스트 변환
    function getStatusText(status) {
        const statusMap = {
            'new': '신규',
            'qualified': '검토중',
            'closed': '완료',
            'visible': '공개',
            'hidden': '비공개'
        };
        return statusMap[status] || status;
    }

    // 초기화 실행
    init();

    // ===== 누락된 데이터 로드 함수들 =====

    // 히어로 데이터 로드
    function loadHeroData() {
        const hero = JSON.parse(localStorage.getItem('hero') || '{}');
        
        document.getElementById('heroH1').value = hero.heroH1 || '스패터는 줄이고, 속도는 올리고, 라인은 멈추지 않는다';
        document.getElementById('heroH2').value = hero.heroH2 || 'Active GⅢ, High Power GⅢ, DTPSⅢ로 저스패터·초고속·다운타임 최소화';
        document.getElementById('heroCta1').value = hero.heroCta1 || '데모 영상 보기';
        document.getElementById('heroCta2').value = hero.heroCta2 || '상담·견적 요청';
        document.getElementById('heroVideoDesktop').value = hero.heroVideoDesktop || 'assets/video/hero_loop.mp4';
        document.getElementById('heroVideoMobile').value = hero.heroVideoMobile || 'assets/video/hero_loop_mobile.mp4';
        document.getElementById('heroPoster').value = hero.heroPoster || 'assets/video/hero_poster.svg';
        document.getElementById('heroScrollIndicator').checked = hero.heroScrollIndicator !== false;
    }

    // 히어로 설정 저장
    function handleHeroSave(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const hero = {
            heroH1: formData.get('heroH1'),
            heroH2: formData.get('heroH2'),
            heroCta1: formData.get('heroCta1'),
            heroCta2: formData.get('heroCta2'),
            heroVideoDesktop: formData.get('heroVideoDesktop'),
            heroVideoMobile: formData.get('heroVideoMobile'),
            heroPoster: formData.get('heroPoster'),
            heroScrollIndicator: formData.get('heroScrollIndicator') === 'on'
        };

        localStorage.setItem('hero', JSON.stringify(hero));
        showToast('히어로 설정이 저장되었습니다.', 'success');
        
        // 감사로그 기록
        logAudit('update', 'hero', 'hero', '히어로 설정 업데이트');
    }

    // 티켓 데이터 로드
    function loadTicketsData() {
        const ticketsList = document.getElementById('ticketsList');
        if (!ticketsList) return;

        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        
        if (tickets.length === 0) {
            ticketsList.innerHTML = '<div class="data-item">등록된 티켓이 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedTickets = applyPagination(tickets, 'tickets');

        ticketsList.innerHTML = paginatedTickets.map(ticket => `
            <div class="data-item">
                <div>
                    <div><strong>${ticket.subject}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${ticket.description.substring(0, 100)}...
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${ticket.status}">${getStatusText(ticket.status)}</span>
                    <span class="priority-badge ${ticket.priority}">${getPriorityText(ticket.priority)}</span>
                    <button class="btn btn-secondary" onclick="viewTicket('${ticket.id}')">상세보기</button>
                </div>
            </div>
        `).join('');
    }

    // 솔루션 데이터 로드
    function loadSolutionsData() {
        const solutionsList = document.getElementById('solutionsList');
        if (!solutionsList) return;

        const solutions = JSON.parse(localStorage.getItem('solutions') || '[]');
        
        if (solutions.length === 0) {
            solutionsList.innerHTML = '<div class="data-item">등록된 솔루션이 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedSolutions = applyPagination(solutions, 'solutions');

        solutionsList.innerHTML = paginatedSolutions.map(solution => `
            <div class="data-item">
                <div>
                    <div><strong>${solution.name}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${solution.summary}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${solution.visible ? 'visible' : 'hidden'}">
                        ${solution.visible ? '공개' : '비공개'}
                    </span>
                    <button class="btn btn-secondary" onclick="editSolution('${solution.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 자료실 데이터 로드
    function loadResourcesData() {
        const resourcesList = document.getElementById('resourcesList');
        if (!resourcesList) return;

        const resources = JSON.parse(localStorage.getItem('resources') || '[]');
        
        if (resources.length === 0) {
            resourcesList.innerHTML = '<div class="data-item">등록된 자료가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedResources = applyPagination(resources, 'resources');

        resourcesList.innerHTML = paginatedResources.map(resource => `
            <div class="data-item">
                <div>
                    <div><strong>${resource.title}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${resource.type} • ${resource.fileName}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${resource.visible ? 'visible' : 'hidden'}">
                        ${resource.visible ? '공개' : '비공개'}
                    </span>
                    <button class="btn btn-secondary" onclick="editResource('${resource.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 미디어 데이터 로드
    function loadMediaData() {
        const mediaList = document.getElementById('mediaList');
        if (!mediaList) return;

        const media = JSON.parse(localStorage.getItem('media') || '[]');
        
        if (media.length === 0) {
            mediaList.innerHTML = '<div class="data-item">등록된 미디어가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedMedia = applyPagination(media, 'media');

        mediaList.innerHTML = paginatedMedia.map(item => `
            <div class="data-item">
                <div>
                    <div><strong>${item.title}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${item.type} • ${item.fileName}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button class="btn btn-secondary" onclick="editMedia('${item.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // FAQ 데이터 로드
    function loadFAQData() {
        const faqList = document.getElementById('faqList');
        if (!faqList) return;

        const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
        
        if (faqs.length === 0) {
            faqList.innerHTML = '<div class="data-item">등록된 FAQ가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedFAQs = applyPagination(faqs, 'faq');

        faqList.innerHTML = paginatedFAQs.map(faq => `
            <div class="data-item">
                <div>
                    <div><strong>${faq.question}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${faq.answer.substring(0, 100)}...
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${faq.visible ? 'visible' : 'hidden'}">
                        ${faq.visible ? '공개' : '비공개'}
                    </span>
                    <button class="btn btn-secondary" onclick="editFAQ('${faq.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 사용자 데이터 로드
    function loadUsersData() {
        const usersList = document.getElementById('usersList');
        if (!usersList) return;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.length === 0) {
            usersList.innerHTML = '<div class="data-item">등록된 사용자가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedUsers = applyPagination(users, 'users');

        usersList.innerHTML = paginatedUsers.map(user => `
            <div class="data-item">
                <div>
                    <div><strong>${user.name}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${user.email} • ${getRoleText(user.role)}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${user.active ? 'active' : 'inactive'}">
                        ${user.active ? '활성' : '비활성'}
                    </span>
                    <button class="btn btn-secondary" onclick="editUser('${user.id}')">수정</button>
                </div>
            </div>
        `).join('');
    }

    // 감사로그 데이터 로드
    function loadAuditData() {
        const auditList = document.getElementById('auditList');
        if (!auditList) return;

        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        
        if (audit.length === 0) {
            auditList.innerHTML = '<div class="data-item">감사로그가 없습니다.</div>';
            return;
        }

        // 페이징 적용
        const paginatedAudit = applyPagination(audit.reverse(), 'audit');

        auditList.innerHTML = paginatedAudit.map(log => `
            <div class="data-item">
                <div>
                    <div><strong>${log.action}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${log.detail} • ${new Date(log.timestamp).toLocaleString()}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="actor-badge">${log.actor}</span>
                </div>
            </div>
        `).join('');
    }

    // 티켓 필터링
    function filterTickets() {
        const searchTerm = document.getElementById('ticketSearch').value.toLowerCase();
        const statusFilter = document.getElementById('ticketStatusFilter').value;
        const priorityFilter = document.getElementById('ticketPriorityFilter').value;
        
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const filteredTickets = tickets.filter(ticket => {
            const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm) ||
                                ticket.description.toLowerCase().includes(searchTerm);
            const matchesStatus = !statusFilter || ticket.status === statusFilter;
            const matchesPriority = !priorityFilter || ticket.priority === priorityFilter;
            
            return matchesSearch && matchesStatus && matchesPriority;
        });

        // 페이징 적용
        const paginatedTickets = applyPagination(filteredTickets, 'tickets');

        const ticketsList = document.getElementById('ticketsList');
        if (paginatedTickets.length === 0) {
            ticketsList.innerHTML = '<div class="data-item">검색 결과가 없습니다.</div>';
            return;
        }

        ticketsList.innerHTML = paginatedTickets.map(ticket => `
            <div class="data-item">
                <div>
                    <div><strong>${ticket.subject}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${ticket.description.substring(0, 100)}...
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="status-badge ${ticket.status}">${getStatusText(ticket.status)}</span>
                    <span class="priority-badge ${ticket.priority}">${getPriorityText(ticket.priority)}</span>
                    <button class="btn btn-secondary" onclick="viewTicket('${ticket.id}')">상세보기</button>
                </div>
            </div>
        `).join('');
    }

    // 감사로그 필터링
    function filterAudit() {
        const searchTerm = document.getElementById('auditSearch').value.toLowerCase();
        const actionFilter = document.getElementById('auditActionFilter').value;
        
        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        const filteredAudit = audit.filter(log => {
            const matchesSearch = log.action.toLowerCase().includes(searchTerm) ||
                                log.detail.toLowerCase().includes(searchTerm);
            const matchesAction = !actionFilter || log.action === actionFilter;
            
            return matchesSearch && matchesAction;
        });

        // 페이징 적용
        const paginatedAudit = applyPagination(filteredAudit.reverse(), 'audit');

        const auditList = document.getElementById('auditList');
        if (paginatedAudit.length === 0) {
            auditList.innerHTML = '<div class="data-item">검색 결과가 없습니다.</div>';
            return;
        }

        auditList.innerHTML = paginatedAudit.map(log => `
            <div class="data-item">
                <div>
                    <div><strong>${log.action}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">
                        ${log.detail} • ${new Date(log.timestamp).toLocaleString()}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="actor-badge">${log.actor}</span>
                </div>
            </div>
        `).join('');
    }

    // 감사로그 기록
    function logAudit(action, targetType, targetId, detail) {
        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        const logEntry = {
            id: Date.now().toString(),
            actor: currentUser ? `${currentUser.username} (${currentUser.role})` : '관리자',
            action: action,
            targetType: targetType,
            targetId: targetId,
            detail: detail,
            timestamp: new Date().toISOString(),
            userRole: currentUser ? currentUser.role : 'unknown',
            ipAddress: '127.0.0.1', // 데모용
            userAgent: navigator.userAgent
        };
        audit.push(logEntry);
        localStorage.setItem('audit', JSON.stringify(audit));
    }

    // 상세 감사 로그 기록 (권한 변경, 사용자 활동 등)
    function logAuditEvent(eventType, details) {
        const audit = JSON.parse(localStorage.getItem('audit') || '[]');
        audit.push({
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            action: eventType,
            targetType: 'system',
            targetId: details.userId || details.targetId || 'system',
            detail: JSON.stringify(details),
            actor: currentUser ? `${currentUser.username} (${currentUser.role})` : '관리자',
            userRole: currentUser ? currentUser.role : 'unknown',
            ipAddress: '127.0.0.1',
            userAgent: navigator.userAgent,
            severity: getEventSeverity(eventType)
        });
        localStorage.setItem('audit', JSON.stringify(audit));
    }

    // 이벤트 심각도 판단
    function getEventSeverity(eventType) {
        const highSeverity = ['user_role_changed', 'user_created', 'user_deleted', 'permission_changed'];
        const mediumSeverity = ['data_export', 'data_import', 'settings_changed'];
        
        if (highSeverity.includes(eventType)) return 'high';
        if (mediumSeverity.includes(eventType)) return 'medium';
        return 'low';
    }

    // Throttle 함수
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // 우선순위 텍스트 변환
    function getPriorityText(priority) {
        const priorityMap = {
            'low': '낮음',
            'med': '보통',
            'high': '높음'
        };
        return priorityMap[priority] || priority;
    }

    // 역할 텍스트 변환
    function getRoleText(role) {
        const roleMap = {
            'admin': '관리자',
            'editor': '편집자',
            'viewer': '조회자'
        };
        return roleMap[role] || role;
    }

    // 섹션 텍스트 변환
    function getSectionText(section) {
        const sectionMap = {
            'dashboard': '대시보드',
            'leads': '리드',
            'tickets': '티켓',
            'products': '제품',
            'solutions': '솔루션',
            'cases': '사례',
            'resources': '자료실',
            'media': '미디어',
            'faq': 'FAQ',
            'users': '사용자',
            'settings': '설정',
            'hero': '히어로',
            'audit': '감사로그'
        };
        return sectionMap[section] || section;
    }

    // ===== 전역 함수들 =====

    // 솔루션 편집
    window.editSolution = function(id = null) {
        const solutions = JSON.parse(localStorage.getItem('solutions') || '[]');
        const solution = id ? solutions.find(s => s.id === id) : null;
        
        // 권한 체크
        if (solution && !hasPermission('solutions', 'edit')) {
            showToast('솔루션 수정 권한이 없습니다.', 'error');
            return;
        }
        if (!solution && !hasPermission('solutions', 'create')) {
            showToast('솔루션 생성 권한이 없습니다.', 'error');
            return;
        }
        
        showModal('솔루션 ' + (solution ? '수정' : '추가'), `
            <form id="solutionForm">
                <div class="form-group">
                    <label for="solutionName">솔루션명</label>
                    <input type="text" id="solutionName" name="name" value="${solution ? solution.name : ''}" required ${!hasPermission('solutions', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="solutionSummary">요약</label>
                    <textarea id="solutionSummary" name="summary" rows="3" required ${!hasPermission('solutions', 'edit') ? 'disabled' : ''}>${solution ? solution.summary : ''}</textarea>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="solutionVisible" name="visible" ${solution && solution.visible ? 'checked' : ''} ${!hasPermission('solutions', 'edit') ? 'disabled' : ''}>
                        공개
                    </label>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('solutionForm'));
            const solutionData = {
                id: solution ? solution.id : Date.now().toString(),
                name: formData.get('name'),
                summary: formData.get('summary'),
                visible: formData.get('visible') === 'on',
                lastModified: new Date().toISOString(),
                modifiedBy: currentUser.username
            };

            if (solution) {
                const index = solutions.findIndex(s => s.id === id);
                solutions[index] = solutionData;
                
                // 감사 로그에 수정 기록
                logAuditEvent('solution_modified', {
                    solutionId: solutionData.id,
                    solutionName: solutionData.name,
                    modifiedBy: currentUser.username,
                    changes: {
                        name: solution.name !== solutionData.name ? `${solution.name} → ${solutionData.name}` : null,
                        summary: solution.summary !== solutionData.summary ? '요약 변경' : null,
                        visible: solution.visible !== solutionData.visible ? `${solution.visible} → ${solutionData.visible}` : null
                    }
                });
            } else {
                solutions.push(solutionData);
                
                // 감사 로그에 생성 기록
                logAuditEvent('solution_created', {
                    solutionId: solutionData.id,
                    solutionName: solutionData.name,
                    createdBy: currentUser.username
                });
            }

            localStorage.setItem('solutions', JSON.stringify(solutions));
            loadSolutionsData();
            showToast('솔루션이 저장되었습니다.', 'success');
            logAudit(solution ? 'update' : 'create', 'solution', solutionData.id, `솔루션 ${solution ? '수정' : '생성'}`);
        });
    };

    // 자료 편집
    window.editResource = function(id = null) {
        const resources = JSON.parse(localStorage.getItem('resources') || '[]');
        const resource = id ? resources.find(r => r.id === id) : null;
        
        // 권한 체크
        if (resource && !hasPermission('resources', 'edit')) {
            showToast('자료 수정 권한이 없습니다.', 'error');
            return;
        }
        if (!resource && !hasPermission('resources', 'create')) {
            showToast('자료 생성 권한이 없습니다.', 'error');
            return;
        }
        
        showModal('자료 ' + (resource ? '수정' : '추가'), `
            <form id="resourceForm">
                <div class="form-group">
                    <label for="resourceType">자료 유형</label>
                    <select id="resourceType" name="type" required ${!hasPermission('resources', 'edit') ? 'disabled' : ''}>
                        <option value="brochure" ${resource && resource.type === 'brochure' ? 'selected' : ''}>브로셔</option>
                        <option value="spec" ${resource && resource.type === 'spec' ? 'selected' : ''}>스펙시트</option>
                        <option value="safety" ${resource && resource.type === 'safety' ? 'selected' : ''}>안전 가이드</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="resourceTitle">제목</label>
                    <input type="text" id="resourceTitle" name="title" value="${resource ? resource.title : ''}" required ${!hasPermission('resources', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="resourceFileName">파일명</label>
                    <input type="text" id="resourceFileName" name="fileName" value="${resource ? resource.fileName : ''}" required ${!hasPermission('resources', 'edit') ? 'disabled' : ''}>
                    <small class="form-help">파일명 형식: 영문-숫자-하이픈 (예: product-brochure-2024.pdf)</small>
                </div>
                <div class="form-group">
                    <label for="resourceFile">파일 업로드</label>
                    <input type="file" id="resourceFile" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx" ${!hasPermission('resources', 'edit') ? 'disabled' : ''}>
                    <small class="form-help">최대 파일 크기: 20MB, 허용 형식: PDF, DOC, DOCX, XLS, XLSX</small>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="resourceVisible" name="visible" ${resource && resource.visible ? 'checked' : ''} ${!hasPermission('resources', 'edit') ? 'disabled' : ''}>
                        공개
                    </label>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('resourceForm'));
            const fileInput = document.getElementById('resourceFile');
            
            // 파일 검증
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                if (!validateResourceFile(file)) {
                    showToast('파일 형식이나 크기가 올바르지 않습니다.', 'error');
                    return;
                }
            }
            
            // 파일명 형식 검증
            const fileName = formData.get('fileName');
            if (!validateFileName(fileName)) {
                showToast('파일명 형식이 올바르지 않습니다.', 'error');
                return;
            }
            
            const resourceData = {
                id: resource ? resource.id : Date.now().toString(),
                type: formData.get('type'),
                title: formData.get('title'),
                fileName: fileName,
                visible: formData.get('visible') === 'on',
                lastModified: new Date().toISOString(),
                modifiedBy: currentUser.username,
                fileSize: fileInput.files.length > 0 ? fileInput.files[0].size : (resource ? resource.fileSize : 0)
            };

            if (resource) {
                const index = resources.findIndex(r => r.id === id);
                resources[index] = resourceData;
                
                // 감사 로그에 수정 기록
                logAuditEvent('resource_modified', {
                    resourceId: resourceData.id,
                    resourceTitle: resourceData.title,
                    modifiedBy: currentUser.username,
                    fileSize: resourceData.fileSize
                });
            } else {
                resources.push(resourceData);
                
                // 감사 로그에 생성 기록
                logAuditEvent('resource_created', {
                    resourceId: resourceData.id,
                    resourceTitle: resourceData.title,
                    createdBy: currentUser.username,
                    fileSize: resourceData.fileSize
                });
            }

            localStorage.setItem('resources', JSON.stringify(resources));
            loadResourcesData();
            showToast('자료가 저장되었습니다.', 'success');
            logAudit(resource ? 'update' : 'create', 'resource', resourceData.id, `자료 ${resource ? '수정' : '생성'}`);
        });
    };

    // 자료 파일 검증
    function validateResourceFile(file) {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        const maxSize = 20 * 1024 * 1024; // 20MB
        
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
        
        if (file.size > maxSize) {
            return false;
        }
        
        return true;
    }

    // 파일명 형식 검증
    function validateFileName(fileName) {
        const fileNameRegex = /^[a-zA-Z0-9\-_]+\.(pdf|doc|docx|xls|xlsx)$/;
        return fileNameRegex.test(fileName);
    }

    // 미디어 편집
    window.editMedia = function(id = null) {
        const media = JSON.parse(localStorage.getItem('media') || '[]');
        const mediaItem = id ? media.find(m => m.id === id) : null;
        
        // 권한 체크
        if (mediaItem && !hasPermission('media', 'edit')) {
            showToast('미디어 수정 권한이 없습니다.', 'error');
            return;
        }
        if (!mediaItem && !hasPermission('media', 'create')) {
            showToast('미디어 생성 권한이 없습니다.', 'error');
            return;
        }
        
        showModal('미디어 ' + (mediaItem ? '수정' : '추가'), `
            <form id="mediaForm">
                <div class="form-group">
                    <label for="mediaType">미디어 유형</label>
                    <select id="mediaType" name="type" required ${!hasPermission('media', 'edit') ? 'disabled' : ''}>
                        <option value="image" ${mediaItem && mediaItem.type === 'image' ? 'selected' : ''}>이미지</option>
                        <option value="video" ${mediaItem && mediaItem.type === 'video' ? 'selected' : ''}>비디오</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="mediaTitle">제목</label>
                    <input type="text" id="mediaTitle" name="title" value="${mediaItem ? mediaItem.title : ''}" required ${!hasPermission('media', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="mediaFileName">파일명</label>
                    <input type="text" id="mediaFileName" name="fileName" value="${mediaItem ? mediaItem.fileName : ''}" required ${!hasPermission('media', 'edit') ? 'disabled' : ''}>
                    <small class="form-help">파일명 형식: 영문-숫자-하이픈 (예: product-image-001.jpg)</small>
                </div>
                <div class="form-group">
                    <label for="mediaFile">파일 업로드</label>
                    <input type="file" id="mediaFile" name="file" accept="image/*,video/*" ${!hasPermission('media', 'edit') ? 'disabled' : ''}>
                    <small class="form-help">이미지: 최대 5MB (JPG, PNG), 비디오: 최대 120MB (MP4, AVI)</small>
                </div>
                <div class="form-group">
                    <label for="mediaAltText">대체 텍스트</label>
                    <input type="text" id="mediaAltText" name="altText" value="${mediaItem ? mediaItem.altText : ''}" required ${!hasPermission('media', 'edit') ? 'disabled' : ''}>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('mediaForm'));
            const fileInput = document.getElementById('mediaFile');
            const mediaType = formData.get('type');
            
            // 파일 검증
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                if (!validateMediaFile(file, mediaType)) {
                    showToast('파일 형식이나 크기가 올바르지 않습니다.', 'error');
                    return;
                }
            }
            
            // 파일명 형식 검증
            const fileName = formData.get('fileName');
            if (!validateMediaFileName(fileName, mediaType)) {
                showToast('파일명 형식이 올바르지 않습니다.', 'error');
                return;
            }
            
            const mediaData = {
                id: mediaItem ? mediaItem.id : Date.now().toString(),
                type: mediaType,
                title: formData.get('title'),
                fileName: fileName,
                altText: formData.get('altText'),
                lastModified: new Date().toISOString(),
                modifiedBy: currentUser.username,
                fileSize: fileInput.files.length > 0 ? fileInput.files[0].size : (mediaItem ? mediaItem.fileSize : 0)
            };

            if (mediaItem) {
                const index = media.findIndex(m => m.id === id);
                media[index] = mediaData;
                
                // 감사 로그에 수정 기록
                logAuditEvent('media_modified', {
                    mediaId: mediaData.id,
                    mediaTitle: mediaData.title,
                    mediaType: mediaData.type,
                    modifiedBy: currentUser.username,
                    fileSize: mediaData.fileSize
                });
            } else {
                media.push(mediaData);
                
                // 감사 로그에 생성 기록
                logAuditEvent('media_created', {
                    mediaId: mediaData.id,
                    mediaTitle: mediaData.title,
                    mediaType: mediaData.type,
                    createdBy: currentUser.username,
                    fileSize: mediaData.fileSize
                });
            }

            localStorage.setItem('media', JSON.stringify(media));
            loadMediaData();
            showToast('미디어가 저장되었습니다.', 'success');
            logAudit(mediaItem ? 'update' : 'create', 'media', mediaData.id, `미디어 ${mediaItem ? '수정' : '생성'}`);
        });
    };

    // 미디어 파일 검증
    function validateMediaFile(file, mediaType) {
        const imageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const videoTypes = ['video/mp4', 'video/avi'];
        
        const maxImageSize = 5 * 1024 * 1024; // 5MB
        const maxVideoSize = 120 * 1024 * 1024; // 120MB
        
        if (mediaType === 'image') {
            if (!imageTypes.includes(file.type)) {
                return false;
            }
            if (file.size > maxImageSize) {
                return false;
            }
        } else if (mediaType === 'video') {
            if (!videoTypes.includes(file.type)) {
                return false;
            }
            if (file.size > maxVideoSize) {
                return false;
            }
        }
        
        return true;
    }

    // 미디어 파일명 형식 검증
    function validateMediaFileName(fileName, mediaType) {
        const imageRegex = /^[a-zA-Z0-9\-_]+\.(jpg|jpeg|png)$/;
        const videoRegex = /^[a-zA-Z0-9\-_]+\.(mp4|avi)$/;
        
        if (mediaType === 'image') {
            return imageRegex.test(fileName);
        } else if (mediaType === 'video') {
            return videoRegex.test(fileName);
        }
        
        return false;
    }

    // FAQ 편집
    window.editFAQ = function(id = null) {
        const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
        const faq = id ? faqs.find(f => f.id === id) : null;
        
        showModal('FAQ ' + (faq ? '수정' : '추가'), `
            <form id="faqForm">
                <div class="form-group">
                    <label for="faqQuestion">질문</label>
                    <input type="text" id="faqQuestion" name="question" value="${faq ? faq.question : ''}" required>
                </div>
                <div class="form-group">
                    <label for="faqAnswer">답변</label>
                    <textarea id="faqAnswer" name="answer" rows="4" required>${faq ? faq.answer : ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="faqOrder">순서</label>
                    <input type="number" id="faqOrder" name="order" value="${faq ? (faq.order || 0) : faqs.length}" min="0">
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="faqVisible" name="visible" ${faq && faq.visible ? 'checked' : ''}>
                        공개
                    </label>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('faqForm'));
            const faqData = {
                id: faq ? faq.id : Date.now().toString(),
                question: formData.get('question'),
                answer: formData.get('answer'),
                order: parseInt(formData.get('order')) || 0,
                visible: formData.get('visible') === 'on'
            };

            if (faq) {
                const index = faqs.findIndex(f => f.id === id);
                faqs[index] = faqData;
            } else {
                faqs.push(faqData);
            }

            // 순서대로 정렬
            faqs.sort((a, b) => (a.order || 0) - (b.order || 0));

            localStorage.setItem('faqs', JSON.stringify(faqs));
            loadFAQData();
            showToast('FAQ가 저장되었습니다.', 'success');
            logAudit(faq ? 'update' : 'create', 'faq', faqData.id, `FAQ ${faq ? '수정' : '생성'}`);
        });
    };

    // FAQ 순서 조정
    window.moveFAQ = function(id, direction) {
        if (!hasPermission('faq', 'reorder')) {
            showToast('순서 조정 권한이 없습니다.', 'error');
            return;
        }

        const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
        const currentIndex = faqs.findIndex(f => f.id === id);
        
        if (currentIndex === -1) {
            showToast('FAQ를 찾을 수 없습니다.', 'error');
            return;
        }

        const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        
        if (newIndex < 0 || newIndex >= faqs.length) {
            showToast('더 이상 이동할 수 없습니다.', 'error');
            return;
        }

        // 순서 교환
        const temp = faqs[currentIndex].order || currentIndex;
        faqs[currentIndex].order = faqs[newIndex].order || newIndex;
        faqs[newIndex].order = temp;

        // 순서대로 정렬
        faqs.sort((a, b) => (a.order || 0) - (b.order || 0));

        localStorage.setItem('faqs', JSON.stringify(faqs));
        loadFAQData();
        showToast('FAQ 순서가 변경되었습니다.', 'success');
        logAudit('reorder', 'faq', id, `FAQ 순서 ${direction === 'up' ? '위로' : '아래로'} 이동`);
    };

    // 사용자 편집
    window.editUser = function(id = null) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = id ? users.find(u => u.id === id) : null;
        
        // 권한 체크
        if (user && !hasPermission('users', 'edit')) {
            showToast('사용자 수정 권한이 없습니다.', 'error');
            return;
        }
        if (!user && !hasPermission('users', 'create')) {
            showToast('사용자 생성 권한이 없습니다.', 'error');
            return;
        }
        
        showModal('사용자 ' + (user ? '수정' : '추가'), `
            <form id="userForm">
                <div class="form-group">
                    <label for="userName">이름</label>
                    <input type="text" id="userName" name="name" value="${user ? user.name : ''}" required ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="userEmail">이메일</label>
                    <input type="email" id="userEmail" name="email" value="${user ? user.email : ''}" required ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="userRole">역할</label>
                    <select id="userRole" name="role" required ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                        <option value="admin" ${user && user.role === 'admin' ? 'selected' : ''}>관리자</option>
                        <option value="editor" ${user && user.role === 'editor' ? 'selected' : ''}>편집자</option>
                        <option value="viewer" ${user && user.role === 'viewer' ? 'selected' : ''}>조회자</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="userDepartment">부서</label>
                    <input type="text" id="userDepartment" name="department" value="${user ? user.department || '' : ''}" ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label for="userPhone">전화번호</label>
                    <input type="tel" id="userPhone" name="phone" value="${user ? user.phone || '' : ''}" ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="userActive" name="active" ${user && user.active !== false ? 'checked' : ''} ${!hasPermission('users', 'edit') ? 'disabled' : ''}>
                        활성
                    </label>
                </div>
                ${user ? `
                <div class="form-group">
                    <label>권한 정보</label>
                    <div class="permissions-display">
                        ${Object.entries(permissions[user.role] || {}).map(([section, actions]) => 
                            `<div><strong>${getSectionText(section)}:</strong> ${actions.join(', ')}</div>`
                        ).join('')}
                    </div>
                </div>
                ` : ''}
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('userForm'));
            const userData = {
                id: user ? user.id : Date.now().toString(),
                name: formData.get('name'),
                email: formData.get('email'),
                role: formData.get('role'),
                active: formData.get('active') === 'on',
                department: formData.get('department') || '',
                phone: formData.get('phone') || '',
                permissions: permissions[formData.get('role')] || [],
                createdAt: user ? user.createdAt : new Date().toISOString().split('T')[0],
                lastLogin: user ? user.lastLogin : null
            };

            if (user) {
                const index = users.findIndex(u => u.id === id);
                const oldRole = users[index].role;
                users[index] = userData;
                
                // 역할이 변경된 경우 감사 로그에 기록
                if (oldRole !== userData.role) {
                    logAuditEvent('user_role_changed', {
                        userId: userData.id,
                        oldRole: oldRole,
                        newRole: userData.role,
                        changedBy: currentUser.username
                    });
                }
            } else {
                users.push(userData);
                
                // 새 사용자 생성 감사 로그
                logAuditEvent('user_created', {
                    userId: userData.id,
                    username: userData.name,
                    role: userData.role,
                    createdBy: currentUser.username
                });
            }

            localStorage.setItem('users', JSON.stringify(users));
            loadUsersData();
            showToast('사용자가 저장되었습니다.', 'success');
            logAudit(user ? 'update' : 'create', 'user', userData.id, `사용자 ${user ? '수정' : '생성'}`);
        });
    };

    // 티켓 편집
    window.editTicket = function(id = null) {
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const ticket = id ? tickets.find(t => t.id === id) : null;
        
        showModal('티켓 ' + (ticket ? '수정' : '추가'), `
            <form id="ticketForm">
                <div class="form-group">
                    <label for="ticketSubject">제목</label>
                    <input type="text" id="ticketSubject" name="subject" value="${ticket ? ticket.subject : ''}" required>
                </div>
                <div class="form-group">
                    <label for="ticketDescription">설명</label>
                    <textarea id="ticketDescription" name="description" rows="4" required>${ticket ? ticket.description : ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="ticketPriority">우선순위</label>
                    <select id="ticketPriority" name="priority" required>
                        <option value="low" ${ticket && ticket.priority === 'low' ? 'selected' : ''}>낮음</option>
                        <option value="med" ${ticket && ticket.priority === 'med' ? 'selected' : ''}>보통</option>
                        <option value="high" ${ticket && ticket.priority === 'high' ? 'selected' : ''}>높음</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ticketStatus">상태</label>
                    <select id="ticketStatus" name="status" required>
                        <option value="open" ${ticket && ticket.status === 'open' ? 'selected' : ''}>열림</option>
                        <option value="in_progress" ${ticket && ticket.status === 'in_progress' ? 'selected' : ''}>진행중</option>
                        <option value="resolved" ${ticket && ticket.status === 'resolved' ? 'selected' : ''}>해결됨</option>
                    </select>
                </div>
            </form>
        `, () => {
            const formData = new FormData(document.getElementById('ticketForm'));
            const ticketData = {
                id: ticket ? ticket.id : Date.now().toString(),
                subject: formData.get('subject'),
                description: formData.get('description'),
                priority: formData.get('priority'),
                status: formData.get('status'),
                createdAt: ticket ? ticket.createdAt : new Date().toISOString()
            };

            if (ticket) {
                const index = tickets.findIndex(t => t.id === id);
                tickets[index] = ticketData;
            } else {
                tickets.push(ticketData);
            }

            localStorage.setItem('tickets', JSON.stringify(tickets));
            loadTicketsData();
            showToast('티켓이 저장되었습니다.', 'success');
            logAudit(ticket ? 'update' : 'create', 'ticket', ticketData.id, `티켓 ${ticket ? '수정' : '생성'}`);
        });
    };

    // 티켓 상세보기
    window.viewTicket = function(id) {
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const ticket = tickets.find(t => t.id === id);
        
        if (!ticket) {
            showToast('티켓을 찾을 수 없습니다.', 'error');
            return;
        }

        const timelineHtml = ticket.timeline ? ticket.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-time">${new Date(item.timestamp).toLocaleString()}</div>
                <div class="timeline-content">
                    <strong>${item.actor}</strong>: ${item.description}
                </div>
            </div>
        `).join('') : '<div>타임라인이 없습니다.</div>';

        const attachmentsHtml = ticket.attachments && ticket.attachments.length > 0 ? 
            ticket.attachments.map(file => `
                <div class="attachment-item">
                    <span>${file.name}</span>
                    <button class="btn btn-sm btn-secondary" onclick="downloadAttachment('${file.id}')">다운로드</button>
                </div>
            `).join('') : '<div>첨부파일이 없습니다.</div>';

        showModal('티켓 상세정보', `
            <div>
                <div class="form-group">
                    <label>제목</label>
                    <div>${ticket.title || ticket.subject}</div>
                </div>
                <div class="form-group">
                    <label>설명</label>
                    <div>${ticket.description}</div>
                </div>
                <div class="form-group">
                    <label>우선순위</label>
                    <select id="ticketPriority">
                        <option value="low" ${ticket.priority === 'low' ? 'selected' : ''}>낮음</option>
                        <option value="medium" ${ticket.priority === 'medium' ? 'selected' : ''}>보통</option>
                        <option value="high" ${ticket.priority === 'high' ? 'selected' : ''}>높음</option>
                        <option value="urgent" ${ticket.priority === 'urgent' ? 'selected' : ''}>긴급</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>상태</label>
                    <select id="ticketStatus">
                        <option value="open" ${ticket.status === 'open' ? 'selected' : ''}>열림</option>
                        <option value="in_progress" ${ticket.status === 'in_progress' ? 'selected' : ''}>진행중</option>
                        <option value="resolved" ${ticket.status === 'resolved' ? 'selected' : ''}>해결됨</option>
                        <option value="closed" ${ticket.status === 'closed' ? 'selected' : ''}>닫힘</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>담당자</label>
                    <select id="ticketAssignedTo">
                        <option value="">담당자 미배정</option>
                        <option value="admin" ${ticket.assignedTo === 'admin' ? 'selected' : ''}>관리자</option>
                        <option value="editor1" ${ticket.assignedTo === 'editor1' ? 'selected' : ''}>편집자1</option>
                        <option value="editor2" ${ticket.assignedTo === 'editor2' ? 'selected' : ''}>편집자2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>타임라인</label>
                    <div class="timeline-container">
                        ${timelineHtml}
                    </div>
                    <div style="margin-top: 1rem;">
                        <textarea id="ticketComment" rows="2" placeholder="댓글을 입력하세요"></textarea>
                        <button type="button" class="btn btn-sm btn-primary" onclick="addTicketComment('${id}')">댓글 추가</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>첨부파일</label>
                    <div class="attachments-container">
                        ${attachmentsHtml}
                    </div>
                    <div style="margin-top: 1rem;">
                        <input type="file" id="ticketAttachment" multiple>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="addTicketAttachment('${id}')">파일 첨부</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>생성일</label>
                    <div>${new Date(ticket.createdAt).toLocaleString()}</div>
                </div>
                <div class="form-group">
                    <label>수정일</label>
                    <div>${new Date(ticket.updatedAt).toLocaleString()}</div>
                </div>
            </div>
        `, () => {
            const newPriority = document.getElementById('ticketPriority').value;
            const newStatus = document.getElementById('ticketStatus').value;
            const newAssignedTo = document.getElementById('ticketAssignedTo').value;
            
            ticket.priority = newPriority;
            ticket.status = newStatus;
            ticket.assignedTo = newAssignedTo;
            ticket.updatedAt = new Date().toISOString();
            
            const index = tickets.findIndex(t => t.id === id);
            tickets[index] = ticket;
            localStorage.setItem('tickets', JSON.stringify(tickets));
            
            loadTicketsData();
            showToast('티켓 정보가 업데이트되었습니다.', 'success');
            logAudit('edit', 'tickets', `티켓 ${ticket.title} 정보 수정`);
        });
    };

    // 티켓 댓글 추가
    window.addTicketComment = function(ticketId) {
        const comment = document.getElementById('ticketComment').value.trim();
        if (!comment) {
            showToast('댓글을 입력해주세요.', 'error');
            return;
        }

        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const ticket = tickets.find(t => t.id === ticketId);
        
        if (!ticket) {
            showToast('티켓을 찾을 수 없습니다.', 'error');
            return;
        }

        if (!ticket.timeline) {
            ticket.timeline = [];
        }

        ticket.timeline.push({
            id: Date.now().toString(),
            action: 'comment',
            description: comment,
            actor: currentUser ? currentUser.username : 'admin',
            timestamp: new Date().toISOString()
        });

        ticket.updatedAt = new Date().toISOString();
        
        const index = tickets.findIndex(t => t.id === ticketId);
        tickets[index] = ticket;
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
        showToast('댓글이 추가되었습니다.', 'success');
        logAudit('comment', 'tickets', `티켓 ${ticket.title}에 댓글 추가`);
        
        // 모달 다시 로드
        viewTicket(ticketId);
    };

    // 티켓 첨부파일 추가
    window.addTicketAttachment = function(ticketId) {
        const fileInput = document.getElementById('ticketAttachment');
        const files = fileInput.files;
        
        if (files.length === 0) {
            showToast('파일을 선택해주세요.', 'error');
            return;
        }

        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const ticket = tickets.find(t => t.id === ticketId);
        
        if (!ticket) {
            showToast('티켓을 찾을 수 없습니다.', 'error');
            return;
        }

        if (!ticket.attachments) {
            ticket.attachments = [];
        }

        Array.from(files).forEach(file => {
            ticket.attachments.push({
                id: Date.now().toString() + Math.random(),
                name: file.name,
                size: file.size,
                type: file.type,
                uploadedAt: new Date().toISOString()
            });
        });

        ticket.updatedAt = new Date().toISOString();
        
        const index = tickets.findIndex(t => t.id === ticketId);
        tickets[index] = ticket;
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
        showToast('첨부파일이 추가되었습니다.', 'success');
        logAudit('attachment', 'tickets', `티켓 ${ticket.title}에 첨부파일 추가`);
        
        // 모달 다시 로드
        viewTicket(ticketId);
    };

    // 첨부파일 다운로드
    window.downloadAttachment = function(attachmentId) {
        showToast('데모 환경에서는 실제 다운로드가 불가능합니다.', 'info');
    };

    // 페이징 함수들
    window.previousPage = function(section) {
        if (paginationState[section].currentPage > 1) {
            paginationState[section].currentPage--;
            updatePagination(section);
            loadSectionData(section);
        }
    };

    window.nextPage = function(section) {
        if (paginationState[section].currentPage < paginationState[section].totalPages) {
            paginationState[section].currentPage++;
            updatePagination(section);
            loadSectionData(section);
        }
    };

    function updatePagination(section) {
        const pageInfo = document.getElementById(section + 'PageInfo');
        if (pageInfo) {
            pageInfo.textContent = `${paginationState[section].currentPage} / ${paginationState[section].totalPages}`;
        }
    }

    function loadSectionData(section) {
        switch(section) {
            case 'leads':
                loadLeadsData();
                break;
            case 'products':
                loadProductsData();
                break;
            case 'solutions':
                loadSolutionsData();
                break;
            case 'cases':
                loadCasesData();
                break;
            case 'resources':
                loadResourcesData();
                break;
            case 'media':
                loadMediaData();
                break;
            case 'faq':
                loadFAQData();
                break;
            case 'users':
                loadUsersData();
                break;
            case 'tickets':
                loadTicketsData();
                break;
            case 'audit':
                loadAuditData();
                break;
            case 'backup':
                updateBackupInfo();
                break;
            case 'system':
                updateSystemStats();
                updateSystemLogs();
                break;
        }
    }

    function applyPagination(data, section) {
        const startIndex = (paginationState[section].currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        paginationState[section].totalPages = Math.ceil(data.length / pageSize);
        
        if (paginationState[section].currentPage > paginationState[section].totalPages) {
            paginationState[section].currentPage = Math.max(1, paginationState[section].totalPages);
        }
        
        updatePagination(section);
        return data.slice(startIndex, endIndex);
    }

    // ===== 새로운 고급 기능들 =====

    // 백업/복원 기능
    window.exportData = function() {
        try {
            const allData = {};
            const keys = ['leads', 'tickets', 'products', 'solutions', 'cases', 'resources', 'media', 'faq', 'users', 'audit', 'settings', 'hero'];
            
            keys.forEach(key => {
                const data = localStorage.getItem(key);
                if (data) {
                    allData[key] = JSON.parse(data);
                }
            });

            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                data: allData
            };

            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `j-one-robotics-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // 백업 히스토리에 추가
            const backupHistory = JSON.parse(localStorage.getItem('backupHistory') || '[]');
            backupHistory.unshift({
                id: Date.now(),
                name: `백업_${new Date().toLocaleString()}`,
                size: blob.size,
                date: new Date().toISOString()
            });
            localStorage.setItem('backupHistory', JSON.stringify(backupHistory));

            showToast('데이터가 성공적으로 내보내졌습니다.', 'success');
            logAudit('export', 'backup', '전체 데이터 내보내기');
            updateBackupInfo();
        } catch (error) {
            showToast('데이터 내보내기 중 오류가 발생했습니다.', 'error');
            logSystemError('백업 내보내기 실패', error);
        }
    };

    window.importData = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const importData = JSON.parse(e.target.result);
                        
                        if (importData.version && importData.data) {
                            // 데이터 검증
                            const keys = Object.keys(importData.data);
                            let totalRecords = 0;
                            
                            keys.forEach(key => {
                                if (Array.isArray(importData.data[key])) {
                                    totalRecords += importData.data[key].length;
                                }
                            });

                            if (confirm(`총 ${totalRecords}개의 레코드를 가져오시겠습니까? 기존 데이터가 덮어써질 수 있습니다.`)) {
                                // 데이터 가져오기
                                keys.forEach(key => {
                                    localStorage.setItem(key, JSON.stringify(importData.data[key]));
                                });

                                showToast('데이터가 성공적으로 가져와졌습니다.', 'success');
                                logAudit('import', 'backup', `데이터 가져오기: ${totalRecords}개 레코드`);
                                
                                // 페이지 새로고침
                                setTimeout(() => {
                                    location.reload();
                                }, 1000);
                            }
                        } else {
                            showToast('잘못된 백업 파일 형식입니다.', 'error');
                        }
                    } catch (error) {
                        showToast('파일 읽기 중 오류가 발생했습니다.', 'error');
                        logSystemError('백업 가져오기 실패', error);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    };

    window.clearAllData = function() {
        if (confirm('정말로 모든 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            try {
                const keys = ['leads', 'tickets', 'products', 'solutions', 'cases', 'resources', 'media', 'faq', 'users', 'audit'];
                keys.forEach(key => {
                    localStorage.removeItem(key);
                });
                
                showToast('모든 데이터가 삭제되었습니다.', 'success');
                logAudit('delete', 'backup', '전체 데이터 삭제');
                
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch (error) {
                showToast('데이터 삭제 중 오류가 발생했습니다.', 'error');
                logSystemError('전체 데이터 삭제 실패', error);
            }
        }
    };

    function updateBackupInfo() {
        try {
            const keys = ['leads', 'tickets', 'products', 'solutions', 'cases', 'resources', 'media', 'faq', 'users', 'audit'];
            let totalRecords = 0;
            let totalSize = 0;

            keys.forEach(key => {
                const data = localStorage.getItem(key);
                if (data) {
                    const parsed = JSON.parse(data);
                    if (Array.isArray(parsed)) {
                        totalRecords += parsed.length;
                    }
                    totalSize += new Blob([data]).size;
                }
            });

            const backupHistory = JSON.parse(localStorage.getItem('backupHistory') || '[]');
            const lastBackup = backupHistory.length > 0 ? new Date(backupHistory[0].date).toLocaleString() : '없음';

            document.getElementById('lastBackup').textContent = lastBackup;
            document.getElementById('dataSize').textContent = `${(totalSize / 1024).toFixed(1)} KB`;
            document.getElementById('totalRecords').textContent = totalRecords;

            // 백업 히스토리 표시
            const backupHistoryContainer = document.getElementById('backupHistory');
            if (backupHistoryContainer) {
                backupHistoryContainer.innerHTML = backupHistory.map(backup => `
                    <div class="backup-item">
                        <div class="backup-item-info">
                            <div class="backup-item-name">${backup.name}</div>
                            <div class="backup-item-meta">${new Date(backup.date).toLocaleString()} | ${(backup.size / 1024).toFixed(1)} KB</div>
                        </div>
                        <div class="backup-item-actions">
                            <button class="btn btn-secondary" onclick="downloadBackup('${backup.id}')">다운로드</button>
                        </div>
                    </div>
                `).join('');
            }
        } catch (error) {
            logSystemError('백업 정보 업데이트 실패', error);
        }
    }

    // 시스템 모니터링 기능
    function updateSystemStats() {
        try {
            // 세션 정보
            const sessions = JSON.parse(localStorage.getItem('sessions') || '[]');
            const activeSessions = sessions.filter(session => {
                const lastActivity = new Date(session.lastActivity);
                const now = new Date();
                return (now - lastActivity) < 30 * 60 * 1000; // 30분 이내
            }).length;
            document.getElementById('activeSessions').textContent = activeSessions;

            // 메모리 사용량
            let totalSize = 0;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                totalSize += new Blob([value]).size;
            }
            document.getElementById('memoryUsage').textContent = `${(totalSize / 1024 / 1024).toFixed(2)} MB`;

            // 오류 발생 수
            const systemLogs = JSON.parse(localStorage.getItem('systemLogs') || '[]');
            const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
            const errorCount = systemLogs.filter(log => 
                log.level === 'error' && new Date(log.timestamp) > last24Hours
            ).length;
            document.getElementById('errorCount').textContent = errorCount;

            // 시스템 상태
            const systemStatus = errorCount > 10 ? '주의' : '정상';
            const statusElement = document.getElementById('systemStatus');
            statusElement.textContent = systemStatus;
            statusElement.className = errorCount > 10 ? 'stat-value warning' : 'stat-value';

        } catch (error) {
            logSystemError('시스템 통계 업데이트 실패', error);
        }
    }

    function updateSystemLogs() {
        try {
            const systemLogs = JSON.parse(localStorage.getItem('systemLogs') || '[]');
            const logLevel = document.getElementById('logLevel').value;
            
            let filteredLogs = systemLogs;
            if (logLevel !== 'all') {
                filteredLogs = systemLogs.filter(log => log.level === logLevel);
            }

            const logsContainer = document.getElementById('systemLogs');
            if (logsContainer) {
                logsContainer.innerHTML = filteredLogs.slice(-50).reverse().map(log => `
                    <div class="log-entry ${log.level}">
                        <span class="log-timestamp">${new Date(log.timestamp).toLocaleString()}</span>
                        <span class="log-message">[${log.level.toUpperCase()}] ${log.message}</span>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('시스템 로그 업데이트 실패:', error);
        }
    }

    window.clearLogs = function() {
        if (confirm('모든 시스템 로그를 삭제하시겠습니까?')) {
            localStorage.removeItem('systemLogs');
            updateSystemLogs();
            showToast('시스템 로그가 삭제되었습니다.', 'success');
        }
    };

    // 시스템 로그 함수들
    function logSystemInfo(message) {
        addSystemLog('info', message);
    }

    function logSystemWarning(message) {
        addSystemLog('warning', message);
    }

    function logSystemError(message, error) {
        addSystemLog('error', `${message}: ${error.message || error}`);
    }

    function addSystemLog(level, message) {
        try {
            const systemLogs = JSON.parse(localStorage.getItem('systemLogs') || '[]');
            systemLogs.push({
                timestamp: new Date().toISOString(),
                level: level,
                message: message
            });

            // 최대 1000개 로그만 유지
            if (systemLogs.length > 1000) {
                systemLogs.splice(0, systemLogs.length - 1000);
            }

            localStorage.setItem('systemLogs', JSON.stringify(systemLogs));
        } catch (error) {
            console.error('시스템 로그 추가 실패:', error);
        }
    }

    // 전역 오류 처리
    window.addEventListener('error', function(event) {
        logSystemError('JavaScript 오류', event.error);
    });

    window.addEventListener('unhandledrejection', function(event) {
        logSystemError('Promise 오류', event.reason);
    });

    // 세션 관리
    function updateSession() {
        if (currentUser) {
            const sessions = JSON.parse(localStorage.getItem('sessions') || '[]');
            const existingSession = sessions.find(s => s.userId === currentUser.id);
            
            if (existingSession) {
                existingSession.lastActivity = new Date().toISOString();
            } else {
                sessions.push({
                    id: Date.now().toString(),
                    userId: currentUser.id,
                    username: currentUser.username,
                    role: currentUser.role,
                    loginTime: new Date().toISOString(),
                    lastActivity: new Date().toISOString()
                });
            }

            localStorage.setItem('sessions', JSON.stringify(sessions));
        }
    }

    // 주기적 업데이트
    setInterval(() => {
        if (currentUser) {
            updateSession();
            updateSystemStats();
            if (currentSection === 'system') {
                updateSystemLogs();
            }
        }
    }, 30000); // 30초마다

    // 초기화 시 백업 정보 업데이트
    if (currentUser) {
        updateBackupInfo();
        updateSystemStats();
        logSystemInfo('관리자 콘솔 시작');
    }

    // 페이지 로드 시 초기화
    document.addEventListener('DOMContentLoaded', function() {
        // 시스템 로그 초기화
        if (!localStorage.getItem('systemLogs')) {
            logSystemInfo('시스템 초기화 완료');
        }
        
        // 백업 히스토리 초기화
        if (!localStorage.getItem('backupHistory')) {
            localStorage.setItem('backupHistory', JSON.stringify([]));
        }
        
        // 세션 초기화
        if (!localStorage.getItem('sessions')) {
            localStorage.setItem('sessions', JSON.stringify([]));
        }
    });

})();

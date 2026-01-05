// 게시물 관리자 - 홍보센터 게시물들을 관리
class PostManager {
    constructor() {
        this.storageKey = 'jwonPosts';
        this.loadPosts();
    }

    // 게시물 로드
    loadPosts() {
        const savedPosts = localStorage.getItem(this.storageKey);
        if (savedPosts) {
            this.posts = JSON.parse(savedPosts);
        } else {
            this.posts = this.getDefaultPosts();
            this.savePosts();
        }
    }

    // 기본 게시물 데이터
    getDefaultPosts() {
        return {
            videos: [
                {
                    id: 'video_1',
                    title: '공냉 레이저 용접기 방문 시연 (필터 제조 회사)',
                    category: '용접기',
                    date: '2024.12.15',
                    description: '공냉 레이저 용접기의 실제 현장 시연 영상입니다. 고객사 현장에서 직접 진행된 시연으로 실제 작업 환경에서의 성능을 확인할 수 있습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WaWRlbzwvdGV4dD4KPC9zdmc+',
                    tags: ['용접기', '시연', '필터'],
                    featured: true,
                    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                },
                {
                    id: 'video_2',
                    title: '레이저 용접 자동화 시스템',
                    category: '로봇·자동화',
                    date: '2024.12.10',
                    description: 'AI 기반 레이저 용접 자동화 시스템 소개. 최신 인공지능 기술을 활용한 스마트 용접 솔루션을 확인하세요.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb2JvdDwvdGV4dD4KPC9zdmc+',
                    tags: ['AI', '자동화', '스마트'],
                    featured: false,
                    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                },
                {
                    id: 'video_3',
                    title: '2025 인천국제용접 및 판금·레이저 설비 산업전',
                    category: '기타',
                    date: '2024.12.05',
                    description: '2025년 인천에서 개최되는 국제용접 산업전 참가 소식과 전시 제품들을 소개합니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTA5Qjk4MSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RXhpYjwvdGV4dD4KPC9zdmc+',
                    tags: ['전시회', '인천', '산업전'],
                    featured: false,
                    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                },
                {
                    id: 'video_4',
                    title: '티그 용접 로봇 시연',
                    category: '용접기',
                    date: '2024.11.28',
                    description: '고정밀 티그 용접을 위한 로봇 시스템 시연 영상입니다. 극세한 용접 작업이 가능합니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRUY0NDQ0Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UaWdodDwvdGV4dD4KPC9zdmc+',
                    tags: ['티그용접', '고정밀', '로봇'],
                    featured: false,
                    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }
            ],
            solutions: [
                {
                    id: 'solution_1',
                    title: '자동차 용접 솔루션',
                    category: '자동차',
                    date: '2024.12.01',
                    description: '고정밀 자동차 부품 용접을 위한 전문 솔루션으로 생산성과 품질을 동시에 향상시킵니다. 다양한 자동차 부품의 용접 공정을 자동화합니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTA5Qjk4MSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2FyPC90ZXh0Pgo8L3N2Zz4=',
                    features: ['고정밀', '자동화', '품질보증'],
                    featured: true
                },
                {
                    id: 'solution_2',
                    title: '조선업계 용접 솔루션',
                    category: '조선',
                    date: '2024.11.25',
                    description: '대형 선박 건조를 위한 대용량 용접 솔루션입니다. 해양 환경에 강한 내구성을 제공합니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TaGlwPC90ZXh0Pgo8L3N2Zz4=',
                    features: ['대용량', '내구성', '해양환경'],
                    featured: false
                },
                {
                    id: 'solution_3',
                    title: '건설업계 용접 솔루션',
                    category: '건설',
                    date: '2024.11.20',
                    description: '건설 현장의 다양한 금속 구조물 용접을 위한 솔루션입니다. 현장 환경에 최적화되어 있습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CdWlsZDwvdGV4dD4KPC9zdmc+',
                    features: ['현장최적화', '이동성', '견고함'],
                    featured: false
                }
            ],
            cases: [
                {
                    id: 'case_1',
                    title: '글로벌 자동차 제조사 A사',
                    category: '자동차',
                    date: '2024.11.28',
                    description: 'JW-3000 시리즈를 도입하여 생산성 40% 향상과 품질 불량률 90% 감소를 달성했습니다. 연간 50억원의 비용 절감 효과를 얻었습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRUY0NDQ0Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TdWNjZXNzPC90ZXh0Pgo8L3N2Zz4=',
                    stats: [
                        { label: '생산성 향상', value: '40%' },
                        { label: '불량률 감소', value: '90%' },
                        { label: '비용 절감', value: '50억원' }
                    ],
                    featured: true
                },
                {
                    id: 'case_2',
                    title: '국내 조선업체 B사',
                    category: '조선',
                    date: '2024.11.15',
                    description: '대형 선박 건조 프로젝트에서 JW-5000 시리즈를 활용하여 용접 품질을 크게 향상시켰습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTA5Qjk4MSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2hpcDwvdGV4dD4KPC9zdmc+',
                    stats: [
                        { label: '용접 품질 향상', value: '35%' },
                        { label: '작업 시간 단축', value: '25%' }
                    ],
                    featured: false
                },
                {
                    id: 'case_3',
                    title: '건설업체 C사',
                    category: '건설',
                    date: '2024.11.10',
                    description: '대형 건설 프로젝트에서 모바일 용접 솔루션을 도입하여 현장 효율성을 크게 높였습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CdWlsZDwvdGV4dD4KPC9zdmc+',
                    stats: [
                        { label: '현장 효율성', value: '30%' },
                        { label: '안전사고 감소', value: '50%' }
                    ],
                    featured: false
                }
            ],
            resources: [
                {
                    id: 'resource_1',
                    title: '제품 카탈로그 2024',
                    category: 'PDF',
                    date: '2024.12.01',
                    description: 'JW 시리즈 전체 제품의 상세한 사양과 특징을 확인하세요. 최신 기술과 성능 데이터가 포함되어 있습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNkI3MjhCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QREY8L3RleHQ+Cjwvc3ZnPg==',
                    fileSize: '2.5MB',
                    downloadCount: 156,
                    featured: true
                },
                {
                    id: 'resource_2',
                    title: '기술 사양서 - JW-3000',
                    category: 'PDF',
                    date: '2024.11.28',
                    description: 'JW-3000 시리즈의 상세한 기술 사양서입니다. 설치 및 운영 가이드가 포함되어 있습니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTA5Qjk4MSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3BlYzwvdGV4dD4KPC9zdmc+',
                    fileSize: '1.8MB',
                    downloadCount: 89,
                    featured: false
                },
                {
                    id: 'resource_3',
                    title: '용접 가이드라인',
                    category: 'PDF',
                    date: '2024.11.20',
                    description: '안전하고 효율적인 용접 작업을 위한 가이드라인입니다. 산업 안전 기준을 준수합니다.',
                    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HdWlkZTwvdGV4dD4KPC9zdmc+',
                    fileSize: '3.2MB',
                    downloadCount: 234,
                    featured: false
                }
            ]
        };
    }

    // 게시물 저장
    savePosts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
    }

    // 특정 카테고리의 게시물 가져오기
    getPosts(category) {
        return this.posts[category] || [];
    }

    // 게시물 추가
    addPost(category, post) {
        if (!this.posts[category]) {
            this.posts[category] = [];
        }
        
        post.id = category + '_' + Date.now();
        post.date = new Date().toLocaleDateString('ko-KR');
        this.posts[category].unshift(post);
        this.savePosts();
        console.log('게시물 추가 완료:', category, post);
    }

    // 게시물 수정
    updatePost(category, postId, updatedPost) {
        const posts = this.posts[category];
        if (posts) {
            const index = posts.findIndex(post => post.id === postId);
            if (index !== -1) {
                this.posts[category][index] = { ...posts[index], ...updatedPost };
                this.savePosts();
                console.log('게시물 업데이트 완료:', category, postId, updatedPost);
            } else {
                console.error('게시물을 찾을 수 없습니다:', postId);
            }
        } else {
            console.error('카테고리를 찾을 수 없습니다:', category);
        }
    }

    // 게시물 삭제
    deletePost(category, postId) {
        const posts = this.posts[category];
        if (posts) {
            this.posts[category] = posts.filter(post => post.id !== postId);
            this.savePosts();
        }
    }

    // 게시물 ID로 찾기
    findPostById(postId) {
        for (const category in this.posts) {
            const post = this.posts[category].find(p => p.id === postId);
            if (post) {
                return { category, post };
            }
        }
        return null;
    }

    // 카테고리별 통계
    getStats() {
        const stats = {};
        for (const category in this.posts) {
            stats[category] = this.posts[category].length;
        }
        return stats;
    }
}

// 전역 인스턴스 생성
window.postManager = new PostManager();

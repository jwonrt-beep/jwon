// 제품 관리자 - 제품소개 페이지의 제품들을 관리
class ProductManager {
    constructor() {
        this.storageKey = 'jwonProducts';
        this.loadProducts();
    }

    // 제품 로드
    loadProducts() {
        const savedProducts = localStorage.getItem(this.storageKey);
        if (savedProducts) {
            this.products = JSON.parse(savedProducts);
        } else {
            this.products = this.getDefaultProducts();
            this.saveProducts();
        }
    }

    // 기본 제품 데이터
    getDefaultProducts() {
        return [
            {
                id: 'product_1',
                name: 'JW-3000 시리즈',
                category: '레이저 용접기',
                date: '2024.12.01',
                description: '고정밀 레이저 용접을 위한 최신 시리즈입니다. AI 기반 자동 제어 시스템으로 정확하고 안정적인 용접이 가능합니다.',
                thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KVy0zMDAwPC90ZXh0Pgo8L3N2Zz4=',
                features: ['AI 자동제어', '고정밀', '안정성'],
                specifications: {
                    '용접 두께': '0.1mm - 10mm',
                    '정확도': '±0.05mm',
                    '전력': '3kW',
                    '작업 속도': '50mm/s'
                },
                price: '문의',
                featured: true
            },
            {
                id: 'product_2',
                name: 'JW-5000 시리즈',
                category: '대형 용접기',
                date: '2024.11.28',
                description: '대형 구조물 용접을 위한 고출력 시리즈입니다. 조선업계와 건설업계에 최적화된 솔루션을 제공합니다.',
                thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTA5Qjk4MSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SlctNTAwMDwvdGV4dD4KPC9zdmc+',
                features: ['고출력', '대형작업', '내구성'],
                specifications: {
                    '용접 두께': '1mm - 50mm',
                    '정확도': '±0.1mm',
                    '전력': '10kW',
                    '작업 속도': '30mm/s'
                },
                price: '문의',
                featured: false
            },
            {
                id: 'product_3',
                name: 'JW-1000 시리즈',
                category: '소형 용접기',
                date: '2024.11.20',
                description: '정밀 부품 용접을 위한 소형 시리즈입니다. 자동차 부품과 전자제품 제조에 최적화되어 있습니다.',
                thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KVy0xMDAwPC90ZXh0Pgo8L3N2Zz4=',
                features: ['정밀', '소형', '고속'],
                specifications: {
                    '용접 두께': '0.05mm - 2mm',
                    '정확도': '±0.02mm',
                    '전력': '1kW',
                    '작업 속도': '100mm/s'
                },
                price: '문의',
                featured: false
            },
            {
                id: 'product_4',
                name: 'JW-ROBOT 시리즈',
                category: '로봇 용접기',
                date: '2024.11.15',
                description: '6축 로봇 팔을 장착한 자동화 용접 시스템입니다. 복잡한 형상의 부품도 정확하게 용접할 수 있습니다.',
                thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRUY0NDQ0Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb2JvdDwvdGV4dD4KPC9zdmc+',
                features: ['6축 로봇', '자동화', '복잡형상'],
                specifications: {
                    '작업 반경': '1.5m',
                    '정확도': '±0.1mm',
                    '전력': '5kW',
                    '자유도': '6축'
                },
                price: '문의',
                featured: true
            },
            {
                id: 'product_5',
                name: 'JW-MOBILE 시리즈',
                category: '모바일 용접기',
                date: '2024.11.10',
                description: '현장 작업을 위한 이동형 용접 시스템입니다. 건설 현장과 유지보수 작업에 최적화되어 있습니다.',
                thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNkI3MjhCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb2JpbGU8L3RleHQ+Cjwvc3ZnPg==',
                features: ['이동형', '현장최적화', '견고함'],
                specifications: {
                    '용접 두께': '0.5mm - 20mm',
                    '정확도': '±0.2mm',
                    '전력': '2kW',
                    '배터리': '8시간'
                },
                price: '문의',
                featured: false
            }
        ];
    }

    // 제품 저장
    saveProducts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    }

    // 모든 제품 가져오기
    getProducts() {
        return this.products;
    }

    // 제품 추가
    addProduct(product) {
        product.id = 'product_' + Date.now();
        product.date = new Date().toLocaleDateString('ko-KR');
        this.products.unshift(product);
        this.saveProducts();
        console.log('제품 추가 완료:', product);
    }

    // 제품 수정
    updateProduct(productId, updatedProduct) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            this.saveProducts();
            console.log('제품 업데이트 완료:', productId, updatedProduct);
        } else {
            console.error('제품을 찾을 수 없습니다:', productId);
        }
    }

    // 제품 삭제
    deleteProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveProducts();
            console.log('제품 삭제 완료:', productId);
        } else {
            console.error('제품을 찾을 수 없습니다:', productId);
        }
    }

    // ID로 제품 찾기
    findProductById(productId) {
        return this.products.find(product => product.id === productId);
    }

    // 카테고리별 제품 가져오기
    getProductsByCategory(category) {
        if (category === 'all') {
            return this.products;
        }
        return this.products.filter(product => product.category === category);
    }
}

// 전역 인스턴스 생성
window.productManager = new ProductManager();

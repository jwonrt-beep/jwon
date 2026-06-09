// 제품군 관리자 – admin용 localStorage + 공개 카탈로그
class ProductManager {
    constructor() {
        this.storageKey = 'jwonProducts';
        this.versionKey = 'jwonProducts_version';
        this.dataVersion = 5;
        this.loadProducts();
    }

    loadProducts() {
        const savedVersion = localStorage.getItem(this.versionKey);
        if (savedVersion !== String(this.dataVersion)) {
            this.products = this.getDefaultProducts();
            this.saveProducts();
            return;
        }
        try {
            const saved = localStorage.getItem(this.storageKey);
            this.products = saved ? JSON.parse(saved) : this.getDefaultProducts();
            if (!Array.isArray(this.products) || this.products.length !== 7) {
                this.products = this.getDefaultProducts();
                this.saveProducts();
            }
        } catch (e) {
            this.products = this.getDefaultProducts();
            this.saveProducts();
        }
    }

    placeholderPath() {
        return '../assets/images/products/placeholder.svg';
    }

    getDefaultProducts() {
        if (typeof PRODUCT_CATALOG !== 'undefined') {
            return PRODUCT_CATALOG.map((p) => ({
                ...p,
                date: '2026.06.09',
                thumbnail: this.placeholderPath(),
                category: p.categories[0],
                featured: false
            }));
        }
        return [];
    }

    saveProducts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.products));
        localStorage.setItem(this.versionKey, String(this.dataVersion));
    }

    // 공개 제품군 페이지는 항상 정적 카탈로그 사용
    getProducts() {
        return this.getDefaultProducts().sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    getCatalogProducts() {
        return this.getProducts();
    }

    findProductBySlug(slug) {
        if (typeof getCatalogProductBySlug === 'function') {
            const fromCatalog = getCatalogProductBySlug(slug);
            if (fromCatalog) {
                return { ...fromCatalog, thumbnail: this.placeholderPath(), category: fromCatalog.categories[0] };
            }
        }
        return this.products.find((p) => p.slug === slug || p.id === slug) || null;
    }

    findProductById(id) {
        return this.findProductBySlug(id);
    }

    getProductsByCategory(filter) {
        if (filter === 'all') return this.getProducts();
        return this.getProducts().filter((p) => (p.filterTags || []).includes(filter));
    }

    getDetailUrl(product) {
        return `${product.slug}/index.html`;
    }

    getQuoteUrl(product) {
        return `../contact/index.html?type=quote&product=${encodeURIComponent(product.name)}`;
    }

    addProduct(product) {
        product.id = product.id || 'product_' + Date.now();
        product.slug = product.slug || product.id;
        this.products.unshift(product);
        this.saveProducts();
    }

    updateProduct(productId, updated) {
        const i = this.products.findIndex((p) => p.id === productId);
        if (i !== -1) {
            this.products[i] = { ...this.products[i], ...updated };
            this.saveProducts();
        }
    }

    deleteProduct(productId) {
        const i = this.products.findIndex((p) => p.id === productId);
        if (i !== -1) {
            this.products.splice(i, 1);
            this.saveProducts();
        }
    }
}

window.productManager = new ProductManager();

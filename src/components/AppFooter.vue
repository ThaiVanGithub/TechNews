<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>InformationTech News</h3>
                    <p>Cung cấp thông tin nhanh chóng, chính xác</p>
                </div>
                <div class="footer-social">
                    <i class="fa-brands fa-facebook"></i>

                </div>

                <div class="footer-col">
                    <h4>Danh mục</h4>
                    <ul>
                        <li v-for="category in categories" :key="category.id">
                            <router-link :to="`/danh-muc/${category.slug}`">
                                {{ category.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Liên hệ</h4>
                    <ul>
                        <li><a href="mailto:contact@baodientu.vn">contact@baodientu.vn</a></li>
                        <li><a href="tel:+84123456789">0336 483 290</a></li>
                    </ul>
                </div>
            </div>

            <div class="copyright">
                <p>© 2023 Báo Điện Tử. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            categories: [
                { id: 1, name: 'Thời sự', slug: 'thoi-su' },
                { id: 2, name: 'Kinh tế', slug: 'kinh-te' },
                { id: 3, name: 'Công nghệ', slug: 'cong-nghe' }
            ]
        }
    }
}
</script>

<style scoped>
.app-footer {
    background-color: #2d3748;
    color: #fff;
    padding: 2rem 0;
    margin-top: 3rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-col h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #4299e1;
}

.footer-col h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #a0aec0;
}

.footer-col ul {
    list-style: none;
    padding: 0;
}

.footer-col li {
    margin-bottom: 0.5rem;
}

.footer-col a {
    color: #e2e8f0;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-col a:hover {
    color: #4299e1;
}

.copyright {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #4a5568;
    color: #a0aec0;
    font-size: 0.875rem;
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
    }
}
</style>
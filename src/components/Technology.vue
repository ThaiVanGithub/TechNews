<template>
    <div id="app">
        <AppHeader />

        <main class="main-content">
            <!-- Thêm các section vào đây -->
            <section class="featured-section">
                <div class="container">
                    <h2>Tin Nổi Bật</h2>
                    <div class="featured-grid">
                        <NewsCard v-for="(post, index) in featuredPosts" :key="index" :post="post"
                            class="featured-post" />
                    </div>
                </div>
            </section>

            <section class="category-section">
                <div class="container">
                    <h2>Chuyên Mục</h2>
                    <div class="category-grid">
                        <router-link v-for="category in categories" :key="category.id"
                            :to="`/danh-muc/${category.slug}`" class="category-card">
                            {{ category.name }}
                        </router-link>
                    </div>
                </div>
            </section>

            <section class="latest-news">
                <div class="container">
                    <h2>Mới Nhất</h2>
                    <div class="news-grid">
                        <NewsCard v-for="(post, index) in latestPosts" :key="index" :post="post" />
                    </div>
                </div>
            </section>

            <router-view />
        </main>
        <!-- <Pagination /> -->
        <AppFooter />
    </div>
</template>

<script>

import NewsCard from '@/components/NewsCard.vue'
// import Pagination from '@/components/Pagination.vue';

export default {
    components: {

        NewsCard
    },
    data() {
        return {
            featuredPosts: [
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí',
                    excerpt: 'Xu hướng ứng dụng AI trong các tòa soạn hiện đại',
                    date: '2023-05-15',
                    category: 'Công nghệ',
                    image: 'https://cdn.ttgtmedia.com/rms/onlineimages/ai_a205627811.jpg'
                },

            ],
            latestPosts: [
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                },
                {
                    title: 'Công nghệ AI thay đổi ngành báo chí, xu hướng ứng dụng AI trong các tòa soạn hiện đại ',
                    image: 'https://biti.vn/wp-content/uploads/2022/03/tri-tue-nhan-tao-AI.jpg'
                }
            ],
            categories: [
                { id: 1, name: 'Thời sự', slug: 'thoi-su' },
                { id: 2, name: 'Kinh tế', slug: 'kinh-te' },
                { id: 3, name: 'Công nghệ', slug: 'cong-nghe' }
            ]
        }
    }
}
</script>

<style>
/* Giữ nguyên các style cũ và thêm mới */
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    padding: 2rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Section styling */
.featured-section {
    margin-bottom: 3rem;
}

.featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.category-card {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s;
    text-decoration: none;
    color: #2d3748;
}

.category-card:hover {
    transform: translateY(-5px);
    background: #e2e8f0;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

h2 {
    font-size: 1.8rem;
    color: #1a365d;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #cbd5e0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .featured-grid {
        grid-template-columns: 1fr;
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    h2 {
        font-size: 1.5rem;
    }
}
</style>

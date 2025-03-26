<template>
    <article class="featured-article" :class="article.isMain ? 'main-featured' : 'sub-featured'">
        <router-link :to="`/bai-viet/${article.id}`" class="featured-link">
            <div class="image-container">
                <img :src="article.image" :alt="article.title">
                <span class="category-badge">{{ getCategoryName(article.category) }}</span>
            </div>
            <div class="content">
                <h3>{{ article.title }}</h3>
                <p class="excerpt">{{ article.excerpt }}</p>
                <div class="meta">
                    <span class="date">{{ article.date }}</span>
                    <span class="views">{{ article.views }} lượt xem</span>
                    <span class="comments">{{ article.comments }} bình luận</span>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script>
export default {
    props: {
        article: Object
    },
    methods: {
        getCategoryName(categoryId) {
            const categories = {
                'ai': 'AI',
                'mobile': 'Di động',
                'laptop': 'Máy tính'
            }
            return categories[categoryId] || 'Công nghệ'
        }
    }
}
</script>

<style scoped>
.featured-article {
    border-radius: 10px;
    overflow: hidden;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.featured-article:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.main-featured {
    grid-column: span 2;
}

.featured-link {
    display: block;
    text-decoration: none;
    color: inherit;
}

.image-container {
    position: relative;
    padding-top: 56.25%;
    /* 16:9 aspect ratio */
    overflow: hidden;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.featured-article:hover .image-container img {
    transform: scale(1.05);
}

.category-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #2563eb;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
}

.content {
    padding: 20px;
}

h3 {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
    line-height: 1.4;
}

.excerpt {
    color: #64748b;
    margin-bottom: 15px;
    line-height: 1.6;
}

.meta {
    display: flex;
    gap: 15px;
    font-size: 0.85rem;
    color: #94a3b8;
}

.main-featured .content {
    padding: 30px;
}

.main-featured h3 {
    font-size: 1.6rem;
}

@media (max-width: 768px) {
    .main-featured {
        grid-column: span 1;
    }

    .content {
        padding: 15px;
    }
}
</style>
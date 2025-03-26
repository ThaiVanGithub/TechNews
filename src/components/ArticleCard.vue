<template>
    <article :class="['article-card', type]">
        <router-link :to="`/bai-viet/${article.id}`" class="card-link">
            <img :src="article.image" :alt="article.title" class="card-image">
            <div class="card-content">
                <span class="category-badge">{{ article.category || 'Nổi bật' }}</span>
                <h3>{{ article.title }}</h3>
                <p class="excerpt">{{ article.excerpt }}</p>
                <div class="meta">
                    <span class="date">{{ article.date }}</span>
                    <span class="views">{{ article.views || '1.2K' }} lượt xem</span>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script>
export default {
    props: {
        article: Object,
        type: {
            type: String,
            default: 'vertical' // 'horizontal'
        }
    }
}
</script>

<style scoped>
.article-card {
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
}

.article-card:hover {
    transform: translateY(-5px);
}

.card-link {
    display: block;
    text-decoration: none;
    color: inherit;
}

/* Style cho kiểu vertical */
.article-card.vertical .card-content {
    padding: 1rem;
}

/* Style cho kiểu horizontal */
.article-card.horizontal {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
}
</style>
<template>
    <article class="news-card">
        <img :src="post.image" :alt="post.title" class="news-card__image">
        <div class="news-card__content">
            <span class="news-card__category">{{ post.category }}</span>
            <h3 class="news-card__title">{{ post.title }}</h3>
            <p class="news-card__excerpt">{{ post.excerpt }}</p>
            <time class="news-card__date">{{ formatDate(post.date) }}</time>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleDateString('vi-VN')
        }
    }
}
</script>

<style>
.news-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.news-card:hover {
    transform: translateY(-5px);
}

.news-card__image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.news-card__content {
    padding: 16px;
}

.news-card__category {
    display: inline-block;
    background: #f0f0f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-bottom: 8px;
}

.news-card__title {
    font-size: 1.1rem;
    margin: 8px 0;
    line-height: 1.4;
}

.news-card__excerpt {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 8px;
}

.news-card__date {
    color: #888;
    font-size: 0.8rem;
}

.news-badge {
    background: #d70018;
    color: white;
    padding: 4px 8px;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 4px;
    font-size: 12px;
}
</style>

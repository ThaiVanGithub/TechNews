<template>
    <article class="tech-article-card">
        <router-link :to="`/bai-viet/${article.id}`" class="article-link">
            <div class="image-wrapper">
                <img :src="article.image" :alt="article.title">
                <span class="category-tag">{{ article.category }}</span>
            </div>
            <div class="content">
                <h3>{{ article.title }}</h3>
                <p class="excerpt">{{ article.excerpt }}</p>
                <div class="meta">
                    <span class="date">{{ article.date }}</span>
                    <div class="stats">
                        <span class="views">
                            <i class="icon-eye"></i> {{ article.views }}
                        </span>
                        <span class="comments">
                            <i class="icon-comment"></i> {{ article.comments }}
                        </span>
                    </div>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script>
export default {
    props: {
        article: Object
    }
}
</script>

<style scoped>
.tech-article-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.tech-article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.article-link {
    display: block;
    text-decoration: none;
    color: inherit;
}

.image-wrapper {
    position: relative;
    padding-top: 56.25%;
    /* 16:9 aspect ratio */
    overflow: hidden;
}

.image-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.tech-article-card:hover .image-wrapper img {
    transform: scale(1.05);
}

.category-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 500;
}

.content {
    padding: 15px;
}

h3 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    line-height: 1.4;
}

.excerpt {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.5;
    display: -webkit-box;
    /* -webkit-line-clamp: 3; */
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #94a3b8;
}

.stats {
    display: flex;
    gap: 10px;
}

.stats span {
    display: flex;
    align-items: center;
    gap: 3px;
}
</style>
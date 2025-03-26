<template>
    <div class="post-detail">
        <!-- Loading state -->
        <div v-if="loading" class="loading">
            <p>Loading post...</p>
            <!-- Có thể thêm spinner ở đây -->
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="error">
            <h2>Error loading post</h2>
            <p>{{ error }}</p>
            <button @click="fetchPost" class="retry-btn">Retry</button>
        </div>

        <!-- Post content -->
        <div v-else-if="post" class="post-content">
            <h1>{{ post.title }}</h1>

            <div class="meta">
                <span class="author">By {{ post.author }}</span>
                <span class="date">{{ formatDate(post.createdAt) }}</span>
            </div>

            <img v-if="post.image" :src="post.image" :alt="post.title" class="featured-image">

            <div class="body" v-html="post.content"></div>

            <div class="actions">
                <router-link to="/posts" class="back-link">← Back to Posts</router-link>
            </div>
        </div>

        <!-- Post not found -->
        <div v-else class="not-found">
            <h2>Post not found</h2>
            <p>The post you're looking for doesn't exist or may have been removed.</p>
            <router-link to="/posts" class="back-link">Back to Posts</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostDetail',
    data() {
        return {
            post: null,
            loading: false,
            error: null
        }
    },
    computed: {
        postId() {
            return this.$route.params.id
        }
    },
    methods: {
        async fetchPost() {
            this.loading = true
            this.error = null

            try {
                // Giả sử bạn có API endpoint hoặc Vuex action để lấy bài viết
                const response = await this.$http.get(`/posts/${this.postId}`)

                if (response.data) {
                    this.post = response.data
                } else {
                    this.post = null // Đánh dấu không tìm thấy bài viết
                }
            } catch (err) {
                console.error('Error fetching post:', err)
                this.error = err.message || 'Failed to load post'
            } finally {
                this.loading = false
            }
        },

        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(dateString).toLocaleDateString(undefined, options)
        }
    },
    watch: {
        // Theo dõi thay đổi route để load lại dữ liệu khi ID thay đổi
        postId() {
            this.fetchPost()
        }
    },
    created() {
        this.fetchPost()
    }
}
</script>

<style scoped>
.post-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.loading,
.error,
.not-found {
    text-align: center;
    padding: 2rem;
}

.post-content {
    line-height: 1.6;
}

.meta {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
}

.meta span {
    margin-right: 1rem;
}

.featured-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    margin: 1rem 0;
    border-radius: 4px;
}

.body {
    margin: 2rem 0;
}

.body>>>img {
    max-width: 100%;
    height: auto;
}

.actions {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
}

.back-link,
.retry-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.back-link:hover,
.retry-btn:hover {
    background-color: #e0e0e0;
}

.retry-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    cursor: pointer;
}

.retry-btn:hover {
    background-color: #cc0000;
}

@media (max-width: 768px) {
    .post-detail {
        padding: 1rem;
    }
}
</style>
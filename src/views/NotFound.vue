<template>
    <div class="not-found">
        <div class="container">
            <h1>404</h1>
            <h2>Không tìm thấy</h2>
            <p>Có vẻ như chưa có bài báo nào về chủ đề bạn tìm kiếm mất rồi! </p>
            <router-link to="/" class="home-link">Trở về</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',
    metaInfo() {
        return {
            title: '404 Page Not Found'
        }
    }
}
</script>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
    padding: 20px;
}

.container {
    max-width: 600px;
}

h1 {
    font-size: 120px;
    margin: 0;
    color: #dc3545;
    line-height: 1;
}

h2 {
    font-size: 32px;
    margin: 20px 0 10px;
    color: #343a40;
}

p {
    font-size: 18px;
    color: #6c757d;
    margin-bottom: 30px;
}

.home-link {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.home-link:hover {
    background-color: #0056b3;
}

@media (max-width: 576px) {
    h1 {
        font-size: 80px;
    }

    h2 {
        font-size: 24px;
        margin: 15px 0 8px;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
    }
}
</style>
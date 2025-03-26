<template>
  <main class="container">
    <h1 class="page-title">Tin mới nhất</h1>
    <div class="news-grid">
      <NewsCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </main>
  <div class="home">
    <BreakingNewsTicker :news="breakingNews" />
    <CategoryTabs :categories="categories" @change-category="handleCategoryChange" />

    <div class="news-grid">
      <NewsCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>

    <SocialShare :url="currentUrl" />
  </div>
  <!-- <div class="home">
    <section class="category-section">
      <h2>Tin Công Nghệ Mới Nhất</h2>
      <div class="article-grid">
        <ArticleCard v-for="article in techArticles" :key="article.id" :article="article" />
      </div>
      <router-link to="/danh-muc/cong-nghe" class="see-more">
        Xem thêm tin Công Nghệ →
      </router-link>
    </section>

    <section class="category-section">
      <h2>Diễn Biến Kinh Tế</h2>
      <ArticleCard v-for="article in economyArticles" :key="article.id" :article="article" type="horizontal" />
    </section>
  </div> -->
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'


export default {
  components: { NewsCard },
  data() {
    return {


      posts: [
        {
          id: 1,
          title: "Công nghệ AI thay đổi ngành báo chí",
          excerpt: "Xu hướng ứng dụng AI trong các tòa soạn hiện đại",
          category: "Công nghệ",
          date: "2023-05-15",
          image: "https://static.kinhtedothi.vn/w960/images/upload/2022/06/13/ngay-21-thang-6-la-ngay-nao.jpg"
        },
        {
          id: 2,
          title: "Đâu là hướng đi cho thực tập sinh không lương",
          excerpt: "Xu hướng thực tập khó khăn trắc trở",
          category: "Công nghệ",
          date: "2023-05-22",
          image: "https://online.dscons.vn/wp-content/uploads/2022/09/8-scaled.jpg"
        },
        {
          id: 3,
          title: "Sự bão hòa của nghành công nghệ thông tin",
          excerpt: "Các lập trình viên đang dần bị thay thế và đào thải",
          category: "Công nghệ",
          date: "2025-05-15",
          image: "https://fbu.edu.vn/wp-content/uploads/2023/01/hoc-nganh-cong-nghe-thong-tin-hinh2.jpg"
        },
        {
          id: 4,
          title: "Hiếu PC hiện tại ra sao ?",
          excerpt: "Lần tấn công để đời",
          category: "Công nghệ",
          date: "2013-05-15",
          image: "https://tq1.mediacdn.vn/thumb_w/660/203336854389633024/2023/6/1/hieu-pc-16855968476971108332537.jpg"
        },
        {
          id: 5,
          title: "Công nghệ AI mới của Trung Quốc vượt mặt ChatGPT",
          excerpt: "Xu hướng thực tập khó khăn trắc trở",
          category: "Công nghệ",
          date: "2025-03-22",
          image: "https://10web.io/wp-content/uploads/2024/07/DeepSeek_screenshot.png"
        },
        {
          id: 6,
          title: "Trung tâm chuyển đổi số Đồng Tháp là bước đầu của sự đổi mới",
          excerpt: "Các lập trình viên đang dần bị thay thế và đào thải",
          category: "Công nghệ",
          date: "2025-05-15",
          image: "https://dovetec.vn/wp-content/uploads/2022/08/220822.jpg"
        },
      ]
    }
  }
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
<script>
import Pagination from '@/components/Pagination.vue';
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import NewsCard from '@/components/NewsCard.vue';
import ChatBox from '@/components/ChatBox.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    NewsCard,
    Pagination,
    ChatBox
  }
}

</script>

<style>
/* CSS toàn cục */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem 0;
}

/* Tùy chỉnh scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #4299e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3182ce;
}
</style>
<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
      <ChatBox />
    </main>
    <Pagination />
    <AppFooter />
  </div>

</template>

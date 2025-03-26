import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/main.css';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import các icon cần dùng
import { faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Thêm icon vào thư viện
library.add(faCommentDots, faPaperPlane);

const app = createApp(App);

app.use(router);

// Đăng ký component FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

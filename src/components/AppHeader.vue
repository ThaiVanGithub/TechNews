<template>
    <header class="app-header">
        <div class="container">
            <router-link to="/" class="logo">
                <h1>TechNews</h1>
            </router-link>

            <nav class="nav-menu">
                <router-link v-for="category in categories" :key="category.id" :to="`/danh-muc/${category.slug}`"
                    class="nav-link">
                    {{ category.name }}
                </router-link>
            </nav>

            <div class="header-actions">
                <div class="search-box">
                    <input type="text" placeholder="Tìm kiếm..." v-model="searchQuery" @keyup.enter="performSearch">
                    <button @click="performSearch">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="currentColor" stroke-width="2" />
                            <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <div class="auth-buttons" v-if="!isAuthenticated">
                    <button class="auth-button login" @click="openLoginModal">Đăng nhập</button>
                    <button class="auth-button register" @click="openRegisterModal">Đăng ký</button>
                </div>

                <div class="user-menu" v-else>
                    <div class="user-avatar" @click="toggleUserMenu">
                        <img :src="user.avatar || 'https://via.placeholder.com/40'" alt="User Avatar">
                    </div>
                    <div class="dropdown-menu" v-if="showUserMenu">
                        <router-link to="/profile" class="dropdown-item">Hồ sơ</router-link>
                        <router-link to="/settings" class="dropdown-item">Cài đặt</router-link>
                        <button class="dropdown-item" @click="logout">Đăng xuất</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Login Modal -->
        <AuthModal v-if="showLoginModal" mode="login" @close="closeModal" @success="handleLoginSuccess" />

        <!-- Register Modal -->
        <AuthModal v-if="showRegisterModal" mode="register" @close="closeModal" @success="handleRegisterSuccess" />
    </header>
</template>

<script>
import AuthModal from './AuthModal.vue';

export default {
    name: 'AppHeader',
    components: {
        AuthModal
    },
    data() {
        return {
            searchQuery: '',
            categories: [
                { id: 1, name: 'Thời sự', slug: 'thoi-su' },
                { id: 2, name: 'Kinh tế', slug: 'kinh-te' },
                { id: 3, name: 'Công nghệ', slug: 'cong-nghe' }
            ],
            isAuthenticated: false,
            user: {
                name: '',
                email: '',
                avatar: ''
            },
            showUserMenu: false,
            showLoginModal: false,
            showRegisterModal: false
        }
    },
    methods: {
        performSearch() {
            if (this.searchQuery.trim()) {
                this.$router.push({ path: '/tim-kiem', query: { q: this.searchQuery } });
                this.searchQuery = '';
            }
        },
        openLoginModal() {
            this.showLoginModal = true;
        },
        openRegisterModal() {
            this.showRegisterModal = true;
        },
        closeModal() {
            this.showLoginModal = false;
            this.showRegisterModal = false;
        },
        handleLoginSuccess(userData) {
            this.isAuthenticated = true;
            this.user = userData;
            this.closeModal();
        },
        handleRegisterSuccess(userData) {
            this.isAuthenticated = true;
            this.user = userData;
            this.closeModal();
        },
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu;
        },
        logout() {
            this.isAuthenticated = false;
            this.user = {};
            this.showUserMenu = false;
            // Gọi API logout nếu cần
        }
    },
    mounted() {
        // Kiểm tra trạng thái đăng nhập khi component được tạo
        // Ví dụ: kiểm tra token trong localStorage hoặc gọi API
        const token = localStorage.getItem('authToken');
        if (token) {
            // Gọi API lấy thông tin user
            // this.fetchUserData();
        }
    }
}
</script>

<style scoped>
.app-header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    gap: 1rem;
}

.logo h1 {
    font-size: 1.5rem;
    color: #2563eb;
    margin: 0;
    font-weight: 700;
}

.nav-menu {
    display: flex;
    gap: 1.5rem;
}

.nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #2563eb;
}

.nav-link.router-link-exact-active {
    color: #2563eb;
}

.nav-link.router-link-exact-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2563eb;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}

.search-box input {
    border: none;
    padding: 0.5rem 1rem;
    outline: none;
    min-width: 200px;
}

.search-box button {
    background: #2563eb;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.3s ease;
}

.search-box button:hover {
    background: #1d4ed8;
}

.auth-buttons {
    display: flex;
    gap: 0.5rem;
}

.auth-button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.auth-button.login {
    background: transparent;
    border: 1px solid #2563eb;
    color: #2563eb;
}

.auth-button.login:hover {
    background: #f0f7ff;
}

.auth-button.register {
    background: #2563eb;
    border: 1px solid #2563eb;
    color: white;
}

.auth-button.register:hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
}

.user-menu {
    position: relative;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}

.user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    min-width: 150px;
    z-index: 10;
    margin-top: 0.5rem;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-width: 180px;
    z-index: 1000;
    margin-top: 0.8rem;
    padding: 8px 0;
    border: 1px solid #f1f5f9;
    transform-origin: top right;
    animation: scaleIn 0.15s ease-out;
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    color: #475569;
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 14px;
    gap: 10px;
}

.dropdown-item:hover {
    background: #f8fafc;
    color: #2563eb;
    padding-left: 20px;
}

.dropdown-item::before {
    content: '';
    width: 4px;
    height: 4px;
    background: #cbd5e1;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.dropdown-item:hover::before {
    background: #2563eb;
}

.dropdown-item:active {
    background: #eff6ff;
}

/* Animation */
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Thêm icon cho các mục */
.dropdown-item:nth-child(1)::after {
    content: '👤';
    margin-left: auto;
}

.dropdown-item:nth-child(2)::after {
    content: '⚙️';
    margin-left: auto;
}

.dropdown-item:nth-child(3)::after {
    content: '🚪';
    margin-left: auto;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-menu {
        order: 3;
        width: 100%;
        overflow-x: auto;
        padding: 0.5rem 0;
    }

    .header-actions {
        order: 2;
        width: 100%;
    }

    .search-box {
        flex-grow: 1;
    }
}
</style>
<template>
    <div class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <button class="close-button" @click="close">×</button>

            <h2>{{ mode === 'login' ? 'Đăng nhập' : 'Đăng ký' }}</h2>

            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" required>
                </div>

                <div class="form-group">
                    <label>Mật khẩu</label>
                    <input type="password" v-model="form.password" required>
                </div>

                <div v-if="mode === 'register'" class="form-group">
                    <label>Xác nhận mật khẩu</label>
                    <input type="password" v-model="form.confirmPassword" required>
                </div>

                <button type="submit" class="submit-button">
                    {{ mode === 'login' ? 'Đăng nhập' : 'Đăng ký' }}
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: true,
            validator: value => ['login', 'register'].includes(value)
        }
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        submitForm() {
            // Xử lý validate
            if (this.mode === 'register' && this.form.password !== this.form.confirmPassword) {
                alert('Mật khẩu không khớp!');
                return;
            }

            // Gọi API đăng nhập/đăng ký
            // Sau khi thành công:
            this.$emit('success', {
                name: 'Người dùng mới',
                email: this.form.email,
                avatar: 'https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png'
            });
        }
    }
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    position: relative;
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.submit-button {
    width: 100%;
    padding: 0.75rem;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 1rem;
}

.submit-button:hover {
    background: #1d4ed8;
}
</style>
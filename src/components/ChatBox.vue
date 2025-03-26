<template>
    <div class="chat-box" :class="{ 'chat-open': isOpen }">
        <div class="chat-toggle" @click="toggleChat">
            <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }}</span>
            <font-awesome-icon :icon="['fas', 'comment-dots']" />
        </div>

        <div class="chat-container">
            <div class="chat-header">
                <h3>Hỗ trợ trực tuyến</h3>
                <button class="close-chat" @click="toggleChat">×</button>
            </div>

            <div class="chat-messages" ref="messagesContainer">
                <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender]">
                    <div class="message-content">{{ msg.text }}</div>
                    <div class="message-time">{{ msg.time }}</div>
                </div>
            </div>

            <div class="chat-input">
                <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Nhập tin nhắn...">
                <button @click="sendMessage">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatBox',
    data() {
        return {
            isOpen: false,
            newMessage: '',
            unreadCount: 0,
            messages: [
                {
                    text: 'Xin chào! Chúng tôi có thể giúp gì cho bạn?',
                    sender: 'bot',
                    time: this.getCurrentTime()
                }
            ]
        }
    },
    methods: {
        toggleChat() {
            this.isOpen = !this.isOpen
            if (this.isOpen) this.unreadCount = 0
        },
        sendMessage() {
            if (this.newMessage.trim() === '') return

            // Thêm tin nhắn người dùng
            this.messages.push({
                text: this.newMessage,
                sender: 'user',
                time: this.getCurrentTime()
            })

            // Giả lập phản hồi bot
            setTimeout(() => {
                this.messages.push({
                    text: 'Cảm ơn câu hỏi của bạn. Chúng tôi sẽ phản hồi sớm nhất!',
                    sender: 'bot',
                    time: this.getCurrentTime()
                })
                this.scrollToBottom()

                if (!this.isOpen) {
                    this.unreadCount++
                }
            }, 1000)

            this.newMessage = ''
            this.scrollToBottom()
        },
        getCurrentTime() {
            const now = new Date()
            return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const container = this.$refs.messagesContainer
                container.scrollTop = container.scrollHeight
            })
        }
    }
}
</script>

<style scoped>
.chat-box {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
}

.chat-toggle {
    width: 60px;
    height: 60px;
    background: #2563eb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    transition: all 0.3s ease;
    position: relative;
}

.chat-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
}

.unread-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.chat-container {
    width: 350px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: scale(0);
    transform-origin: bottom right;
    opacity: 0;
    transition: all 0.3s ease;
    position: absolute;
    bottom: 70px;
    right: 0;
    max-height: 0;
}

.chat-open .chat-container {
    transform: scale(1);
    opacity: 1;
    max-height: 500px;
}

.chat-header {
    background: #2563eb;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-header h3 {
    margin: 0;
    font-size: 16px;
}

.close-chat {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

.chat-messages {
    height: 300px;
    overflow-y: auto;
    padding: 15px;
    background: #f8fafc;
}

.message {
    margin-bottom: 15px;
    max-width: 80%;
}

.message-content {
    padding: 10px 15px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
}

.message-time {
    font-size: 11px;
    color: #64748b;
    margin-top: 4px;
}

.message.user {
    margin-left: auto;
}

.message.user .message-content {
    background: #2563eb;
    color: white;
    border-bottom-right-radius: 4px;
}

.message.bot .message-content {
    background: white;
    color: #334155;
    border: 1px solid #e2e8f0;
    border-bottom-left-radius: 4px;
}

.chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #e2e8f0;
    background: white;
}

.chat-input input {
    flex: 1;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 10px 15px;
    outline: none;
}

.chat-input button {
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    transition: background 0.3s;
}

.chat-input button:hover {
    background: #1d4ed8;
}

/* Responsive */
@media (max-width: 576px) {
    .chat-box {
        right: 15px;
        bottom: 15px;
    }

    .chat-container {
        width: calc(100vw - 30px);
        right: -15px;
    }
}
</style>
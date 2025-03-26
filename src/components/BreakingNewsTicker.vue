<template>
    <div class="ticker-container">
        <div class="ticker-label">
            <span class="live-dot"></span>
            TIN MỚI NHẤT
        </div>
        <div class="ticker-content" ref="tickerContent">
            <div v-for="(item, index) in newsItems" :key="index" class="ticker-item" @click="handleClick(item)">
                <span class="ticker-time">{{ formatTime(item.time) }}</span>
                <span class="ticker-text">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        newsItems: {
            type: Array,
            required: true,
            default: () => [
                { text: "Google công bố AI mới vượt trội GPT-4", time: "14:30", url: "/ai-google" },
                { text: "Apple ra mắt Vision Pro tại Việt Nam", time: "15:45", url: "/apple-vision" }
            ]
        },
        speed: {
            type: Number,
            default: 50 // px/s
        }
    },
    data() {
        return {
            animationFrame: null
        }
    },
    mounted() {
        this.startAnimation()
    },
    beforeUnmount() {
        cancelAnimationFrame(this.animationFrame)
    },
    methods: {
        startAnimation() {
            const ticker = this.$refs.tickerContent
            const containerWidth = this.$el.offsetWidth
            const contentWidth = ticker.scrollWidth
            let position = containerWidth

            const animate = () => {
                position -= this.speed / 60
                if (position < -contentWidth) {
                    position = containerWidth
                }
                ticker.style.transform = `translateX(${position}px)`
                this.animationFrame = requestAnimationFrame(animate)
            }

            animate()
        },
        formatTime(time) {
            return time || 'Vừa xong'
        },
        handleClick(item) {
            if (item.url) {
                this.$router.push(item.url)
            }
        }
    }
}
</script>

<style scoped>
.ticker-container {
    background: #1e40af;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 20px;
}

.ticker-label {
    background: #1e3a8a;
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
}

.live-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    margin-right: 8px;
    animation: pulse 1.5s infinite;
}

.ticker-content {
    display: flex;
    align-items: center;
    padding-left: 100%;
    white-space: nowrap;
    will-change: transform;
}

.ticker-item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    transition: background 0.2s;
}

.ticker-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.ticker-time {
    font-size: 12px;
    opacity: 0.8;
    margin-right: 10px;
}

.ticker-text {
    font-size: 14px;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .ticker-label {
        padding: 0 10px;
        font-size: 12px;
    }

    .ticker-item {
        padding: 0 10px;
    }

    .ticker-time {
        display: none;
    }
}
</style>
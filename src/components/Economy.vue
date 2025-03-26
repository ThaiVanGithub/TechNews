<template>
    <div class="economy-page">
        <!-- Header Section -->
        <div class="economy-header">
            <h1 class="page-title">Tình hình kinh tế</h1>
            <div class="last-updated">Cập nhật: {{ updateTime }}</div>
        </div>

        <!-- Live Indicators -->
        <div class="indicators-container">
            <div class="indicator-card" v-for="item in economicIndicators" :key="item.name">
                <div class="indicator-name">{{ item.name }}</div>
                <div class="indicator-value" :class="item.trend">
                    {{ item.value }}
                    <span class="trend-icon">
                        {{ item.trend === 'up' ? '↑' : '↓' }}
                    </span>
                </div>
                <div class="indicator-change" :class="item.trend">
                    {{ item.change }} ({{ item.percentChange }})
                </div>
            </div>
        </div>



        <!-- Chart Section -->
        <div class="chart-section">
            <h2 class="section-title">Diễn biến VN-Index 30 ngày qua</h2>
            <div class="chart-container">
                <canvas ref="vnIndexChart"></canvas>
            </div>
            <div class="chart-legends">
                <div class="legend-item">
                    <span class="legend-color" style="background: #2563eb"></span>
                    <span>VN-Index</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background: #10b981"></span>
                    <span>Khối ngoại mua ròng (tỷ đồng)</span>
                </div>
            </div>
        </div>

        <!-- Featured Articles -->
        <div class="featured-articles">
            <h2 class="section-title">Tin nổi bật</h2>

            <div class="article-card featured">
                <div class="article-image">
                    <img src="https://commerceaspirant.com/wp-content/uploads/2022/11/What-is-an-Economy.png"
                        alt="Featured Article">
                    <span class="badge">NỔI BẬT</span>
                </div>
                <div class="article-content">
                    <h3 class="article-title">Lãi suất ngân hàng tiếp tục giảm</h3>
                    <p class="article-excerpt">
                        Ngân hàng Nhà nước điều chỉnh giảm lãi suất điều hành thêm 0.5% từ ngày 20/05,
                        đây là lần điều chỉnh thứ 3 trong năm nay nhằm hỗ trợ nền kinh tế...
                    </p>
                    <div class="article-meta">
                        <span class="date">20/05/2024</span>
                        <span class="views">1.2K lượt xem</span>
                        <router-link to="/bai-viet/123" class="read-more">Đọc tiếp →</router-link>
                    </div>
                </div>
            </div>

            <div class="article-list">
                <div class="article-card" v-for="(article, index) in articles" :key="index">
                    <div class="article-content">
                        <h3 class="article-title">{{ article.title }}</h3>
                        <p class="article-excerpt">{{ article.excerpt }}</p>
                        <div class="article-meta">
                            <span class="date">{{ article.date }}</span>
                            <span class="views">{{ article.views }} lượt xem</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <pagination /> -->
</template>

<!-- <script>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

export default {
    setup() {
        const vnIndexChart = ref(null)
        const updateTime = ref(new Date().toLocaleTimeString('vi-VN'))

        const economicIndicators = ref([
            {
                name: 'VN-Index',
                value: '1,254.12',
                trend: 'up',
                change: '+12.34',
                percentChange: '+1.02%'
            },
            {
                name: 'USD/VND',
                value: '24,560',
                trend: 'down',
                change: '-20',
                percentChange: '-0.08%'
            },
            {
                name: 'Gold',
                value: '67.2',
                trend: 'up',
                change: '+0.5',
                percentChange: '+0.75%'
            }
        ])

        const articles = ref([
            {
                title: "Ngân hàng Nhà nước tiếp tục giảm lãi suất điều hành",
                excerpt: "Quyết định giảm 0,5%/năm các mức lãi suất nhằm hỗ trợ phục hồi kinh tế...",
                date: "16/06/2023",
                views: "845"
            },
            {
                title: "Xuất khẩu tháng 5 tăng trưởng 15%",
                excerpt: "Kim ngạch xuất khẩu đạt 32 tỷ USD, tăng trưởng mạnh so với cùng kỳ...",
                date: "15/05/2024",
                views: "1.1K"
            }
        ])

        onMounted(() => {
            Chart.register(...registerables)
            renderChart()

            // Cập nhật thời gian mỗi phút
            setInterval(() => {
                updateTime.value = new Date().toLocaleTimeString('vi-VN')
            }, 60000)
        })

        const renderChart = () => {
            new Chart(vnIndexChart.value, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}/5`),
                    datasets: [{
                        label: 'VN-Index',
                        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1200),
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            })
        }

        return {
            vnIndexChart,
            updateTime,
            economicIndicators,
            articles
        }
    }
}
</script> -->
<script>

import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'
// import Pagination from '@/components/Pagination.vue'
// import Pagination from '@/components/Pagination.vue'
export default {
    setup() {


        const vnIndexChart = ref(null)
        const updateTime = ref(new Date().toLocaleTimeString('vi-VN'))
        let chartInstance = null

        const economicIndicators = ref([
            {
                name: 'VN-Index',
                value: '1,254.12',
                trend: 'up',
                change: '+12.34',
                percentChange: '+1.02%'
            },
            {
                name: 'USD/VND',
                value: '24,560',
                trend: 'down',
                change: '-20',
                percentChange: '-0.08%'
            },
            {
                name: 'Gold',
                value: '67.2',
                trend: 'up',
                change: '+0.5',
                percentChange: '+0.75%'
            }
        ])

        const articles = ref([
            {
                title: "Ngân hàng Nhà nước tiếp tục giảm lãi suất điều hành",
                excerpt: "Quyết định giảm 0,5%/năm các mức lãi suất nhằm hỗ trợ phục hồi kinh tế...",
                date: "16/06/2023",
                views: "845"
            },
            {
                title: "Xuất khẩu tháng 5 tăng trưởng 15%",
                excerpt: "Kim ngạch xuất khẩu đạt 32 tỷ USD, tăng trưởng mạnh so với cùng kỳ...",
                date: "15/05/2024",
                views: "1.1K"
            }
        ])

        const renderChart = () => {
            if (chartInstance) {
                chartInstance.destroy()
            }

            chartInstance = new Chart(vnIndexChart.value, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}/5`),
                    datasets: [
                        {
                            label: 'VN-Index',
                            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1200),
                            borderColor: '#2563eb',
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                            tension: 0.3,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawBorder: false
                            }
                        },
                        y: {
                            beginAtZero: false,
                            grid: {
                                display: true,
                                drawBorder: false
                            }
                        }
                    }
                }
            })
        }

        onMounted(() => {
            Chart.register(...registerables)
            renderChart()

            // Cập nhật thời gian mỗi phút
            const timeInterval = setInterval(() => {
                updateTime.value = new Date().toLocaleTimeString('vi-VN')
            }, 60000)

            // Xử lý resize để vẽ lại chart
            window.addEventListener('resize', renderChart)

            return () => {
                clearInterval(timeInterval)
                window.removeEventListener('resize', renderChart)
                if (chartInstance) {
                    chartInstance.destroy()
                }
            }
        })

        onUnmounted(() => {
            if (chartInstance) {
                chartInstance.destroy()
            }
        })

        return {
            vnIndexChart,
            updateTime,
            economicIndicators,
            articles
        }
    },
    // components: {
    //     Pagination

    // }

}
</script>
<style scoped>
.economy-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
}

/* Header Styles */
.economy-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e2e8f0;
}

.page-title {
    font-size: 2.2rem;
    color: #2563eb;
    margin: 0;
    font-weight: 700;
}

.last-updated {
    color: #64748b;
    font-size: 0.9rem;
}

/* Indicators Styles */
.indicators-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.indicator-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.indicator-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.indicator-name {
    color: #64748b;
    font-size: 1rem;
    margin-bottom: 5px;
}

.indicator-value {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 5px 0;
    display: flex;
    align-items: center;
}

.indicator-value.up {
    color: #10b981;
}

.indicator-value.down {
    color: #ef4444;
}

.trend-icon {
    font-size: 1.2rem;
    margin-left: 8px;
}

.indicator-change {
    font-size: 0.9rem;
    font-weight: 500;
}

.indicator-change.up {
    color: #10b981;
}

.indicator-change.down {
    color: #ef4444;
}

/* Chart Styles */
.chart-container {
    position: relative;
    height: 400px;
    width: 100%;
}

@media (max-width: 768px) {
    .chart-container {
        height: 300px;
    }
}

.section-title {
    font-size: 1.5rem;
    color: #1e293b;
    margin-top: 0;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
}

.chart-container {
    position: relative;
    height: 400px;
    width: 100%;
}

/* Article Styles */
.featured-articles {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.article-card {
    display: flex;
    margin-bottom: 30px;
    transition: transform 0.3s;
}

.article-card.featured {
    background: #f8fafc;
    border-radius: 8px;
    overflow: hidden;
}

.article-card:hover {
    transform: translateY(-3px);
}

.article-image {
    position: relative;
    min-width: 40%;
}

.article-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #dc2626;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
}

.article-content {
    padding: 20px;
    flex-grow: 1;
}

.article-title {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 10px;
    color: #1e293b;
}

.article-excerpt {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 15px;
}

.article-meta {
    display: flex;
    align-items: center;
    color: #94a3b8;
    font-size: 0.9rem;
    gap: 15px;
}

.read-more {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
}

.read-more:hover {
    text-decoration: underline;
}

.article-list .article-card {
    padding: 15px 0;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 15px;
}

.article-list .article-card:last-child {
    border-bottom: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .economy-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .article-card.featured {
        flex-direction: column;
    }

    .article-image {
        min-width: 100%;
    }

    .article-image img {
        height: 200px;
    }

    .chart-container {
        height: 300px;
    }
}
</style>
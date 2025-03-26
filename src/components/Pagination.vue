<template>
    <div class="pagination-container">
        <button class="pagination-button" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            &lt;
        </button>

        <!-- Hiển thị tất cả các trang khi totalPages <= maxVisible -->
        <template v-if="totalPages <= maxVisible">
            <button v-for="page in totalPages" :key="page" class="pagination-button"
                :class="{ active: currentPage === page }" @click="changePage(page)">
                {{ page }}
            </button>
        </template>

        <!-- Hiển thị phân trang thông minh khi nhiều trang -->
        <template v-else>
            <button v-if="currentPage > Math.floor(maxVisible / 2) + 1" class="pagination-button"
                @click="changePage(1)">
                1
            </button>

            <button v-if="currentPage > Math.floor(maxVisible / 2) + 2" class="pagination-ellipsis" disabled>
                ...
            </button>

            <template v-for="page in visiblePages" :key="page">
                <button class="pagination-button" :class="{ active: currentPage === page }" @click="changePage(page)">
                    {{ page }}
                </button>
            </template>

            <button v-if="currentPage < totalPages - Math.floor(maxVisible / 2) - 1" class="pagination-ellipsis"
                disabled>
                ...
            </button>

            <button v-if="currentPage < totalPages - Math.floor(maxVisible / 2)" class="pagination-button"
                @click="changePage(totalPages)">
                {{ totalPages }}
            </button>
        </template>

        <button class="pagination-button" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            &gt;
        </button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
            default: 1
        },
        totalPages: {
            type: Number,
            required: true,
            default: 5
        },
        maxVisible: {
            type: Number,
            default: 5
        }
    },
    emits: ['page-changed'],
    computed: {
        visiblePages() {
            const pages = [];
            let start = Math.max(this.currentPage - Math.floor(this.maxVisible / 2), 1);
            let end = Math.min(start + this.maxVisible - 1, this.totalPages);

            // Điều chỉnh nếu không đủ maxVisible pages
            if (end - start + 1 < this.maxVisible) {
                start = Math.max(end - this.maxVisible + 1, 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            return pages;
        }
    },
    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.$emit('page-changed', page);
            }
        }
    }
}
</script>

<style scoped>
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
}

.pagination-button {
    min-width: 40px;
    height: 40px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
}

.pagination-button:hover:not(:disabled) {
    background: #f1f5f9;
    border-color: #cbd5e1;
}

.pagination-button.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
}

.pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-ellipsis {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    user-select: none;
}

@media (max-width: 768px) {
    .pagination-button {
        min-width: 36px;
        height: 36px;
        font-size: 14px;
    }
}
</style>
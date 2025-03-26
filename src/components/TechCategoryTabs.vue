<template>
    <div class="category-tabs">
        <button v-for="category in categories" :key="category.id" :class="{ active: activeCategory === category.id }"
            @click="selectCategory(category)">
            <i :class="category.icon"></i>
            {{ category.name }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        categories: Array,
        initialActive: {
            type: String,
            default: 'all'
        }
    },
    data() {
        return {
            activeCategory: this.initialActive
        }
    },
    methods: {
        selectCategory(category) {
            this.activeCategory = category.id
            this.$emit('category-changed', category)
        }
    }
}
</script>

<style scoped>
.category-tabs {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 15px 0;
    margin-bottom: 30px;
    scrollbar-width: none;
}

.category-tabs::-webkit-scrollbar {
    display: none;
}

.category-tabs button {
    flex-shrink: 0;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #e2e8f0;
    background: white;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.category-tabs button.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
}

.category-tabs button i {
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .category-tabs {
        gap: 5px;
    }

    .category-tabs button {
        padding: 8px 15px;
        font-size: 0.9rem;
    }
}
</style>
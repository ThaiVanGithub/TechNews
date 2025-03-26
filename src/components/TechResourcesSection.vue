<template>
    <section class="resources-section">
        <h2>
            <i class="icon-resources"></i> Tài Nguyên Công Nghệ
        </h2>
        <div class="resources-grid">
            <div class="resource-card">
                <h3>Hướng dẫn</h3>
                <ul>
                    <li><a href="#">Cách chọn laptop 2024</a></li>
                    <li><a href="#">Mẹo sử dụng AI hiệu quả</a></li>
                </ul>
            </div>
            <div class="resource-card">
                <h3>Đánh giá</h3>
                <ul>
                    <li><a href="#">Bảng xếp hạng smartphone</a></li>
                    <li><a href="#">So sánh chip AI</a></li>
                </ul>
            </div>
            <div class="resource-card">
                <h3>Công cụ</h3>
                <ul>
                    <li><a href="#">Kiểm tra cấu hình PC</a></li>
                    <li><a href="#">Tính giá điện thoại cũ</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
.resources-section {
    background: white;
    border-radius: 10px;
    padding: 25px;
    margin-top: 40px;
}

.resources-section h2 {
    margin-top: 0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.resource-card {
    background: #f8fafc;
    border-radius: 8px;
    padding: 20px;
}

.resource-card h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #2563eb;
}

.resource-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.resource-card li {
    margin-bottom: 10px;
}

.resource-card a {
    text-decoration: none;
    color: #334155;
    transition: color 0.2s;
}

.resource-card a:hover {
    color: #2563eb;
}
</style>
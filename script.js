document.addEventListener('DOMContentLoaded', function() {
    console.log('ウェブサイトが完全にロードされました。');

    // 1. お知らせを動的に追加する例
    const newsData = [
        { date: '2025/10/05', content: '【重要】スターリン様がトイレに行かれました。' },
        { date: '2025/10/03', content: '生徒会がロシア（旧ソ連）に訪問しました。' },
    ];

    const newsList = document.getElementById('news-list');

    // 既存の項目をクリア（必要であれば）
    // newsList.innerHTML = ''; 

    newsData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.date}: ${item.content}`;
        // リストの先頭に追加 (新しいお知らせを上にするため)
        newsList.prepend(listItem);
    });
    
    // 2. スクロール時のシンプルなアニメーション（フェードイン）
    // Intersection Observer APIを使って要素が表示されたらクラスを追加
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を終了
                observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたら発火
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // 初期状態のクラスを追加
        observer.observe(section);
    });
});

// `style.css`に以下のCSSを追加するとアニメーションが有効になります。

/* .fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
}
*/

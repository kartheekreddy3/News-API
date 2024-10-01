document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "ETF Daily News" },
                author: "MarketBeat News",
                title: "Tesla, Inc. (NASDAQ:TSLA) Shares Purchased by Invst LLC",
                description: "Invst LLC grew its holdings in shares of Tesla, Inc. (NASDAQ:TSLA – Free Report) by 23.6% during the second quarter, according to the company in its most recent filing with the Securities & Exchange Commission.",
                url: "https://www.etfdailynews.com/2024/09/30/tesla-inc-nasdaqtsla-shares-purchased-by-invst-llc/",
                urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                publishedAt: "2024-09-30T22:42:51Z",
                content: "Invst LLC grew its holdings in shares of Tesla, Inc..."
            },
            {
                source: { id: null, name: "BMWBLOG" },
                author: "Horatiu Boeriu",
                title: "BMW’s Neue Klasse Models Likely to Debut with Only Level 2+ Driving Assistance Features",
                description: "BMW’s upcoming Neue Klasse models will debut with only Level 2+ driver assistance technology, despite initial ambitions for higher levels of autonomy.",
                url: "https://www.bmwblog.com/2024/09/30/bmw-neue-klasse-level-2-driving-assistant-technology/",
                urlToImage: "https://cdn.bmwblog.com/wp-content/uploads/2023/07/bmw-level-3-autonomous-driving-24.jpg",
                publishedAt: "2024-09-30T22:23:13Z",
                content: "BMW focuses on perfecting semi-autonomous features instead of pursuing Level 4 systems."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "reuters.com",
                title: "Tesla, Musk beat shareholder lawsuit over self-driving promises",
                description: "Tesla and its CEO Elon Musk on Monday won the dismissal of a lawsuit accusing them of overstating the effectiveness and safety of self-driving technology to boost stock prices.",
                url: "https://biztoc.com/x/6a80c9b4ad4e40e1",
                urlToImage: "https://biztoc.com/cdn/6a80c9b4ad4e40e1_s.webp",
                publishedAt: "2024-09-30T22:12:10Z",
                content: "Tesla and Elon Musk won the dismissal of a shareholder lawsuit over self-driving claims..."
            },
            {
                source: { id: null, name: "Raw Story" },
                author: "Kathleen Culliton",
                title: "'Just put on a red hat': CNN segment on latest Trump tactic spurs 'sanewashing' uproar",
                description: "A CNN correspondent faced criticism for allegedly 'sanewashing' as she reported on Trump's controversial decision to campaign in Georgia after Hurricane Helene.",
                url: "https://www.rawstory.com/cnn-trump-georgia/",
                urlToImage: "https://www.rawstory.com/media-library/rick-wilson-co-founder-of-the-anti-maga-group-the-lincoln-project-shredded-said-his-group-will-do-everything-it-can-to-prevent.png?id=52680121&width=1200&height=600&coordinates=0%2C40%2C0%2C40",
                publishedAt: "2024-09-30T22:03:55Z",
                content: "A CNN correspondent was criticized for her reporting on Trump's campaign visit..."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});

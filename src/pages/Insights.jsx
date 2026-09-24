import { useMemo, useState } from 'react'

const insights = [
  { title: 'Why the future of HR is more human, not less', category: 'Workplace', date: 'Sep 08, 2026', read: '5 min read', featured: true },
  { title: 'Building a talent strategy for changing skills', category: 'Recruitment', date: 'Aug 26, 2026', read: '4 min read' },
  { title: 'The leadership capabilities organizations need next', category: 'Leadership', date: 'Aug 18, 2026', read: '6 min read' },
  { title: 'How to create a workplace people want to grow in', category: 'Culture', date: 'Aug 11, 2026', read: '5 min read' },
  { title: 'From employee development to business impact', category: 'Career', date: 'Jul 29, 2026', read: '4 min read' },
  { title: 'What smarter people operations actually means', category: 'Workplace', date: 'Jul 17, 2026', read: '6 min read' },
]

const categories = ['All', 'Recruitment', 'Leadership', 'Workplace', 'Career', 'Culture']

function Insights() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const filteredInsights = useMemo(() => insights.filter((article) => (
    (category === 'All' || article.category === category)
    && article.title.toLowerCase().includes(search.toLowerCase())
  )), [category, search])
  const featuredArticle = insights.find((article) => article.featured)

  return (
    <>
      <section className="insights-hero">
        <div className="container">
          <span className="section-eyebrow">NEXORA INSIGHTS</span>
          <h1>Ideas for a<span> changing world of work.</span></h1>
          <p>Perspectives on talent, leadership, workplace culture, employee development, and the future of HR.</p>
        </div>
      </section>

      <section className="featured-insight">
        <div className="container">
          <div className="featured-card">
            <div className="featured-content">
              <span className="featured-label">FEATURED INSIGHT</span>
              <span className="article-category">{featuredArticle.category}</span>
              <h2>{featuredArticle.title}</h2>
              <p>As skills, expectations, and workplaces continue to evolve, organizations need a people strategy that can evolve with them.</p>
              <div className="article-meta"><span>{featuredArticle.date}</span><span>•</span><span>{featuredArticle.read}</span></div>
              <button className="article-button" type="button">Read Insight <span>↗</span></button>
            </div>

            <div className="featured-visual">
              <div className="insight-orbit insight-orbit-one" />
              <div className="insight-orbit insight-orbit-two" />
              <div className="insight-core"><span>HUMAN</span><strong>×</strong><span>PROGRESS</span></div>
              <span className="insight-dot insight-dot-one" />
              <span className="insight-dot insight-dot-two" />
              <span className="insight-dot insight-dot-three" />
            </div>
          </div>
        </div>
      </section>

      <section className="insights-library">
        <div className="container">
          <div className="insights-toolbar">
            <div>
              <span className="section-eyebrow">EXPLORE</span>
              <h2>Perspectives that<span> move people forward.</span></h2>
            </div>
            <div>
              <input type="search" placeholder="Search insights..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search insights" aria-describedby="search-help" />
              <small id="search-help" className="sr-only">Search insights by title.</small>
            </div>
          </div>

          <div className="category-filters">
            {categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
          </div>

          <div className="insights-grid">
            {filteredInsights.filter((article) => !article.featured).map((article) => (
              <article className="insight-card" key={article.title}>
                <div className="insight-card-top"><span>{article.category}</span><span>↗</span></div>
                <h3>{article.title}</h3>
                <div className="article-meta"><span>{article.date}</span><span>•</span><span>{article.read}</span></div>
              </article>
            ))}
            {filteredInsights.length === 0 && <div className="no-insights"><strong>No insights found</strong><p>Try another search or category.</p></div>}
          </div>
        </div>
      </section>

      <section className="insight-index">
        <div className="container">
          <div className="insight-index-box">
            <div>
              <span className="section-eyebrow">PEOPLE INDEX</span>
              <h2>Understand the signals<span> behind your people.</span></h2>
              <p>Explore the relationship between talent, development, culture, and organizational progress through our illustrative People Index framework.</p>
            </div>
            <div className="index-mini"><strong>84</strong><span>/100</span><small>HUMAN POTENTIAL</small></div>
          </div>
        </div>
      </section>

      <section className="insights-cta">
        <div className="container">
          <div className="insights-cta-box">
            <span className="section-eyebrow">STAY CONNECTED</span>
            <h2>Ideas worth<span> taking forward.</span></h2>
            <p>Follow NEXORA for practical perspectives on people, leadership, and the future of work.</p>
            {subscribed ? <p className="subscription-success">Thanks. This demo subscription has been recorded locally.</p> : <div className="newsletter-form"><input type="email" placeholder="Your email address" aria-label="Email address" /><button type="button" onClick={() => setSubscribed(true)}>Subscribe <span>→</span></button></div>}
            <small>Concept website - newsletter subscription is for demonstration.</small>
          </div>
        </div>
      </section>
    </>
  )
}

export default Insights

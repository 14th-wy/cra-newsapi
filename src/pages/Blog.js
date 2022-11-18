import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Blog(){

    const [articles, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function(){
        document.title = 'Blog';
        async function getArticle(){
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            );
            const response = await request.json();
            setArticle(response);
            setLoading(false);
            console.log(response);
        }
        getArticle();
    }, []);

    return (
        <section className='section'>
            <h1 className='section-title'>Blog Artikel</h1>
            {loading ? (<i>Loading isi artikel ... </i>) : (
                <div className='articles'>
                    {articles.map(function(article){
                        return (
                        <article key={article.id} className='article'>
                            <h3 className='article-title'>
                                <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                {/* <Link to={'/blog/${article.id}'}></Link> */}
                            </h3>
                            <p className='article-time'>{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}
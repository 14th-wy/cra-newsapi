import { useEffect } from "react"

export default function Home(){

    useEffect (function() {
        document.title = 'Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Hi, Saya Wahyu Dani Saputra</h1>
            <p className="section-description">
                Saya seorang front end developer dengan pengalaman 1tahun, saya juga merupakan lulusan teknik informatika
                dari Politeknik LP3I Jakarta Kampus Bekasi, saya juga berhasil meraih GPA 3,60
            </p>
        </section>
    )
}
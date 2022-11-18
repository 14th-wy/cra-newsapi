import { useEffect } from "react"

export default function Contact(){

    useEffect (function(){
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Jika ingin menghubungi saya !</p>
            <ul>
                <li>WhatsApp : <a href="https://wa.me/+62851562*****">0851562*****</a></li>
                <li>Email : wy.wahyudani@gmail.com</li>
            </ul>
        </section>
    )
}
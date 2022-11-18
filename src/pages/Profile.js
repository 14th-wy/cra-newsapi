import { useEffect } from "react";

export default function Profile(){

    useEffect (function() {
        document.title = 'Profile';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">
                Halo, nama saya Wahyu Dani Saputra, Saat ini saya telah lulus dari Politeknik LP3I Jakarta dengan IPK 3.60/4.00.
            </p>
        </section>
    )
}
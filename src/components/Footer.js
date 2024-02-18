import React, { useEffect, useState } from "react";

const Footer = () => {

    const [creators, setCreator] = useState(["David Kochanski", "Shaurya Nargotra", "Akbar Ali Pardawalla", "Muhammad Maisam"]);

    useEffect(() => {

        setCreator(prev => {
            const shuffled = [...prev];

            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            return shuffled;
        });


        const interval = setInterval(() => {
            setCreator(prev => {
                const shuffled = [...prev];

                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }

                return shuffled;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
    <footer className="bg-light p-3 text-center">
        <div className="logo" />
        <p>
        Created for Deerhacks III Hackathon
        </p>

        <div>
            Made by {creators.join(", ")}
        </div>
    </footer>
    )
    };

export default Footer;

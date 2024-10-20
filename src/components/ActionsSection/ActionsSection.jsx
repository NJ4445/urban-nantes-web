import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './ActionsSection.module.css';

import carrouselImage1 from '../../assets/images/carrousel-image1.webp';
import carrouselImage2 from '../../assets/images/carrousel-image2.webp';
import carrouselImage3 from '../../assets/images/carrousel-image3.webp';
import carrouselImage4 from '../../assets/images/carrousel-image4.webp';
import carrouselImage5 from '../../assets/images/carrousel-image5.webp';
import carrouselImage6 from '../../assets/images/carrousel-image6.webp';
import carrouselImage7 from '../../assets/images/carrousel-image7.webp';

const images = [
    { src: carrouselImage1, alt: 'Projet 1', title: 'Produit Fini', date: 'Janvier 2024' },
    { src: carrouselImage2, alt: 'Projet 2', title: 'Maintenant ou jamais', date: 'Février 2024' },
    { src: carrouselImage3, alt: 'Projet 3', title: 'Espace Contact', date: 'Mars 2024' },
    { src: carrouselImage4, alt: 'Projet 4', title: 'Festival Hip hop session', date: 'Avril 2024' },
    { src: carrouselImage5, alt: 'Projet 5', title: 'Projet Collaboratif', date: 'Mai 2024' },
    { src: carrouselImage6, alt: 'Projet 6', title: 'Festival Spot', date: 'Juin 2023' },
    { src: carrouselImage7, alt: 'Projet 7', title: 'The Contest', date: 'Janvier 2024' },
];

const ActionsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className={styles.actions}>
            <h2 className={styles.actionsTitle}>Nos Actions</h2>
            <p className={styles.actionsSubtitle}>Découvrez nos actions.</p>
            <Slider {...settings} className={styles.carousel}>
                {images.map(({ src, alt, title, date }, index) => (
                    <div key={index} className={styles.slide} aria-label={title}>
                        <img src={src} alt={alt} className={styles.actionImage} />
                        <h3 className={styles.actionTitle}>{title}</h3>
                        <p className={styles.actionDate}>{date}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ActionsSection;

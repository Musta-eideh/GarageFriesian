import styles from './Home.module.css';

import Categoria from '../pages/Categoria/Categoria';

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();

function Home() {

    const slideFotos = [
        {id: '1', image: 'https://img.olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp'},
        {id: '2', image: 'https://img.olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp'},
        {id: '3', image: 'https://img.olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp'},
        {id: '4', image: 'https://img.olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp'},
    ]

    return (
        <div className={styles.containerHome}>
            <Swiper
                slidesPerView={1}
                pagination={{clickble: true}}
                navigation
            >
                {slideFotos.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img 
                            src={item.image}
                            alt="Slider"
                            className={styles.slideItem}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Categoria />
        </div>
    )
}

export default Home;
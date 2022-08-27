import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { cods } from '../../mock/ArrayGames';

export function CarouselGames(){
    return(
        <>
        <Link to ="/" className={styles.title}>Call Of Duty:</Link>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                500: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            
            {cods.map(cod => {
                return(
                    <SwiperSlide key={cod.id}>
                        <div className={styles.wrapper} >
                            <img src={cod.image} alt={cod.name} />
                            <h1>{cod.name}</h1>
                            <p>{cod.description}</p>
                        </div>  
                    </SwiperSlide>
                );
            })}
        </Swiper>
        </>
    );
}
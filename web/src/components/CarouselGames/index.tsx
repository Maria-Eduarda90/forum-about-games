import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import codbo from '../../img/cod/cod-bo1.jpg';
import codbo2 from '../../img/cod/cod-bo2.jpg';
import codbo3 from '../../img/cod/cod-bo3.jpg';
import codGhost from '../../img/cod/cod-ghost.jpg';
import codAdvanced from '../../img/cod/Advanced_Warfare.jpg';
import codWarzone from '../../img/cod/9318-call-of-duty-warzone-capa-1.jpg';
import codWarfare from '../../img/cod/Modern_Warfare.jpg';

const teste = [
    {
        id: 1,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codbo}`
    },
    {
        id: 2,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codbo2}`
    },
    {
        id: 3,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codbo3}`
    },
    {
        id: 4,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codGhost}`
    },
    {
        id: 5,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codAdvanced}`
    },
    {
        id: 6,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codWarzone}`
    },
    {
        id: 7,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicado pela Activision. O primeiro título da série foi lançado em 2003 e começou nos computadores, mais tarde a série se expandiu para os mais variados consoles, portáteis e smartphones.',
        image: `${codWarfare}`
    }
]

export function CarouselGames(){
    return(
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
            {teste.map(test => {
                return(
                    <SwiperSlide key={test.id}>
                        <div className={styles.wrapper} >
                            <img src={test.image} alt="" />
                            <h1>{test.name}</h1>
                            <p>{test.description}</p>
                        </div>  
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
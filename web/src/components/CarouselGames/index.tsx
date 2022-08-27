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
import { Link } from 'react-router-dom';

const teste = [
    {
        id: 1,
        name: 'Call Of Duty Black Ops',
        description: 'Call of Duty: Black Ops é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Treyarch, publicado pela Activision e lançado mundialmente em 9 de novembro de 2010 para as plataformas Microsoft Windows, Xbox 360, PlayStation 3, Wii e Nintendo DS',
        image: `${codbo}`
    },
    {
        id: 2,
        name: 'Call Of Duty Black Ops II',
        description: 'Call of Duty: Black Ops II é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela Treyarch e publicado pela Activision. Black Ops II foi um dos jogos mais esperados de 2012.',
        image: `${codbo2}`
    },
    {
        id: 3,
        name: 'Call Of Duty Black Ops III',
        description: 'Call of Duty: Black Ops III é um jogo eletrônico de tiro produzido pela empresa Treyarch e lançado no dia 6 de novembro de 2015 pela Activision para Microsoft Windows, PlayStation 4 e Xbox One.',
        image: `${codbo3}`
    },
    {
        id: 4,
        name: 'Call Of Duty Ghost',
        description: 'Call of Duty: Ghosts é um jogo de tiro em primeira pessoa produzido pela Infinity Ward, com a assistência da Raven Software e da Neversoft, e publicado pela Activision. É o décimo jogo eletrônico da franquia Call of Duty.',
        image: `${codGhost}`
    },
    {
        id: 5,
        name: 'Call of Duty: Advanced Warfare',
        description: 'Call of Duty: Advanced Warfare é um jogo do género tiro em primeira pessoa produzido pela Sledgehammer Games e publicado pela Activision. É o décimo primeiro jogo principal da série Call of Duty e o primeiro a ser produzido principalmente pela Sledgehammer Games.',
        image: `${codAdvanced}`
    },
    {
        id: 6,
        name: 'Call of Duty: Warzone',
        description: 'Call of Duty: Warzone é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Infinity Ward e Raven Software e publicado pela Activision. Lançado em 10 de março de 2020 para Microsoft Windows, PlayStation 4 e Xbox One, o jogo faz parte do título Call of Duty: Modern Warfare',
        image: `${codWarzone}`
    },
    {
        id: 7,
        name: 'Call Of Duty: MW3',
        description: 'Call of Duty: Modern Warfare 3 é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e pela Sledgehammer Games com a assistência da Raven Software.É o oitavo título da série Call of Duty e o terceiro da saga Modern Warfare sendo uma sequela direta de Call of Duty: Modern Warfare 2.',
        image: `${codWarfare}`
    }
]

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
            
            {teste.map(test => {
                return(
                    <SwiperSlide key={test.id}>
                        <div className={styles.wrapper} >
                            <img src={test.image} alt={test.name} />
                            <h1>{test.name}</h1>
                            <p>{test.description}</p>
                        </div>  
                    </SwiperSlide>
                );
            })}
        </Swiper>
        </>
    );
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.scss';
import image1 from '../../assets/Agricultural Water Usage Calculator.png'
import image2 from '../../assets/Game Sales for Publishers.jpg'
import image3 from '../../assets/USWeatherMap.png'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

const Carousel = () => {
    return (
        <>
            <div className='swiper-wrapper'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={ true }
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide key={1}>
                        <img src={image1} width='100%'/>
                        <div className='caption'>
                            <a href='https://devpost.com/software/agricultural-water-usage-calculator'>
                                Calculator Web App created for HackNC 2023.
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <img src={image2} width='100%'/>
                        <div className='caption'>
                            <a href='https://devpost.com/software/game-sales-for-publishers?ref_content=user-portfolio&ref_feature=in_progress'>
                            Data analysis of game sales using Python for Carolina Data Challenge 2023.
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <img src={image3} width='100%'/>
                        <div className='caption'>
                            <a href='https://github.com/nathansantiago/UnitedStatesWeather'>
                                Using the Python weather api and geopandas, State temperatures are mapped onto an interactable US map.
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className='swiper-button-next'>
                    <img src={arrowRight}/>
                </div>
                <div className='swiper-button-prev'>
                    <img src={arrowLeft}/>
                </div> */}
            </div>
        </>
    )
}

export default Carousel
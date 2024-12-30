import React, { CSSProperties } from 'react';
import Slider from 'react-slick';
import './Carousel.scss';

import Pig from '../../assets/carousel/pig.png';
import Cash from '../../assets/carousel/cash.png';
import Sword from '../../assets/carousel/sword.png';

const CarouselSection: React.FC = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        arrows: false,
        dots: false,
        centerPadding: '361px',
        slidesToShow: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: '',
                    centerMode: false,
                    dots: true,
                    centerPadding: '0',
                },
            },
        ],
    };

    const gradientStyle1: CSSProperties = {
        background: 'linear-gradient(64.92deg, #147261 27.03%, #082C25 78.3%)',
        borderRadius: 16,
    };
    const gradientStyle2 = {
        background: 'linear-gradient(64.92deg, #284DCE 27.03%, #0C1741 78.3%)',
        borderRadius: 16,
    };
    const gradientStyle3 = {
        background: 'linear-gradient(64.92deg, #0B467B 27.03%, #041B2E 78.3%)',
        borderRadius: 16,
    };

    const background = {
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    };
    const background1 = {
        ...background,
        backgroundImage: `url(${Pig})`,
    };
    const background2 = {
        ...background,
        backgroundImage: `url(${Cash})`,
    };
    const background3 = {
        ...background,
        backgroundImage: `url(${Sword})`,
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                <div>
                    <div style={gradientStyle1}>
                        <div className='carousel-item' style={background1}>
                            <div className='content-wrapper'>
                                <span className='badge'>
                                    Exclusive Tournament
                                </span>
                                <h2 className='main-title'>
                                    Piggy Christmas Tap:
                                </h2>
                                <h2 className='sub-title'>
                                    €35,000 For Your Wins
                                </h2>
                                <button className='action-btn'>
                                    Join and Win
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={gradientStyle2}>
                        <div className='carousel-item' style={background2}>
                            <div className='content-wrapper'>
                                <span className='badge'>Cashback Offer</span>
                                <h2 className='main-title'>Win up to:</h2>
                                <h2 className='sub-title'>€10,000 Cashback</h2>
                                <button className='action-btn'>
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={gradientStyle3}>
                        <div className='carousel-item' style={background3}>
                            <div className='content-wrapper'>
                                <span className='badge'>Exclusive Deal</span>
                                <h2 className='main-title'>
                                    Get 100 Free Spins
                                </h2>
                                <h2 className='sub-title'>
                                    on Your First Deposit
                                </h2>
                                <button className='action-btn'>
                                    Start Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselSection;

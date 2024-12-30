import React, { useState } from 'react';
import Slider from 'react-slick';
import './ExclusiveGames.scss';
import { Flex } from 'antd';

import Img1 from '../../assets/games/image.png';
import Img2 from '../../assets/games/2.png';

const ExclusiveGames: React.FC = () => {
    const games = [
        {
            status: 'HOT',
            title: 'Teddy Gaming',
            provider: 'Teddy',
            image: Img1,
        },
        { status: 'HOT', title: 'Yelplay', provider: 'Yelplay', image: Img2 },
        {
            status: 'NEW',
            title: 'Evolution',
            provider: 'Evolution',
            image: Img2,
        },
        {
            status: 'HOT',
            title: 'Teddy Gaming',
            provider: 'Teddy',
            image: Img2,
        },
        {
            status: 'HOT',
            title: 'Teddy Gaming',
            provider: 'Teddy',
            image: Img1,
        },
        { status: 'HOT', title: 'Yelplay', provider: 'Yelplay', image: Img2 },
        {
            status: 'NEW',
            title: 'Evolution',
            provider: 'Evolution',
            image: Img2,
        },
        {
            status: 'HOT',
            title: 'Teddy Gaming',
            provider: 'Teddy',
            image: Img2,
        },
        { status: 'HOT', title: 'Yelplay', provider: 'Yelplay', image: Img2 },
        {
            status: 'NEW',
            title: 'Evolution',
            provider: 'Evolution',
            image: Img2,
        },
        {
            status: 'HOT',
            title: 'Teddy Gaming',
            provider: 'Teddy',
            image: Img1,
        },
        { status: 'HOT', title: 'Yelplay', provider: 'Yelplay', image: Img2 },
        {
            status: 'NEW',
            title: 'Evolution',
            provider: 'Evolution',
            image: Img1,
        },
        { status: 'NEW', title: 'VSLPlay', provider: 'VSLPlay', image: Img1 },
        {
            status: '',
            title: 'Deep Dive',
            provider: 'BluePlay',
            image: Img1,
        },
        {
            status: '',
            title: 'Match 3',
            provider: 'Yelplay',
            image: Img1,
        },
        {
            status: 'HOT',
            title: 'Fury Balloon',
            provider: 'Yelplay',
            image: Img2,
        },
        {
            status: '',
            title: 'Night Hunt',
            provider: 'NightPlay',
            image: Img1,
        },
    ];
    const [showAll, setShowAll] = useState(false);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7.3,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className='games-container'>
            <div className='wrapper'>
                <div className='header'>
                    <h2>Exclusive Games</h2>
                    <button
                        className='see-all'
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : 'See All'}
                    </button>
                </div>
                {!showAll ? (
                    <Slider {...settings}>
                        {games.map((game, index) => (
                            <div>
                                <div
                                    key={index}
                                    className='thumbnail'
                                    style={{
                                        backgroundImage: `url(${game.image})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    {game.status && (
                                        <span
                                            className={`status ${game.status.toLowerCase()}`}
                                        >
                                            {game.status}
                                        </span>
                                    )}
                                </div>
                                <p style={{ textAlign: 'center' }}>
                                    {game.title}
                                </p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <Flex wrap gap='small'>
                        {games.map((game, index) => (
                            <div>
                                <div
                                    key={index}
                                    className='thumbnail2'
                                    style={{
                                        backgroundImage: `url(${game.image})`,
                                        backgroundSize: 'auto',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    {game.status && (
                                        <span
                                            className={`status ${game.status.toLowerCase()}`}
                                        >
                                            {game.status}
                                        </span>
                                    )}
                                </div>
                                <p style={{ textAlign: 'center' }}>
                                    {game.title}
                                </p>
                            </div>
                        ))}
                    </Flex>
                )}
            </div>
        </div>
    );
};

export default ExclusiveGames;

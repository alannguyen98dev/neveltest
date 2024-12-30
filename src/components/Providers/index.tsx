import React, { useMemo, useRef, useState } from 'react';
import './AllProviders.scss';
import useWindowDimensions from '../../hooks';
import Pro1 from '../../assets/providers/1.svg';
import Pro2 from '../../assets/providers/2.svg';

interface Provider {
    logo: string;
    name: string;
    gamesCount: number;
}

const AllProviders: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();
    const providers: Provider[] = [
        {
            logo: Pro1,
            name: 'Evolution',
            gamesCount: 312,
        },
        { logo: Pro2, name: 'Spribe', gamesCount: 12 },
        { logo: Pro1, name: 'YelPlay', gamesCount: 9 },
        {
            logo: Pro1,
            name: 'Turbo Games',
            gamesCount: 36,
        },
        {
            logo: Pro1,
            name: 'SmartSoft Gaming',
            gamesCount: 37,
        },
        {
            logo: Pro2,
            name: '100HP Gaming',
            gamesCount: 7,
        },
        { logo: Pro1, name: 'BGaming', gamesCount: 166 },
        { logo: Pro2, name: 'Wazdan', gamesCount: 199 },
        {
            logo: Pro2,
            name: 'New Provider',
            gamesCount: 50,
        },
        {
            logo: Pro2,
            name: 'New Provider',
            gamesCount: 50,
        },
        {
            logo: Pro1,
            name: 'New Provider',
            gamesCount: 50,
        },
    ];

    const numberSlice = useMemo(() => {
        console.log(rowRef.current);

        if (rowRef.current !== null) {
            const childDivs = Array.from(
                rowRef.current.children
            ) as HTMLDivElement[];
            const firstRowOffsetTop = childDivs[0]?.offsetTop || 0;
            const count = childDivs.filter(
                (div) => div.offsetTop === firstRowOffsetTop
            ).length;
            return count;
        } else {
            console.log(123, width);

            if (width <= 426) {
                return 3;
            }
            if (width <= 1312) {
                return 6;
            }
            if (width <= 1480) {
                return 7;
            }
            if (width > 1480) {
                return 8;
            }
        }
    }, [width]);

    const visibleProviders = showAll
        ? providers
        : providers.slice(0, numberSlice);

    return (
        <section className='all-providers'>
            <div className='wrapper'>
                <div className='header'>
                    <h2>All Providers</h2>
                    <button
                        className='see-all'
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : 'See All'}
                    </button>
                </div>
                <div ref={rowRef} className='providers-container'>
                    {visibleProviders.map((provider, index) => (
                        <div key={index} className='provider-card'>
                            <img
                                src={provider.logo}
                                alt={provider.name}
                                className='provider-logo'
                            />
                            <h3 className='provider-name'>{provider.name}</h3>
                            <p className='games-count'>
                                {provider.gamesCount} games
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProviders;

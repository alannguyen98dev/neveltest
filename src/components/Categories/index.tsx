import React, { useEffect, useState } from 'react';
import './Categories.scss';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const defaultButton = [
    { icon: '💎', label: 'Diamond mine' },
    { icon: '👑', label: 'VIP' },
    { icon: '🎁', label: 'Promotion' },
    { icon: '🔥', label: 'Hot Match' },
    { icon: '🔄', label: 'P2P Transaction' },
    { icon: '🎮', label: 'Games', disabled: true },
    { icon: '⚙️', label: 'Providers', disabled: true },
];

const CategoryButtons: React.FC = () => {
    const screen = useBreakpoint();
    const [categories, setCategories] = useState(defaultButton);

    useEffect(() => {
        if (screen.xs) {
            setCategories([
                { icon: '🔎', label: 'Search', disabled: true },
                { icon: '🎮', label: 'Games', disabled: true },
                { icon: '⚙️', label: 'Providers', disabled: true },
            ]);
        } else {
            setCategories(defaultButton);
        }
    }, [screen]);

    return (
        <div className='category-buttons'>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className='category-button'
                    disabled={category.disabled}
                >
                    <span className='icon'>{category.icon}</span>
                    <span className='label'>{category.label}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;

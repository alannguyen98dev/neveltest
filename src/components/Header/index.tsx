import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Menu } from 'antd';
import './Header.scss';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import WhiteLogo from '../../assets/White_logo.svg';

const HeaderSection: React.FC = () => {
    const screen = useBreakpoint();

    return (
        <header className='header'>
            <Flex className='container' justify='space-between' align='center'>
                <Flex gap={56} align='center'>
                    <Flex gap={32} align='center'>
                        {screen.xs && <MenuOutlined className='menu-icon' />}
                        <img src={WhiteLogo} alt='Logo' className='logo' />
                    </Flex>
                    <Flex align='center'>
                        <SearchOutlined className='search-icon' />
                        {!screen.xs && (
                            <Menu mode='horizontal' className='menu'>
                                <Menu.Item className='menu-text' key='home'>
                                    Home
                                </Menu.Item>
                                <Menu.Item className='menu-text' key='game'>
                                    Game
                                </Menu.Item>
                                <Menu.Item className='menu-text' key='info'>
                                    Info
                                </Menu.Item>
                                <Menu.Item className='menu-text' key='news'>
                                    News
                                </Menu.Item>
                                <Menu.Item
                                    className='menu-text'
                                    key='promotions'
                                >
                                    Promotions
                                </Menu.Item>
                                <Menu.Item className='menu-text' key='vip'>
                                    VIP
                                </Menu.Item>
                            </Menu>
                        )}
                    </Flex>
                </Flex>
                <Flex gap={16} align='center'>
                    <Button className='login-btn'>Login</Button>
                    <Button className='register-btn' type='primary'>
                        Registration
                    </Button>
                </Flex>
            </Flex>
        </header>
    );
};

export default HeaderSection;

import React from 'react';
import { Collapse, Button, Space } from 'antd';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    MessageOutlined,
    AppleOutlined,
    AndroidOutlined,
} from '@ant-design/icons';
import './Footer.scss';

const { Panel } = Collapse;

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                {/* Desktop View */}
                <div className='footer-desktop'>
                    <div className='footer-section help-center'>
                        <h3>Help Center</h3>
                        <p>If you have any questions?</p>
                        <Button type='primary' className='get-answers-btn'>
                            GET ANSWERS
                        </Button>
                        <Space className='social-icons'>
                            <MessageOutlined />
                            <FacebookOutlined />
                            <InstagramOutlined />
                            <TwitterOutlined />
                        </Space>
                    </div>

                    <div className='footer-section'>
                        <h3>Games</h3>
                        <ul>
                            <li>
                                <a href='#'>Game 1</a>
                            </li>
                            <li>
                                <a href='#'>Game 2</a>
                            </li>
                            <li>
                                <a href='#'>Game 3</a>
                            </li>
                            <li>
                                <a href='#'>Game 14</a>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-section'>
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='#'>Promotions</a>
                            </li>
                            <li>
                                <a href='#'>VIP</a>
                            </li>
                            <li>
                                <a href='#'>Help Center</a>
                            </li>
                            <li>
                                <a href='#'>Awards & Certificates</a>
                            </li>
                            <li>
                                <a href='#'>App</a>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-section'>
                        <h3>Legal Information</h3>
                        <ul>
                            <li>
                                <a href='#'>General Terms & Conditions</a>
                            </li>
                            <li>
                                <a href='#'>Responsible Gaming Policy</a>
                            </li>
                            <li>
                                <a href='#'>Sports Betting Rules</a>
                            </li>
                            <li>
                                <a href='#'>Privacy and Cookies Policy</a>
                            </li>
                            <li>
                                <a href='#'>Payment Methods</a>
                            </li>
                            <li>
                                <a href='#'>Limits</a>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-section app-links'>
                        <h3>Bluechip App for</h3>
                        <Button icon={<AppleOutlined />} block>
                            Mac OS
                        </Button>
                        <Button icon={<AndroidOutlined />} block>
                            Android
                        </Button>
                        <Button icon={<AppleOutlined />} block>
                            iOS
                        </Button>
                    </div>
                </div>

                {/* Mobile View */}
                <div className='footer-mobile'>
                    <Collapse accordion className='collapse'>
                        <Panel header='About' key='2'>
                            <ul>
                                <li>
                                    <a href='#'>Game 1</a>
                                </li>
                                <li>
                                    <a href='#'>Game 2</a>
                                </li>
                                <li>
                                    <a href='#'>Game 3</a>
                                </li>
                                <li>
                                    <a href='#'>Game 14</a>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <Collapse accordion className='collapse'>
                        <Panel header='About' key='2'>
                            <ul>
                                <li>
                                    <a href='#'>About Us</a>
                                </li>
                                <li>
                                    <a href='#'>Promotions</a>
                                </li>
                                <li>
                                    <a href='#'>VIP</a>
                                </li>
                                <li>
                                    <a href='#'>Help Center</a>
                                </li>
                                <li>
                                    <a href='#'>Awards & Certificates</a>
                                </li>
                                <li>
                                    <a href='#'>App</a>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <Collapse accordion className='collapse'>
                        <Panel header='Legal Information' key='3'>
                            <ul>
                                <li>
                                    <a href='#'>General Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href='#'>Responsible Gaming Policy</a>
                                </li>
                                <li>
                                    <a href='#'>Sports Betting Rules</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy and Cookies Policy</a>
                                </li>
                                <li>
                                    <a href='#'>Payment Methods</a>
                                </li>
                                <li>
                                    <a href='#'>Limits</a>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>

                    <h3>Follow Us</h3>
                    <Space className='social-icons'>
                        <MessageOutlined />
                        <FacebookOutlined />
                        <InstagramOutlined />
                        <TwitterOutlined />
                    </Space>

                    <div className='help-center-mobile'>
                        <h3>Help Center</h3>
                        <p>If you have any questions?</p>
                        <Button type='primary' className='get-answers-btn'>
                            GET ANSWERS
                        </Button>
                    </div>

                    <div className='app-links'>
                        <Button icon={<AndroidOutlined />} block>
                            Bluechip App for Android
                        </Button>
                        <Button icon={<AppleOutlined />} block>
                            Bluechip App for iOS
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

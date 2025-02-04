import { useEffect, useState } from 'react';

import { useTelegram } from '@/hooks';

import Footer from './Footer';

import styles from './startPage.module.css';

const StartPage = () => {
    const [resource, setResource] = useState('');
    const { tg } = useTelegram();

    const handleClick = (e) => {
        e.preventDefault();

        tg.sendData(
            JSON.stringify({
                resource,
            }),
        );
    };

    return (
        <div className="main">
            <div className={styles.container}>
                <div className={styles.heading}>Запустим проверку?</div>
                <div className={styles.subheading}>
                    Введите в поле ниже ссылку на страницу ВК
                </div>
                <input
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                    type="text"
                    placeholder="https://vk.com/"
                />

                <button className={styles.button} onClick={handleClick}>
                    НАЧАТЬ
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default StartPage;

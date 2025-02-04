import { Navigate, NavLink, useLocation } from 'react-router-dom';

import { useTelegram } from '@/hooks';

import diamondActive from '../img/diamond-active.svg';
import diamond from '../img/diamond.svg';
import historyActive from '../img/history-active.svg';
import history from '../img/history.svg';
import likeActive from '../img/like-active.svg';
import like from '../img/like.svg';
import searchIconActive from '../img/searchIcon-active.svg';
import searchIcon from '../img/searchIcon.svg';

import styles from './footer.module.css';

const navItems = [
    {
        activeIcon: searchIconActive,
        inactiveIcon: searchIcon,
        path: '/reactjs-js-template/',
    },
    {
        activeIcon: historyActive,
        inactiveIcon: history,
        path: '/history',
    },
    {
        activeIcon: diamondActive,
        inactiveIcon: diamond,
        path: '/tarifs',
    },
    {
        activeIcon: likeActive,
        inactiveIcon: like,
        path: '/heart',
    },
];

const Footer = () => {
    const location = useLocation();

    const { tg } = useTelegram();

    if (location.pathname === '/') {
        return <Navigate to="/reactjs-js-template/" replace />;
    }

    return (
        <div
            className="main"
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <div className={styles.footer}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `${styles.footerButton} ${isActive ? styles.active : ''}`
                        }
                        style={({ isActive }) => ({
                            background: 'none',
                            border: 'none',
                            opacity: isActive ? 1 : 0.5,
                        })}
                        onClick={() => tg.HapticFeedback.impactOccurred('soft')}
                    >
                        <img
                            src={
                                location.pathname.startsWith(item.path)
                                    ? item.activeIcon
                                    : item.inactiveIcon
                            }
                            className={styles.footerIcon}
                            style={{ width: 24, height: 24 }}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Footer;

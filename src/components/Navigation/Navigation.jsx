import s from "./Navigation.module.css"
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <header>
            <nav className={s.nav}>
                <NavLink to="/" className={({ isActive }) => clsx(s.link, isActive && s.active)} >
                    Home
                </NavLink>
                <NavLink to="/movies" className={buildLinkClass} >
                    Movies
                </NavLink>
                <section>
                    <Outlet/>
                </section>
            </nav>
        </header>
    )
}

export default Navigation;
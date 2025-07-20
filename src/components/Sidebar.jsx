import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const getStyles = ({ isActive }) => {
        const styles = 'flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-tr-full rounded-br-full text-current transition-colors text-base sm:text-base md:text-lg lg:text-lg';
        return isActive
            ? `bg-rose-500 text-white ${styles}`
            : `hover:bg-rose-500 hover:text-white ${styles}`;
    };

    return (
        <>
            <button
                className='sm:hidden fixed z-20 top-12 sm:top-14 left-2 p-1 sm:p-2 bg-indigo-800 text-white rounded-md'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-icons-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
            <aside
                className={`flex flex-col gap-2 sm:gap-3 border-r-4 border-gray-200 w-35 sm:w-40 md:w-48 h-screen p-2 bg-slate-50 fixed left-0 top-12 sm:top-14  md:top-16 transition-transform duration-300 ${
                    isOpen ? 'translate-x-0 ' : '-translate-x-full sm:translate-x-0'
                } overflow-y-auto z-10`}
            >
                <NavLink className={getStyles} to='/' onClick={() => setIsOpen(false)}>
                    <span className="material-icons-outlined">home</span>Home
                </NavLink>
                <NavLink className={getStyles} to='/archive' onClick={() => setIsOpen(false)}>
                    <span className="material-icons-outlined">archive</span>Archive
                </NavLink>
                <NavLink className={getStyles} to='/important' onClick={() => setIsOpen(false)}>
                    <span className="material-icons-outlined">label_important</span>Important
                </NavLink>
                <NavLink className={getStyles} to='/bin' onClick={() => setIsOpen(false)}>
                    <span className="material-icons-outlined">delete</span>Bin
                </NavLink>
            </aside>
        </>
    );
};
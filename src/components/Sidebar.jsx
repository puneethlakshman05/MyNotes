import { NavLink,  } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse,faArchive } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {

    const getStyles = ({ isActive }) => {
        const styles='flex align-center gap-1 px-3 py-2 rounded-tr-full rounded-br-full text-current'
        return isActive ? `bg-rose-500 ${styles} `: "hover:bg-rose-500 flex align-center gap-1 px-3 py-2 flex align-center gap-1 rounded-tr-full rounded-br-full  "
    
    }
    return(
        <aside className='flex flex-col gap-3 border-r-4 border-gray-200 w-[150px] h-screen p-2'>
            <NavLink className={getStyles} to='/'>
           <span class="material-icons-outlined">
            home</span>Home
            </NavLink>

            <NavLink className={getStyles} to='/archive'>
            <span class="material-icons-outlined">
            archive</span>Archive
            </NavLink>

           <NavLink className={getStyles}to='/important'>
           <span className="material-icons-outlined">
           label_important</span> Important
           </NavLink>

           <NavLink className={getStyles} to='/bin'>
           <span class="material-icons-outlined">
           delete</span> Bin
           </NavLink>

        </aside>
    )
}
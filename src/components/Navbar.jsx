import logo from '../assets/note3.png';

export const Navbar = () => {
    return (
        <header className='flex items-center justify-between px-2 sm:px-3 md:px-4 py-1 sm:py-2 border-b-4 fixed z-10 h-12 sm:h-14 md:h-16 w-full bg-slate-50 top-0 left-0'>
            <div className='flex items-center gap-1 sm:gap-2'>
                <div className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10'>
                    <img className='w-full h-full object-contain' src={logo} alt='logo' />
                </div>
                <h1 className='text-indigo-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>NoteIt</h1>
            </div>
        </header>
    );
};
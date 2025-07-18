import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { useNotes } from "./context/notes-context"
import { NotesCard } from "../components/NotesCard"

export const Important = () => {
    const { important } = useNotes();
    return (
        <>
            <Navbar />
             <main className="flex gap-2 sm:gap-3 bg-slate-100 min-h-screen">
                <Sidebar />
                <div className="flex flex-col w-full mt-12 sm:mt-14 md:mt-16 pl-12 sm:pl-32 md:pl-48 pr-2 sm:pr-3 md:pr-4 relative z-0">
                    {important?.length > 0 ? (
                        <div className="mt-4 sm:mt-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-center sm:text-left sm:ml-[170px] md:ml-[200px]">Important Notes</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 lg:ml-5">
                                {important.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full h-screen">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                                No Notes were made Important to Show !!!
                            </h1>
                        </div>
                    )}
                </div>
            </main>
        </>

    )

}
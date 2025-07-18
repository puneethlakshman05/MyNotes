import { Navbar } from '../components/Navbar.jsx';
import { NotesCard } from '../components/NotesCard.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { useNotes } from './context/notes-context.jsx';

export const Home = () => {
    const { text, title, notes, archive, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value
        });
    };

    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        });
    };

    const onAddClick = () => {
        notesDispatch({ type: "ADD_NOTE" });
        notesDispatch({ type: "CLEAR_INPUT" });
    };

    console.log(notes);
    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
    console.log(archive);

    return (
        <>
            <Navbar />
            <main className="flex gap-2 sm:gap-3 bg-slate-100 min-h-screen">
                <Sidebar />
                <div className="flex flex-col w-full mt-[60px] pl-12 sm:pl-[150px] pr-2 sm:pr-3 relative z-0">
                    <div className="flex flex-col w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[450px] relative mt-4 sm:mt-6 self-center">
                        <input
                            value={title}
                            onChange={onTitleChange}
                            className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1 xs:p-2 text-sm xs:text-base lg:text-lg"
                            placeholder="Enter Title"
                        />
                        <textarea
                            value={text}
                            onChange={onTextChange}
                            className="border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1 xs:p-2 h-20 xs:h-24 text-sm xs:text-base lg:text-lg"
                            placeholder="Enter Text"
                        />
                        <button
                            disabled={title.length === 0}
                            onClick={onAddClick}
                            className="w-6 h-6 xs:w-7 xs:h-7 absolute bottom-1 xs:bottom-2 right-1 xs:right-2 bg-indigo-800 text-slate-50 rounded-full disabled:opacity-50"
                        >
                            <span className="material-icons-outlined">add</span>
                        </button>
                    </div>
                    <div className="mt-8 sm:mt-10 flex flex-col">
                        {pinnedNotes?.length > 0 && (
                            <div>
                                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 lg:ml-[50px]">Pinned Notes</h3>
                                <div className="flex gap-4 flex-wrap mt-2 mb-4">
                                    {pinnedNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col mt-6 sm:mt-8">
                            {pinnedNotes?.length > 0 && (
                                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 lg:ml-[50px]">Other Notes</h3>
                            )}
                            <div className="flex gap-4 flex-wrap mt-2 mb-4">
                                {otherNotes?.length > 0 &&
                                    otherNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
import { useNotes } from "../pages/context/notes-context";
import { findNotesInArchive } from "../utils/findNotesInArchive";
import { findNotesInBin } from "../utils/findNotesInBin";
import { findNotesInImportant } from "../utils/findNotesInImportant";

export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive, bin, important } = useNotes();

    const onPinClick = (id) => {
        !isPinned
            ? notesDispatch({ type: "PIN", 
                payload: id
             })
            : notesDispatch({ type: "UNPIN", 
                payload: id 
            });
    };

    const isNotesInArchived = findNotesInArchive(archive, id);
    console.log(isNotesInArchived);
    const onArchiveClick = (id) => {
        !isNotesInArchived
            ? notesDispatch({ type: "ARCHIVE",
                 payload: id 
                })
            : notesDispatch({ type: "UNARCHIVE",
                 payload: id 
                });
    };

    const isNotesInBin = findNotesInBin(bin, id);
    console.log(isNotesInBin);
    const onRemoveClick = (id) => {
        !isNotesInBin
            ? notesDispatch({ type: "REMOVE",
                 payload: id
                 })
            : notesDispatch({ type: "DELETE", 
                payload: id 
            });
    };

    const isNotesInImportant = findNotesInImportant(important, id);
    console.log(isNotesInImportant);
    const onImportantClick = (id) => {
        !isNotesInImportant
            ? notesDispatch({ type: "ADD_TO_IMPORTANT", 
                payload: id })
            : notesDispatch({ type: "REMOVE_FROM_IMPORTANT", 
                payload: id });
    };

    return (
        <div
            className="border bg-white p-2 xs:p-3 sm:p-4 rounded-md w-[330px] shadow-xl hover:transition-transform hover:scale-110 transition-all mx-auto"
            key={id}
        >
            <div className="flex justify-between items-center ">
                <p className="text-sm xs:text-base sm:text-lg font-semibold truncate">{title}</p>
                {!isNotesInArchived && !isNotesInBin && !isNotesInImportant && (
                    <button onClick={() => onPinClick(id)}>
                        <span className={isPinned ? "material-icons" : "material-icons-outlined"}>
                            push_pin
                        </span>
                    </button>
                )}
            </div>
            <div className="flex flex-col p-2 xs:p-3 sm:p-4 max-h-40 ">
                <p className="text-xs xs:text-sm sm:text-base break-words">{text}</p>
                <div className="flex gap-1 xs:gap-2 sm:gap-3 mt-2 ml-auto mb-0">
                    <button onClick={() => onArchiveClick(id)}>
                        <span className={isNotesInArchived ? "material-icons" : "material-icons-outlined"}>
                            archive
                        </span>
                    </button>
                    <button onClick={() => onImportantClick(id)}>
                        <span className={isNotesInImportant ? "material-icons" : "material-icons-outlined"}>
                            {isNotesInImportant ? "star" : "star_border"}
                        </span>
                    </button>
                    <button onClick={() => onRemoveClick(id)}>
                        <span className={isNotesInBin ? "material-icons" : "material-icons-outlined"}>
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
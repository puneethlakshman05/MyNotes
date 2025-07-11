import { useNotes } from "../pages/context/notes-context";
import { findNotesInArchive } from "../utils/findNotesInArchive";

export const NotesCard = ({id,title,text,isPinned}) => {


    const {notesDispatch,archive} = useNotes();
const onPinClick = (id) => {
    !isPinned ? notesDispatch({
        type: "PIN",
        payload: id
    }) : notesDispatch({
        type: "UNPIN",
        payload: id
    })
}
const onArchiveClick = (id) => {
    !isNotesInArchived ? notesDispatch({
        type: "ARCHIVE",
        payload: id
    })
    : notesDispatch({
        type: "UNARCHIVE",
        payload: id
    })
}

   

    const isNotesInArchived = findNotesInArchive(archive, id);
    return(
    <div className='w-60  border border-neutral-800 p-2 rounded-md w-[300px]' key={id}>
                                        <div className='flex justify-between '>
                                            <p>{title}</p>
                                            {
                                                !isNotesInArchived ?
                                                    <button onClick={() => onPinClick(id)}>
                                                        <span className={ isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                                                        </button> : <></>
                                            }

                                        </div>
                                        <div className='flex flex-col p-2'>
                                            <p>{text}</p>
                                            <div className='ml-auto'>
                                            <button onClick={() => onArchiveClick (id)}>
                                                <span className={isNotesInArchived?"material-icons":"material-icons-outlined"}>archive</span></button>
                                            <button>
                                                <span className="material-icons-outlined">delete</span></button>
                                                </div>
                                        </div>
                                    </div>
    )

}
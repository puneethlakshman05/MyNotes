
import{ Navbar } from '../components/Navbar.jsx'
import { NotesCard } from '../components/NotesCard.jsx'
import { Sidebar } from '../components/Sidebar.jsx'
import { useNotes } from './context/notes-context.jsx'
// import { useReducer } from 'react'
export const Home = () =>{

    // const[text, setText] = useState("");
    // const[title, setTitle] = useState("");
    // const [notes, setNotes] = 
const {text, title, notes, archive, notesDispatch} = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE", 
            payload: e.target.value
        })
    }
        const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT", 
            payload: e.target.value
        })
    }
        const onAddClick = () => {
        notesDispatch({
            type: "ADD_NOTE"})
        notesDispatch({
            type: "CLEAR_INPUT"})
        }

        console.log(notes);

        const pinnedNotes = notes?.length >0 && notes.filter(({isPinned}) => isPinned);
        const otherNotes = notes?.length >0 && notes.filter(({isPinned}) => !isPinned);
        console.log(archive)


    return(
        <>
            <Navbar/>
            <main className='flex gap-3'>
                <Sidebar/>
                <div className='flex flex-col  w-screen mt-7'>
                    <div className='flex flex-col w-[450px]  relative mt-[10px] self-center'  >
                        <input  value={title} onChange={onTitleChange}
                        className='border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1' placeholder='Enter Title'/>
                        <textarea value={text} onChange={onTextChange} 
                        className='border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1 h-[100px]'  placeholder='Enter Text'/>
                        <button disabled={title.length === 0} onClick={onAddClick} className='w-7 h-7 absolute bottom-0 right-0  bg-indigo-800 text-slate-50 rounded-full'>
                            <span class="material-icons-outlined">add</span>
                        </button>
                    </div>
                    <div className='mt-14 ml-10 flex flex-col '>
                            {
                                pinnedNotes?.length >0 && (
                            <div>
                                
                                <h3>Pinned Notes</h3>
                                <div className='flex gap-4 flex-wrap mt-2 mb-4 '>
                                  
                            {
                                pinnedNotes?.length >0 && pinnedNotes.map(({id,title,text,isPinned})=>(
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned}  />
                                ))
                            }
                        </div>
                        </div>
                                )
                            }

                        <div>
                         {
                            pinnedNotes?.length >0 && <h3>Other Notes</h3> 
                            }
                        <div className='flex gap-4 flex-wrap mt-2 mb-4 '>
                      
                            {
                                otherNotes?.length >0 && otherNotes.map(({id,title,text,isPinned})=>(
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned}  />
                                ))
                            }
                        </div>
                        </div>
                        </div>
                       
                </div>
                
            </main>
        </>
    )

}
import{v4 as uuid} from 'uuid';

export const notesReducer =(state,{type,payload})=>{
    switch(type){
        case "TITLE":
            return {
                ...state,
                title: payload
            };
        case "TEXT":
            return {
                ...state,
                text: payload
            };
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, {title: state.title, text: state.text, id:uuid(), isPinned: false}],
                title: "",
                text: ""
            };
            case "CLEAR_INPUT":
            return {
                ...state,
                title: "",
                text: ""
            };
            case "PIN":
                console.log("Pin clicked", payload);
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload ? {...note, isPinned: !note.isPinned} : note
                )
            };
              case "UNPIN":
                console.log("Unpin clicked", payload);
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload ? {...note, isPinned: !note.isPinned} : note
                )
            };
            case "ARCHIVE":
                console.log("Archive clicked", payload);
            return {
                ...state,
                archive: [...state.archive, state.notes.find(note => note.id === payload)],
                notes: state.notes.filter(note => note.id !== payload)
            }
            case "UNARCHIVE":
                console.log("Unarchive clicked", payload);
            return {
                ...state,
                notes: [...state.notes, state.archive.find(note => note.id === payload)],
                archive: state.archive.filter(note => note.id !== payload)
            };
            case "REMOVE":
                return{
                    ...state,
                    bin:[...state.bin,state.notes.find(note => note.id===payload)],
                    notes: state.notes.filter(note => note.id!==payload)
                }
                case "DELETE" : 
                    return{
                        ...state,
                        bin : state.bin.filter(note => note.id !== payload)
                    }
                    case "ADD_TO_IMPORTANT":
                        return {
                            ...state,
                            important: [...state.important, state.notes.find(note => note.id === payload)],
                            notes: state.notes.filter(note => note.id !== payload)
                        }
                    case "REMOVE_FROM_IMPORTANT":
                        return {
                            ...state,
                            notes: [...state.notes, state.important.find(note => note.id === payload)],
                            important: state.important.filter(note => note.id !== payload)
                        }
    case "CLEAR_ALL":
        return {
            ...state,
            notes: [],
            archive: [],
            bin: [],
            important: []
        }

        default:
            return state;
    }
}
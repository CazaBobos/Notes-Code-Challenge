import React, { useContext } from "react";
import { v4 as uniqueId } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const UNASSIGNED_ID = 'UNASSIGNED_ID';

const NotesContext = React.createContext();

export function useNotes(){
    return useContext(NotesContext);
}

export const NotesProvider = ({children})=>{

    const [notes, setNotes] = useLocalStorage("notes",[]);
    const [categories, setCategories] = useLocalStorage("categories",[]);
    
    function addCategory({name}){
        setCategories(prevCategories =>
            (prevCategories.find(category => category.name === name))?
            prevCategories : [...prevCategories, {id: uniqueId(), name}]
        );
    }

    function getNotes(){}
    
    function saveNote(newNote){
        if(newNote.id === UNASSIGNED_ID){
            newNote.id = uniqueId();
            setNotes( previousNotes => 
                [...previousNotes, {...newNote}]
            );
        } else 
        setNotes( notes.map(note=>
            note.id === newNote.id ? newNote : note
        ));
    }
    function deleteNote({id}){
        setNotes(previousNotes =>
            previousNotes.filter(note => note.id !== id)    
        );
    }

    return(
        <NotesContext.Provider value={{
            UNASSIGNED_ID,
            categories,
            addCategory,
            notes,
            getNotes,
            saveNote,
            deleteNote
        }}>
            {children}
        </NotesContext.Provider>
    );
}
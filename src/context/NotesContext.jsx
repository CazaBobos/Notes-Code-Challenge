import React, { useContext } from "react";
import { v4 as uniqueId } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

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
    
    function addNote(newNote){
        setNotes( previousNotes => 
            [...previousNotes, {id: uniqueId(), ...newNote}]
        );
    }
    function deleteNote({id}){
        setNotes(previousNotes =>
            previousNotes.filter(note => note.id !== id)    
        );
    }
    function updateNote(){}

    return(
        <NotesContext.Provider value={{
            notes,
            getNotes,
            addNote,
            updateNote,
            deleteNote
        }}>
            {children}
        </NotesContext.Provider>
    );
}
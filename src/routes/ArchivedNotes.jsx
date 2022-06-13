import { useState } from 'react';
import { Container,Stack,Button } from 'react-bootstrap';

import {FaArchive} from 'react-icons/fa';
import DeleteModal from '../components/DeleteModal';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import { useNotes } from '../context/NotesContext';
import { useBrowser } from '../context/BrowserContext';
import { Link } from 'react-router-dom';

export default function ArchivedNotes(){

    const { appRoutes } = useBrowser();

    const { 
        notes,
        saveNote
    } = useNotes();
    
    const [showNotesModal,setShowNotesModal] = useState(false);
    const [notesModalId,setNotesModalId] = useState(null);
    function openNotesModal(id){
        setNotesModalId(id);
        setShowNotesModal(true);
    }
    
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [deleteModalId,setDeleteModalId] = useState(null);
    function openDeleteModal(id){
        setDeleteModalId(id);
        setShowDeleteModal(true);
    }
    
    function toggleArchive(note){
        note.archived = !note.archived;
        saveNote(note);
    }

    return (
    <>
        <Container className='my-4'>
            <Stack direction='horizontal' gap='3' className='mb-4'>
                <h1 className='me-auto'>My Notes</h1>
                <Button variant='outline-primary' className='d-flex align-items-center gap-2'>
                    <FaArchive/>
                    <Link to={appRoutes.myNotes} className='text-decoration-none'>
                        <span>&lt; Go back to unarchived notes</span>
                    </Link>
                </Button>
            </Stack>

            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',
                gap:'1rem',
                alignItems:'flex-start',
                marginTop: '2rem'
            }}
            >
            {notes.map(card =>
                (card.archived) ?
                <NoteCard 
                    key={card.id} 
                    title={card.title} 
                    archived={card.archived} 
                    lastEdit={card.lastEdit}
                    onArchive={()=>toggleArchive(card)}
                    onEdit={()=>openNotesModal(card.id)}
                    onDelete={()=>openDeleteModal(card.id)}
                /> : null
                )
            }
            </div>
        </Container>
        <NoteModal 
            show={showNotesModal} 
            handleClose={()=>setShowNotesModal(false)}
            noteId={notesModalId}
        /> 
        <DeleteModal 
            show={showDeleteModal} 
            handleClose={()=>setShowDeleteModal(false)}
            noteId={deleteModalId}
        />
    </>
    );
}
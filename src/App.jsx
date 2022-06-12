import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container,Stack,Button} from 'react-bootstrap';
import {FaPlus,FaArchive} from 'react-icons/fa';
import DeleteModal from './components/DeleteModal';
import NoteCard from './components/NoteCard';
import NoteModal from './components/NoteModal';
import { useNotes } from './context/NotesContext';

function App() {
    const { notes } = useNotes();
    
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
    
    return (
    <>
        <Container className='my-4'>
            <Stack direction='horizontal' gap='2' className='mb-4'>
                <h1 className='me-auto'>My Notes</h1>
                <Button variant='primary' className='d-flex align-items-center gap-2'
                    onClick={()=>openNotesModal()}>
                    <FaPlus/>
                    <span>Create Note</span>
                </Button>
                <Button variant='outline-primary' className='d-flex align-items-center gap-2'
                    onClick={()=>{/*TODO ADD HREF*/}}>
                    <FaArchive/>
                    <span>Archived Notes</span>
                </Button>
            </Stack>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',
                gap:'1rem',
                alignItems:'flex-start'
            }}
            >
            {notes.map(card =>
                <NoteCard 
                    key={card.id} 
                    title={card.title} 
                    archived={card.archived} 
                    lastEdit={card.lastEdit}
                    onEdit={()=>openNotesModal(card.id)}
                    onDelete={()=>openDeleteModal(card.id)}
                />
            )}
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

export default App;

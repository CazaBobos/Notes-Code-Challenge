import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container,Stack,Button} from 'react-bootstrap';
import {FaPlus} from 'react-icons/fa';
import NoteCard from './components/NoteCard';
import NoteModal from './components/NoteModal';
import { useNotes } from './context/NotesContext';

function App() {
    const { notes } = useNotes();
    const [showNotesModal,setShowNotesModal] = useState(false);
    return (
        <>
        <Container className='my-4'>
            <Stack direction='horizontal' gap='2' className='mb-4'>
                <h1 className='me-auto'>My Notes</h1>
                <Button variant='primary' className='d-flex align-items-center gap-2'
                    onClick={()=>setShowNotesModal(true)}>
                    <FaPlus/>
                    <span>Create Note</span>
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
                <NoteCard key={card.id} {...card}/>
            )}
            </div>
        </Container>
        <NoteModal show={showNotesModal} handleClose={()=>setShowNotesModal(false)}/>
        </>
    );
} 

export default App;

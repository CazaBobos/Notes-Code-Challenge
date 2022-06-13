import { useState } from 'react';
import { Container,Stack,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FaPlus,FaArchive} from 'react-icons/fa';
import DeleteModal from '../components/DeleteModal';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import { useNotes } from '../context/NotesContext';
import { useBrowser } from '../context/BrowserContext';
import { Link } from 'react-router-dom';

export default function MyNotes(){
    const { appRoutes } = useBrowser();

    const { 
        notes,
        categories,
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

    const [selectedCategory, setSelectedCategory] = useState('default');

    return (
    <>
        <Container className='my-4'>
            <Stack direction='horizontal' gap='3' className='mb-4'>
                <h1 className='me-auto'>My Notes</h1>
                <Button variant='primary' className='d-flex align-items-center gap-2'>
                    <FaPlus/>
                    <span>Create Note</span>
                </Button>
                <Button variant='outline-primary' className='d-flex align-items-center gap-2'
                    onClick={()=>{/*TODO ADD HREF*/}}>
                    <FaArchive/>
                    <Link to={appRoutes.archivedNotes} className='text-decoration-none'>
                        <span>Archived Notes</span>
                    </Link>
                </Button>
            </Stack>

            <Form.Select defaultValue='default' onChange={e=>setSelectedCategory(e.target.value)}>
                <option value='default'>Show All</option>
                {categories.map(category=>
                    <option 
                        key={category.id} 
                        value={category.name}
                    >
                        {category.name}
                    </option>
                )}
            </Form.Select>

            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',
                gap:'1rem',
                alignItems:'flex-start',
                marginTop: '2rem'
            }}
            >
            {(selectedCategory === 'default') ?
                notes.map(card =>
                    (!card.archived) ?
                    <NoteCard 
                        key={card.id} 
                        title={card.title} 
                        archived={card.archived} 
                        lastEdit={card.lastEdit}
                        onArchive={()=>toggleArchive(card)}
                        onEdit={()=>openNotesModal(card.id)}
                        onDelete={()=>openDeleteModal(card.id)}
                    /> : null
                ) :
                notes.map(card =>
                    (!card.archived && card.categories.includes(selectedCategory)) ?
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
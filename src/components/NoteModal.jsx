import { Modal,Form,Button, Card } from 'react-bootstrap';
import { useRef, useEffect,useState, useMemo } from "react";
import { FaBan,FaSave,FaTag } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useNotes } from "../context/NotesContext";
import getCurrentDate from "../utils/dateFormatter";
import { UNASSIGNED_ID } from "../context/NotesContext";

export default function NoteModal(props){
    const {
        show, handleClose, 
        noteId=UNASSIGNED_ID
    } = props;
    const { 
        notes, 
        saveNote, 
        saveCategory
    } = useNotes();
    
    const titleRef = useRef();
    const contentRef = useRef();
    const addCategoryRef = useRef();
    
    const currentNote = useMemo(()=>
        notes.find(note => note.id === noteId)
    ,[notes,noteId]); 

    const [categoriesList,setCategoriesList] = useState( 
        currentNote === undefined ? [] :
        currentNote.categories
    );
    
    useEffect(()=>{
        setCategoriesList( 
            currentNote === undefined ? [] :
            currentNote.categories
        );
    },[currentNote]);

    function handleSave(e){
        e.preventDefault();
        saveNote({
            id: noteId,
            title: titleRef.current.value,
            content: contentRef.current.value,
            categories: categoriesList,
            archived: false,
            lastEdit: getCurrentDate()
        });
        handleClose();
    }

    function addCategory(){
        if(addCategoryRef.current.value){
            const newCategory = addCategoryRef.current.value;
            setCategoriesList([...categoriesList,newCategory]);
            saveCategory(newCategory);
        }
    }
    
    function removeCategory(categoryName){
        setCategoriesList(categoriesList
            .filter(name => name !== categoryName)    
        );
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSave}>
                <Modal.Header>
                    <Modal.Title>
                        Create/Edit Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId='title' className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type='text' defaultValue={currentNote?.title} required />
                    </Form.Group>
                    <Form.Group controlId='content' className='mb-3'>
                        <Form.Label>Content</Form.Label>
                        <Form.Control ref={contentRef} as='textarea' defaultValue={currentNote?.content}/>
                    </Form.Group>
                    <Form.Group controlId='categories' className='mb-3'>
                        <Form.Label>Categories</Form.Label>
                        <Card className='pt-2'>
                            <ul>
                                {categoriesList.map((category,i) =>
                                    <li key={i} className='d-flex gap-2 align-items-center'>
                                        <FaTag/>
                                        <span>{category}</span>
                                        <ImCross 
                                            className='text-danger' 
                                            style={{cursor: "pointer"}}
                                            onClick={()=>removeCategory(category)}
                                        />
                                    </li>
                                )}
                            </ul>
                        </Card>
                    </Form.Group>
                    <Form.Group className='d-flex gap-3 mb-3'>
                        <Form.Control ref={addCategoryRef} type='text'/>
                        <Button variant='primary' onClick={addCategory}>Add</Button>
                    </Form.Group>

                    <div className='d-flex gap-2 justify-content-end mt-4'>
                        <Button variant='outline-danger' onClick={handleClose}
                            className='d-flex align-items-center gap-1'>
                            <FaBan/>
                            <b>Cancel</b>
                        </Button>
                        <Button variant='outline-success' type='submit'
                            className='d-flex align-items-center gap-1'>
                            <FaSave/>
                            <b>Save</b>
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    );
}
import { Modal,Form,Button } from "react-bootstrap";
import { useRef } from "react";
import { FaBan,FaSave } from 'react-icons/fa';
import { useNotes } from "../context/NotesContext";
import getCurrentDate from "../utils/dateFormatter";
import { UNASSIGNED_ID } from "../context/NotesContext";

export default function NoteModal({show, noteId=UNASSIGNED_ID, handleClose}){
    
    const titleRef = useRef();
    const contentRef = useRef();
    const categoriesRef = useRef([]);
    const { notes, saveNote} = useNotes();

    const currentNote = notes.find(note => note.id === noteId);

    function handleSave(e){
        e.preventDefault();
        saveNote({
            id: noteId,
            title: titleRef.current.value,
            content: contentRef.current.value,
            categories: categoriesRef.current.value,
            archived: false,
            lastEdit: getCurrentDate()
        });
        handleClose();
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
                        <Form.Control ref={categoriesRef} type='text'/>
                    </Form.Group>
                    <Form.Group className='d-flex gap-3 mb-3'>
                        <Form.Control type='text'/>
                        <Button variant='primary'>Add</Button>
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
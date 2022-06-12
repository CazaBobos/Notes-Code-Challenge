import { Modal,Button } from "react-bootstrap";
import { useNotes } from "../context/NotesContext";

export default function DeleteModal(props){
    const {
        show,
        handleClose, 
        noteId
    } = props;

    const {deleteNote} = useNotes();

    function handleDelete(e){
        e.preventDefault();
        deleteNote(noteId);
        handleClose();
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Modal.Title>
                    Are you sure you want to delete this note?
                </Modal.Title>
                <div className='d-flex gap-2 justify-content-around mt-4'>
                    <Button variant='outline-primary' onClick={handleDelete}>
                        <b>Yes</b>
                    </Button>
                    <Button variant='outline-primary' onClick={handleClose}>
                        <b>No</b>
                    </Button>
                </div>
                </Modal.Body>
        </Modal>
    );
}
import { Card } from 'react-bootstrap';
import {
    FaStickyNote,
    FaArchive,
    FaTrashAlt,
    FaPencilAlt,
    FaUpload
} from 'react-icons/fa';

export default function NoteCard(props){
    const {
        title = 'Default Title',
        archived = false,
        lastEdit = '00/00/0000'
    } = props;
    return(
        <Card> 
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-start gap-2'>
                        <FaStickyNote size={50} className='text-warning'/>
                        <div className='d-flex flex-column'>
                            <h6>{title}</h6>
                            <span>Last Edit: {lastEdit}</span>
                        </div>
                    </div>
                    <div className='d-flex align-items-end gap-2'>
                        {(!archived) ? <FaArchive/> : <FaUpload/>}
                        <FaPencilAlt/>
                        <FaTrashAlt className='text-danger'/>
                    </div>
                </div>
            </Card.Body>

        </Card>
    );
}
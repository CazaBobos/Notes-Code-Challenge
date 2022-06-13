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
        title,
        archived,
        lastEdit,
        onArchive,
        onEdit,
        onDelete
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
                        {(!archived) ? 
                            <FaArchive style={{cursor: "pointer"}}
                                onClick={onArchive}/> : 
                            <FaUpload style={{cursor: "pointer"}}
                                onClick={onArchive}/>
                        }
                        <FaPencilAlt style={{cursor: "pointer"}}
                            onClick={onEdit}/>
                        <FaTrashAlt style={{cursor: "pointer"}} className='text-danger'
                            onClick={onDelete}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

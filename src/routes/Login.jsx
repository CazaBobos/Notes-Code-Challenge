import { Link } from 'react-router-dom';

export default function Login() {

    return (
    <>
        Login Page
        <br/>
        <Link to='/mynotes' className='text-decoration-none'>
            <span>&lt; Go back to unarchived notes</span>
        </Link>
        <br/>
        <Link to='/archivednotes' className='text-decoration-none'>
            <span>Archived Notes</span>
        </Link>
    </>
    );
} 

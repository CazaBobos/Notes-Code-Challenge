import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import { appRoutes, BrowserProvider } from './context/BrowserContext';
import Login from './routes/Login';
import MyNotes from './routes/MyNotes';
import ArchivedNotes from './routes/ArchivedNotes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NotesProvider>
            <BrowserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route 
                            path={appRoutes.login} 
                            element={<Login/>}/>
                        <Route 
                            path={appRoutes.myNotes} 
                            element={<MyNotes/>}/>
                        <Route 
                            path={appRoutes.archivedNotes} 
                            element={<ArchivedNotes/>}/>
                    </Routes>
                </BrowserRouter>
            </BrowserProvider>
        </NotesProvider>
    </React.StrictMode>
);

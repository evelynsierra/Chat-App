import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element={< Join />}></Route>
            <Route path = "/chat" element={< Chat />}></Route>
        </Routes>
    </BrowserRouter>
);

export default App;

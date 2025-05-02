import { Routes, Route } from 'react-router-dom';
import Home from './App.tsx';
import Messages from './Messages.tsx';
import MessageDetails from './MessageDetails.tsx';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<MessageDetails />} />
        </Routes>
    );
}

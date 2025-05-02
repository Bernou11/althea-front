import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Message {
    id : number;
    nom: string;
    message: string;
    email: string;
    phone: string;
    created: string;
    treated: number | boolean;
}

export default function MessageDetail() {
    const { id } = useParams();
    const [message, setMessage] = useState<Message | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDetail() {
            try {
                const response = await axios.get<Message>(`http://localhost:3000/api/messages/${id}`);
                setMessage(response.data);
            } catch (e) {
                setError("Erreur lors du chargement du message.");
            }
        }
        fetchDetail();
    }, [id]);

    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!message) return <div className="p-4">Chargement...</div>;

    return (
        <div className="max-w-lg mx-auto p-8 bg-white rounded shadow mt-8">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl
            px-8 py-1 text-lg sm:text-xl shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition w-full md:w-auto"
                    onClick={() => navigate(`/messages`)} >Retour</button>
            <h1 className="text-xl font-bold mb-4">Détail du message</h1>
            <div className="mb-2"><b>Nom:</b> {message.nom}</div>
            <div className="mb-2"><b>Email:</b> {message.email}</div>
            <div className="mb-2"><b>Phone:</b> {message.phone}</div>
            <div className="mb-2"><b>Message:</b> {message.message}</div>
        </div>
);
}
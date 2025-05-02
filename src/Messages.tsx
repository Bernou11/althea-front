import { useEffect, useRef, useState } from "react";
import "./Messages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Message {
    id : number;
    nom: string;
    email: string;
    phone: string;
    created: Date;
    treated: number | boolean;
}

export default function Messages() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [etatFilter, setEtatFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [etatDropdownOpen, setEtatDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const filterBtnRef = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get<Message[]>(
                    "http://localhost:3000/api/messages"
                );
                setMessages(response.data);
            } catch (err: any) {
                setError("Erreur lors du chargement des messages.");
            }
        };
        fetchMessages();
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                filterBtnRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !filterBtnRef.current.contains(event.target as Node)
            ) {
                setEtatDropdownOpen(false);
            }
        }
        if (etatDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [etatDropdownOpen]);

    // Filtering
    const filteredMessages = messages.filter((msg) => {
        if (etatFilter === "all") return true;
        if (etatFilter === "traite") return msg.treated === 1 || msg.treated === true;
        if (etatFilter === "non-traite") return msg.treated === 0 || msg.treated === false;
        return true;
    });

    // Sorting
    const sortedMessages = [...filteredMessages].sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    if (error) return <div>Error: {error}</div>;
    if (!messages.length) return <div>Loading...</div>;

    return (
        <div className="relative overflow-visible">
            <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-visible">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                    </th>
                    <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    >
                        <div className="flex items-center space-x-1">
                            <span>Date</span>
                            <span className="text-gray-400">
                  {sortOrder === "asc" ? "▲" : "▼"}
                </span>
                        </div>
                    </th>
                    {/* Etat with filter icon & dropdown, always rendered */}
                    <th className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center justify-between">
                            <span>Etat</span>
                            <button
                                ref={filterBtnRef}
                                type="button"
                                className="ml-2 p-1 rounded hover:bg-gray-200"
                                onClick={() => setEtatDropdownOpen((v) => !v)}
                                tabIndex={0}
                                aria-label="Filtrer Etat"
                            >
                                {/* Funnel Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Filter dropdown, always rendered regardless of message count */}
                        {etatDropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute z-10 right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg py-1"
                            >
                                <button
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-100 ${etatFilter === "all" ? "bg-blue-100 text-blue-800" : ""}`}
                                    onClick={() => {
                                        setEtatFilter("all");
                                        setEtatDropdownOpen(false);
                                    }}
                                >
                                    Tous
                                </button>
                                <button
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-100 ${etatFilter === "traite" ? "bg-blue-100 text-blue-800" : ""}`}
                                    onClick={() => {
                                        setEtatFilter("traite");
                                        setEtatDropdownOpen(false);
                                    }}
                                >
                                    Traité
                                </button>
                                <button
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-100 ${etatFilter === "non-traite" ? "bg-blue-100 text-blue-800" : ""}`}
                                    onClick={() => {
                                        setEtatFilter("non-traite");
                                        setEtatDropdownOpen(false);
                                    }}
                                >
                                    Non traité
                                </button>
                            </div>
                        )}
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {
                    // If there are no messages after filtering, show empty row (do not hide dropdown section)
                    sortedMessages.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center text-gray-400 py-8">
                                Aucun message trouvé
                            </td>
                        </tr>
                    ) : (
                        (sortedMessages.map((msg) => (
                            <tr
                                key={msg.id}
                                className="hover:bg-gray-50 transition-colors cursor-pointer"
                                onClick={() => navigate(`/messages/${msg.id}`)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{msg.nom}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{msg.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{msg.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {new Date(msg.created).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {msg.treated === 1 || msg.treated === true ? "Traité" : "Non traité"}
                                </td>
                            </tr>
                        )))

                    )
                }
                </tbody>
            </table>
        </div>
    );
}

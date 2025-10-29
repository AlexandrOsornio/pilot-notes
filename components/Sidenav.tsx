import Link from 'next/link';
import { Note } from "@/content/Notes";

interface SidenavProps {
  notes: Note[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidenav({ notes, searchTerm, setSearchTerm, isOpen, setIsOpen }: SidenavProps) {
  return (
    <aside className={`fixed top-0 left-0 w-full md:w-64 h-screen md:h-screen bg-black shadow-md p-4 overflow-hidden hover:overflow-y-auto
    transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0 md:fixed md:left-0`}>
      <h2 className="text-xl font-bold mb-4 text-white">Topic notes</h2>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
      />
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="mb-2">
            <Link
              href={`#note-${note.id}`}
              className="text-blue-600 hover:underline"
              scroll={true}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
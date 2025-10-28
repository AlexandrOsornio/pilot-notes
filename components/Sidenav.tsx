import Link from 'next/link';
import { Note } from "@/content/Notes";

interface SidenavProps {
  notes: Note[];
}

export default function Sidenav({ notes }: SidenavProps) {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-black shadow-md p-4 overflow-hidden hover:overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-white">Topic notes</h2>
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
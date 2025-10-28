import Link from 'next/link';
import { Note } from "@/content/Notes";

interface SidenavProps {
  notes: Note[];
}

export default function Sidenav({ notes }: SidenavProps) {
  return (
    <aside className="w-64 bg-black shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Topic notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="mb-2">
            <Link
              href={`/notes/${note.id}`}
              className="text-blue-600 hover:underline">
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
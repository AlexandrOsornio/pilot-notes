import Sidenav from '@/components/Sidenav';
import NoteContent from '@/components/note_content';
import { notes } from '@/content/Notes';

export default function Home() {
  // Default to the first note if no ID is provided

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with note topics */}
      <Sidenav notes={notes} />
      {/* Main content area */}
      <main className="flex-1 p-6 bg-blue-100 overflow-y-auto ml-64">
        <ul className=''>
          {notes.map((note) => (
            <li key={note.id} id={`note-${note.id}`} className="mb-6 scroll-mt-6">
              <NoteContent note={note} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
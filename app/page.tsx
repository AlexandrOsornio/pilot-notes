import Sidenav from '@/components/Sidenav';
import NoteContent from '@/components/note_content';
import { notes } from '@/content/Notes';

export default function Home() {
  // Default to the first note if no ID is provided
  const defaultNote = notes[0];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with note topics */}
      <Sidenav notes={notes} />
      {/* Main content area */}
      <main className="flex-1 p-6 bg-blue-100">
        <NoteContent note={defaultNote} />
      </main>
    </div>
  );
}
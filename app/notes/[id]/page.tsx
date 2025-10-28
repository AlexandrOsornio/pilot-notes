import Sidenav from '@/components/Sidenav';
import NoteContent from '@/components/note_content';
import { notes } from '@/content/Notes';
import { notFound } from 'next/navigation';

interface NotePageProps {
  // `params` may be a Promise in newer Next.js runtimes; accept either and await below.
  params: { id: string } | Promise<{ id: string }>;
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = (await params) as { id: string };
  const noteId = Number(id);
  const note = notes.find((note) => note.id === noteId);

  if (!note) {
    notFound();
  }

  return (
    <div className="flex min-h-screen">
      <Sidenav notes={notes} />
      <main className="flex-1 p-6 bg-gray-100">
        <NoteContent note={note} />
      </main>
    </div>
  );
}
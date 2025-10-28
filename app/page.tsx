'use client';
import { useState } from 'react';
import Sidenav from '@/components/Sidenav';
import NoteContent from '@/components/note_content';
import { notes as allNotes } from '@/content/Notes';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Normalize search term to lowercase
  const lowerSearchTerm = searchTerm.toLowerCase();

  const filteredNotes = allNotes.filter((note) => {
    const titlematch = note.title.toLowerCase().includes(lowerSearchTerm);
    const bodymatch = note.body.toLowerCase().includes(lowerSearchTerm);
    const bulletsmatch = note.bullets.some((bullet) => bullet.toLowerCase().includes(lowerSearchTerm));
    return titlematch || bodymatch || bulletsmatch;
  })

  // Sort the filtered notes with titles with matches first and the rest after
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(lowerSearchTerm);
    const bTitleMatch = b.title.toLowerCase().includes(lowerSearchTerm);
    if (aTitleMatch && !bTitleMatch) return -1; // a before b
    if (!aTitleMatch && bTitleMatch) return 1; // b before a
    return 0; // Maintain original order for same category
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with note topics */}
      <Sidenav notes={sortedNotes} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Main content area */}
      <main className="flex-1 p-6 bg-blue-100 overflow-y-auto ml-64">
        <ul className=''>
          {sortedNotes.map((note) => (
            <li key={note.id} id={`note-${note.id}`} className="mb-6 scroll-mt-6">
              <NoteContent note={note} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
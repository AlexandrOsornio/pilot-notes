import { Note } from '@/content/Notes';

interface NoteContentProps {
  note: Note;
}

export default function NoteContent({ note }: NoteContentProps) {
  return (
    <div className='border-2 border-solid bg-white p-6 rounded-lg shadow-md'>
        <div className='text-black'>
            <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
            <p className="mb-4">{note.body}</p>
            <ul className="list-disc pl-5">
                {note.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
                ))}
            </ul>
      </div>
    </div>
  );
}
import { Note, Bullet } from '@/content/Notes';

interface NoteContentProps {
  note: Note;
}

function BulletList({ bullets, level = 0 }: { bullets: Bullet[]; level?: number }) {
  const listStyle = ['list-disc', 'list-[circle]', 'list-[square]'];
  const style = listStyle[level % listStyle.length];

  return (
    <ul className={`${style} pl-5`}>
        {bullets.map((bullet, index) => (
        <li key={index} className='whitespace-pre-line'>
          {bullet.text}
          {bullet.subBullets && (<BulletList bullets={bullet.subBullets} level={level + 1}/>)}
          </li>
        ))}
    </ul>

  )
}

export default function NoteContent({ note }: NoteContentProps) {
  return (
    <div className='border-2 border-solid bg-white p-6 rounded-lg shadow-md'>
        <div className='text-black'>
            <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
            <p className="mb-4 whitespace-pre-line">{note.body}</p>
            <BulletList bullets={note.bullets} />
      </div>
    </div>
  );
}
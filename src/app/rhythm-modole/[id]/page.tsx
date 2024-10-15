'use client';

import { useParams } from 'next/navigation';
import ModuleScreen from '@/components/module-screen';

const lessonData: Record<number, { id: number; title: string; completed: boolean; stars: number }[]> = {
    1: [
      { id: 1, title: 'Introduction to Rhythm', completed: true, stars: 3 },
      { id: 2, title: 'Basic Beat Patterns', completed: false, stars: 0 },
      { id: 3, title: 'Clapping Simple Rhythms', completed: false, stars: 0 },
      { id: 4, title: 'Rhythm Practice Challenge', completed: false, stars: 0 },
    ],
    2: [
      { id: 1, title: 'Quarter Notes and Eighth Notes', completed: true, stars: 3 },
      { id: 2, title: 'Understanding Time Signatures', completed: false, stars: 0 },
      { id: 3, title: 'Syncopation Basics', completed: false, stars: 0 },
      { id: 4, title: 'Rhythmic Accuracy Challenge', completed: false, stars: 0 },
    ],
    3: [
      { id: 1, title: 'Introduction to Groove', completed: true, stars: 3 },
      { id: 2, title: 'Groove with Eighth and Sixteenth Notes', completed: false, stars: 0 },
      { id: 3, title: 'Exploring Polyrhythms', completed: false, stars: 0 },
      { id: 4, title: 'Groove Creation Challenge', completed: false, stars: 0 },
    ],
    4: [
      { id: 1, title: 'Advanced Rhythmic Techniques', completed: true, stars: 3 },
      { id: 2, title: 'Mastering Complex Time Signatures', completed: false, stars: 0 },
      { id: 3, title: 'Syncopation Mastery', completed: false, stars: 0 },
      { id: 4, title: 'Advanced Rhythm Challenge', completed: false, stars: 0 },
    ],
  };

export default function RhythmModulePage() {
  const params = useParams();
  const id = Number(params.id); // Ensure the id is converted to a number

  // Dynamically fetch lessons based on the module ID
  const lessons = lessonData[id] || [];

  return (
    <div>
      <ModuleScreen
        title={`Rhythm Mastery Unit ${id}`}
        description={`Learn the notes in Unit ${id}`}
        lessons={lessons}
        currentLessonId={1} // Set the current lesson id dynamically if needed
      />
    </div>
  );
}

'use client';

import { useParams } from 'next/navigation';
import ModuleScreen from '@/components/module-screen';

// Example lesson data for each module
const lessonData: Record<number, { id: number; title: string; completed: boolean; stars: number }[]> = {
  1: [
    { id: 1, title: 'Introduction to C', completed: true, stars: 3 },
    { id: 2, title: 'Playing D', completed: false, stars: 0 },
    { id: 3, title: 'Mastering E', completed: false, stars: 0 },
    { id: 4, title: 'C to E Challenge', completed: false, stars: 0 },
  ],
  2: [
    { id: 1, title: 'Introduction to F', completed: true, stars: 3 },
    { id: 2, title: 'Playing G', completed: false, stars: 0 },
    { id: 3, title: 'Mastering A', completed: false, stars: 0 },
    { id: 4, title: 'F to A Challenge', completed: false, stars: 0 },
  ],
  3: [
    { id: 1, title: 'Introduction to B', completed: true, stars: 3 },
    { id: 2, title: 'Playing C', completed: false, stars: 0 },
    { id: 3, title: 'Mastering D', completed: false, stars: 0 },
    { id: 4, title: 'B to D Challenge', completed: false, stars: 0 },
  ],
  4: [
    { id: 1, title: 'Advanced Melody Techniques', completed: true, stars: 3 },
    { id: 2, title: 'Melody with Dynamics', completed: false, stars: 0 },
    { id: 3, title: 'Mastering Complex Melodies', completed: false, stars: 0 },
    { id: 4, title: 'Advanced Melody Challenge', completed: false, stars: 0 },
  ],
};

export default function MelodyModulePage() {
  const params = useParams();
  const id = Number(params.id); // Ensure the id is converted to a number

  const lessons = lessonData[id] || [];


  return (
    <div>
      <ModuleScreen
      title={`Unit ${id}`}
      description={`Learn the notes in Unit ${id}`}
      lessons={lessons} // Pass the correct lessons for the module id
      currentLessonId={1} // Set the current lesson id
      />
    </div>
  );
}

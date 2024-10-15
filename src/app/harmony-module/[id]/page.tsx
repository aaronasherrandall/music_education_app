'use client';

import { useParams } from 'next/navigation';
import ModuleScreen from '@/components/module-screen';

const lessonData: Record<number, { id: number; title: string; completed: boolean; stars: number }[]> = {
    1: [
      { id: 1, title: 'Introduction to Harmony', completed: true, stars: 3 },
      { id: 2, title: 'Simple Chords', completed: false, stars: 0 },
      { id: 3, title: 'Building Triads', completed: false, stars: 0 },
      { id: 4, title: 'Basic Harmony Challenge', completed: false, stars: 0 },
    ],
    2: [
      { id: 1, title: 'Major and Minor Chords', completed: true, stars: 3 },
      { id: 2, title: 'Creating Harmonic Progressions', completed: false, stars: 0 },
      { id: 3, title: 'Adding Suspended Chords', completed: false, stars: 0 },
      { id: 4, title: 'Chord Progression Challenge', completed: false, stars: 0 },
    ],
    3: [
      { id: 1, title: 'Advanced Chord Structures', completed: true, stars: 3 },
      { id: 2, title: 'Diminished and Augmented Chords', completed: false, stars: 0 },
      { id: 3, title: 'Inversions and Voicing', completed: false, stars: 0 },
      { id: 4, title: 'Harmony Mastery Challenge', completed: false, stars: 0 },
    ],
    4: [
      { id: 1, title: 'Harmonic Modulation', completed: true, stars: 3 },
      { id: 2, title: 'Extended Chords (9ths, 11ths, 13ths)', completed: false, stars: 0 },
      { id: 3, title: 'Creating Emotional Harmonic Progressions', completed: false, stars: 0 },
      { id: 4, title: 'Advanced Harmony Challenge', completed: false, stars: 0 },
    ],
  };

export default function HarmonyModulePage() {
  const params = useParams();
  const id = Number(params.id); // Ensure the id is converted to a number

  // Dynamically fetch lessons based on the module ID
  const lessons = lessonData[id] || [];

  return (
    <div>
      <ModuleScreen
        title={`Harmony Mastery Unit ${id}`}
        description={`Learn the notes in Unit ${id}`}
        lessons={lessons}
        currentLessonId={1} // Set the current lesson id dynamically if needed
      />
    </div>
  );
}

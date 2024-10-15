// interface Lesson {
//   id: number;
//   title: string;
//   completed: boolean;
//   stars: number;
// }

// type LessonCategory = 'melody' | 'rhythm' | 'harmony' | 'composition'; // Add other categories as needed

// type LessonData = {
//   [key in LessonCategory]: Record<number, Lesson[]>;
// };


// const lessonData: LessonData = {
//   melody: {
//     1: [
//       { id: 1, title: 'Introduction to C', completed: true, stars: 3 },
//       { id: 2, title: 'Playing D', completed: false, stars: 0 },
//       { id: 3, title: 'Mastering E', completed: false, stars: 0 },
//       { id: 4, title: 'C to E Challenge', completed: false, stars: 0 },
//     ],
//     2: [
//       { id: 1, title: 'Introduction to Scales', completed: true, stars: 3 },
//       { id: 2, title: 'Playing Major Scales', completed: false, stars: 0 },
//       { id: 3, title: 'Mastering Minor Scales', completed: false, stars: 0 },
//       { id: 4, title: 'Major to Minor Scale Challenge', completed: false, stars: 0 },
//     ],
//     3: [
//       { id: 1, title: 'Introduction to Melody Lines', completed: true, stars: 3 },
//       { id: 2, title: 'Simple Melodic Phrases', completed: false, stars: 0 },
//       { id: 3, title: 'Creating a Melody', completed: false, stars: 0 },
//       { id: 4, title: 'Melody Composition Challenge', completed: false, stars: 0 },
//     ],
//     4: [
//       { id: 1, title: 'Advanced Melody Techniques', completed: true, stars: 3 },
//       { id: 2, title: 'Melody with Dynamics', completed: false, stars: 0 },
//       { id: 3, title: 'Mastering Complex Melodies', completed: false, stars: 0 },
//       { id: 4, title: 'Advanced Melody Challenge', completed: false, stars: 0 },
//     ],
//   },
//   rhythm: {
//     1: [
//       { id: 1, title: 'Introduction to Rhythm', completed: true, stars: 3 },
//       { id: 2, title: 'Basic Beat Patterns', completed: false, stars: 0 },
//       { id: 3, title: 'Clapping Simple Rhythms', completed: false, stars: 0 },
//       { id: 4, title: 'Rhythm Practice Challenge', completed: false, stars: 0 },
//     ],
//     2: [
//       { id: 1, title: 'Quarter Notes and Eighth Notes', completed: true, stars: 3 },
//       { id: 2, title: 'Understanding Time Signatures', completed: false, stars: 0 },
//       { id: 3, title: 'Syncopation Basics', completed: false, stars: 0 },
//       { id: 4, title: 'Rhythmic Accuracy Challenge', completed: false, stars: 0 },
//     ],
//     3: [
//       { id: 1, title: 'Introduction to Groove', completed: true, stars: 3 },
//       { id: 2, title: 'Groove with Eighth and Sixteenth Notes', completed: false, stars: 0 },
//       { id: 3, title: 'Exploring Polyrhythms', completed: false, stars: 0 },
//       { id: 4, title: 'Groove Creation Challenge', completed: false, stars: 0 },
//     ],
//     4: [
//       { id: 1, title: 'Advanced Rhythmic Techniques', completed: true, stars: 3 },
//       { id: 2, title: 'Mastering Complex Time Signatures', completed: false, stars: 0 },
//       { id: 3, title: 'Syncopation Mastery', completed: false, stars: 0 },
//       { id: 4, title: 'Advanced Rhythm Challenge', completed: false, stars: 0 },
//     ],
//   },
//   harmony: {
//     1: [
//       { id: 1, title: 'Introduction to Harmony', completed: true, stars: 3 },
//       { id: 2, title: 'Simple Chords', completed: false, stars: 0 },
//       { id: 3, title: 'Building Triads', completed: false, stars: 0 },
//       { id: 4, title: 'Basic Harmony Challenge', completed: false, stars: 0 },
//     ],
//     2: [
//       { id: 1, title: 'Major and Minor Chords', completed: true, stars: 3 },
//       { id: 2, title: 'Creating Harmonic Progressions', completed: false, stars: 0 },
//       { id: 3, title: 'Adding Suspended Chords', completed: false, stars: 0 },
//       { id: 4, title: 'Chord Progression Challenge', completed: false, stars: 0 },
//     ],
//     3: [
//       { id: 1, title: 'Advanced Chord Structures', completed: true, stars: 3 },
//       { id: 2, title: 'Diminished and Augmented Chords', completed: false, stars: 0 },
//       { id: 3, title: 'Inversions and Voicing', completed: false, stars: 0 },
//       { id: 4, title: 'Harmony Mastery Challenge', completed: false, stars: 0 },
//     ],
//     4: [
//       { id: 1, title: 'Harmonic Modulation', completed: true, stars: 3 },
//       { id: 2, title: 'Extended Chords (9ths, 11ths, 13ths)', completed: false, stars: 0 },
//       { id: 3, title: 'Creating Emotional Harmonic Progressions', completed: false, stars: 0 },
//       { id: 4, title: 'Advanced Harmony Challenge', completed: false, stars: 0 },
//     ],
//   },
//   composition: {
//     1: [
//       { id: 1, title: 'Introduction to Composition', completed: true, stars: 3 },
//       { id: 2, title: 'Creating a Basic Theme', completed: false, stars: 0 },
//       { id: 3, title: 'Simple Melodic and Harmonic Ideas', completed: false, stars: 0 },
//       { id: 4, title: 'Theme and Variations Challenge', completed: false, stars: 0 },
//     ],
//     2: [
//       { id: 1, title: 'Exploring Song Structure', completed: true, stars: 3 },
//       { id: 2, title: 'Writing a Verse and Chorus', completed: false, stars: 0 },
//       { id: 3, title: 'Adding a Bridge or C-Section', completed: false, stars: 0 },
//       { id: 4, title: 'Song Structure Challenge', completed: false, stars: 0 },
//     ],
//     3: [
//       { id: 1, title: 'Orchestrating Your Composition', completed: true, stars: 3 },
//       { id: 2, title: 'Using Different Instrumentation', completed: false, stars: 0 },
//       { id: 3, title: 'Adding Depth with Dynamics', completed: false, stars: 0 },
//       { id: 4, title: 'Orchestration Challenge', completed: false, stars: 0 },
//     ],
//     4: [
//       { id: 1, title: 'Advanced Composition Techniques', completed: true, stars: 3 },
//       { id: 2, title: 'Using Modulation in Composition', completed: false, stars: 0 },
//       { id: 3, title: 'Polyrhythms and Cross-Rhythms', completed: false, stars: 0 },
//       { id: 4, title: 'Advanced Composition Challenge', completed: false, stars: 0 },
//     ],
//   },
// };

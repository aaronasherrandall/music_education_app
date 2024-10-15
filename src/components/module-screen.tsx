'use client';

interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  stars: number;
}

interface ModuleProps {
  title: string;
  description: string;
  lessons: Lesson[];
  currentLessonId: number;
}

export default function ModuleScreen({
  title,
  description,
  lessons,
  currentLessonId = 1,  // Ensure we start with the first lesson by default
}: ModuleProps) {
  return (
    <div className="container mx-auto px-4 py-8 bg-purple-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-2 text-purple-800">{title}</h1>
      <p className="text-purple-600 mb-6">{description}</p>

      <div className="flex-grow space-y-6 mb-12">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="flex items-center">
            <div className="flex flex-col items-center mr-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-purple-500' : 'bg-gray-300'
                } ${index < currentLessonId ? 'text-white' : 'text-gray-500'}`}
              >
                {index === 0 ? 'Start' : index + 1}
              </div>
              {index < lessons.length - 1 && (
                <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
              )}
            </div>
            <p className="text-lg">{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

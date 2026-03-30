'use client';

import { SubjectCard } from '@/components/SubjectCard';
import { subjects } from '@/data/subjects';
import { getProgress, calculateSubjectCompletion } from '@/lib/progress';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [subjectProgress, setSubjectProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const progress = getProgress();
    const progressMap: Record<string, number> = {};

    subjects.forEach((subject) => {
      const totalLessons = subject.topics.reduce((sum, topic) => sum + topic.lessons.length, 0);
      progressMap[subject.id] = calculateSubjectCompletion(subject.id, totalLessons);
    });

    setSubjectProgress(progressMap);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">PPL Ground School</h1>
        <p className="text-lg text-slate-600">
          Master all 9 subjects for your UK Private Pilot License
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            progress={subjectProgress[subject.id] || 0}
          />
        ))}
      </div>

      <div className="mt-12 p-6 bg-white border border-slate-200 rounded-lg">
        <h2 className="text-xl font-bold text-slate-900 mb-4">About the UK PPL(A) Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div>
            <p className="font-semibold text-slate-900 mb-1">Total Questions</p>
            <p>120 questions across 9 subjects</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Pass Mark</p>
            <p>75% in each subject</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Format</p>
            <p>Multiple choice with 4 options</p>
          </div>
        </div>
      </div>
    </div>
  );
}

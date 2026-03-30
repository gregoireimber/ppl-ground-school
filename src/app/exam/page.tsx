'use client';

import Link from 'next/link';
import { getAllSubjects } from '@/data/subjects';
import { getSubjectProgress } from '@/lib/progress';
import { useEffect, useState } from 'react';

export default function ExamSelectionPage() {
  const [mounted, setMounted] = useState(false);
  const subjects = getAllSubjects();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBestMockScore = (subjectId: string): number | null => {
    if (!mounted) return null;
    const progress = getSubjectProgress(subjectId);
    if (!progress || progress.mockExamAttempts.length === 0) return null;

    return Math.max(...progress.mockExamAttempts.map((a) => a.score));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Mock Exams</h1>
        <p className="text-sm md:text-base text-slate-600">
          Practice under real exam conditions with timed tests matching CAA exam parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {subjects.map((subject) => {
          const bestScore = getBestMockScore(subject.id);

          return (
            <div
              key={subject.id}
              className="bg-white border border-slate-200 rounded-lg p-4 md:p-6 hover:border-primary-400 transition-colors"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {subject.name}
              </h2>

              <div className="space-y-2 mb-4 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="font-medium text-slate-900">
                    {subject.examInfo.questionCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time limit:</span>
                  <span className="font-medium text-slate-900">
                    {subject.examInfo.timeLimit} minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pass mark:</span>
                  <span className="font-medium text-slate-900">
                    {subject.examInfo.passMark}%
                  </span>
                </div>
              </div>

              {bestScore !== null && (
                <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs text-slate-600 mb-1">Best Score</div>
                  <div
                    className={`text-2xl font-bold ${
                      bestScore >= subject.examInfo.passMark
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}
                  >
                    {bestScore}%
                  </div>
                </div>
              )}

              <Link
                href={`/exam/${subject.id}`}
                className="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Start Exam
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-6 md:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
        <h3 className="font-semibold text-blue-900 mb-2 text-sm md:text-base">Exam Mode Information</h3>
        <ul className="text-xs md:text-sm text-blue-800 space-y-1">
          <li>• Questions are presented one at a time with no immediate answer reveal</li>
          <li>• You can navigate between questions and change your answers</li>
          <li>• Flag questions to review later if unsure</li>
          <li>• The exam auto-submits when the timer expires</li>
          <li>• Full explanations are shown after submission</li>
        </ul>
      </div>
    </div>
  );
}

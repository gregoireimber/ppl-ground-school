'use client';

import { use } from 'react';
import { getSubjectById } from '@/data/subjects';
import Link from 'next/link';
import { ProgressBar } from '@/components/ProgressBar';

export default function SubjectPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = use(params);
  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900">Subject not found</h1>
      </div>
    );
  }

  const totalLessons = subject.topics.reduce((sum, topic) => sum + topic.lessons.length, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{subject.name}</h1>
        <p className="text-lg text-slate-600 mb-6">{subject.description}</p>

        <div className="flex items-center space-x-8 text-sm text-slate-700 mb-6">
          <div>
            <span className="font-semibold">Questions:</span> {subject.examInfo.questionCount}
          </div>
          <div>
            <span className="font-semibold">Time:</span> {subject.examInfo.timeLimit} minutes
          </div>
          <div>
            <span className="font-semibold">Pass mark:</span> {subject.examInfo.passMark}%
          </div>
        </div>

        <ProgressBar progress={0} />
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Topics</h2>

        {subject.topics.map((topic) => (
          <div
            key={topic.id}
            className="p-6 bg-white border border-slate-200 rounded-lg"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.name}</h3>
            <p className="text-sm text-slate-600 mb-4">{topic.description}</p>

            {topic.lessons.length > 0 ? (
              <div className="space-y-2">
                {topic.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/subjects/${subject.id}/${topic.id}/${lesson.id}`}
                    className="block px-4 py-3 bg-slate-50 hover:bg-primary-50 rounded-md transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-900">{lesson.title}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 italic">No lessons available yet</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        <Link
          href={`/subjects/${subject.id}/quiz`}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Practice Quiz
        </Link>
        <Link
          href={`/subjects/${subject.id}/mock-exam`}
          className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-medium hover:bg-slate-300 transition-colors"
        >
          Mock Exam
        </Link>
      </div>
    </div>
  );
}

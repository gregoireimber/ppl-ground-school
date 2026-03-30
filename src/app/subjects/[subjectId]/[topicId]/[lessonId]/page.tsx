'use client';

import { use } from 'react';
import Link from 'next/link';
import { getLessonById } from '@/data/lessons';

export default function LessonPage({
  params,
}: {
  params: Promise<{ subjectId: string; topicId: string; lessonId: string }>;
}) {
  const { subjectId, topicId, lessonId } = use(params);
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900">Lesson not found</h1>
        <Link
          href={`/subjects/${subjectId}`}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium mt-4 inline-block"
        >
          ← Back to Subject
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href={`/subjects/${subjectId}`}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to Subject
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">{lesson.title}</h1>

        <div className="prose prose-slate max-w-none">
          {lesson.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                if (block.level === 1) {
                  return (
                    <h1 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                      {block.text}
                    </h1>
                  );
                }
                if (block.level === 2) {
                  return (
                    <h2 key={index} className="text-xl font-bold text-slate-900 mt-6 mb-3">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <h3 key={index} className="text-lg font-bold text-slate-900 mt-4 mb-2">
                    {block.text}
                  </h3>
                );

              case 'paragraph':
                return (
                  <p key={index} className="text-slate-700 mb-4 leading-relaxed">
                    {block.text}
                  </p>
                );

              case 'list':
                if (block.ordered) {
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-slate-700">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-slate-700">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case 'callout':
                const colors = {
                  info: 'bg-blue-50 border-blue-200 text-blue-800',
                  warning: 'bg-amber-50 border-amber-200 text-amber-800',
                  tip: 'bg-emerald-50 border-emerald-200 text-emerald-800',
                };
                return (
                  <div key={index} className={`p-4 border-l-4 rounded mb-4 ${colors[block.variant]}`}>
                    <p className="text-sm font-medium">{block.text}</p>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>

        {lesson.keyPoints.length > 0 && (
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-slate-50 rounded-lg">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Key Points</h2>
            <ul className="space-y-2">
              {lesson.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.practiceQuestions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Practice Questions</h2>
            <p className="text-slate-600 mb-4">
              Complete the practice questions to test your understanding of this lesson.
            </p>
            <Link
              href={`/subjects/${subjectId}/quiz?lesson=${lessonId}`}
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Start Practice Questions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

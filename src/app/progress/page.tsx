'use client';

import { useEffect, useState } from 'react';
import { getProgress } from '@/lib/progress';
import { getAllSubjects } from '@/data/subjects';
import { UserProgress, QuizAttempt } from '@/types';
import Link from 'next/link';

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!progress) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="text-slate-600">Loading progress...</div>
        </div>
      </div>
    );
  }

  const allSubjects = getAllSubjects();

  // Calculate overall stats
  const allAttempts = progress.subjects.flatMap((s) => s.quizAttempts);
  const totalAttempts = allAttempts.length;
  const totalCorrect = allAttempts.reduce((sum, a) => sum + a.correctAnswers, 0);
  const totalQuestions = allAttempts.reduce((sum, a) => sum + a.questionsAttempted, 0);
  const overallScore =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Get recent attempts across all subjects
  const recentAttempts = progress.subjects
    .flatMap((sp) =>
      sp.quizAttempts.map((attempt) => ({
        ...attempt,
        subjectId: sp.subjectId,
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

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

      <h1 className="text-4xl font-bold text-slate-900 mb-8">Your Progress</h1>

      {/* Overall Stats */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overall Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600">{overallScore}%</div>
            <div className="text-sm text-slate-600 mt-1">Overall Score</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl font-bold text-slate-900">{totalAttempts}</div>
            <div className="text-sm text-slate-600 mt-1">Quizzes Taken</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl font-bold text-slate-900">{totalQuestions}</div>
            <div className="text-sm text-slate-600 mt-1">Questions Answered</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{totalCorrect}</div>
            <div className="text-sm text-slate-600 mt-1">Correct Answers</div>
          </div>
        </div>
      </div>

      {/* Per-Subject Progress */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Subject Progress</h2>
        <div className="space-y-4">
          {allSubjects.map((subject) => {
            const subjectProgress = progress.subjects.find((s) => s.subjectId === subject.id);
            const lessonsCompleted = subjectProgress?.lessonsCompleted.filter(
              (l) => l.completed
            ).length || 0;
            const totalLessons = subject.topics.reduce(
              (sum, topic) => sum + topic.lessons.length,
              0
            );
            const quizAttempts = subjectProgress?.quizAttempts || [];
            const avgScore =
              quizAttempts.length > 0
                ? Math.round(
                    quizAttempts.reduce((sum, a) => sum + a.score, 0) / quizAttempts.length
                  )
                : 0;

            return (
              <Link
                key={subject.id}
                href={`/subjects/${subject.id}`}
                className="block p-4 border border-slate-200 rounded-lg hover:border-primary-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{subject.name}</h3>
                  {quizAttempts.length > 0 && (
                    <span
                      className={`text-2xl font-bold ${
                        avgScore >= subject.examInfo.passMark
                          ? 'text-green-600'
                          : 'text-slate-600'
                      }`}
                    >
                      {avgScore}%
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Lessons: </span>
                    <span className="font-medium text-slate-900">
                      {lessonsCompleted} / {totalLessons}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-600">Quizzes: </span>
                    <span className="font-medium text-slate-900">{quizAttempts.length}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz Attempts */}
      {recentAttempts.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Recent Quiz Attempts</h2>
          <div className="space-y-3">
            {recentAttempts.map((attempt, index) => {
              const subject = allSubjects.find((s) => s.id === attempt.subjectId);
              const passed = subject ? attempt.score >= subject.examInfo.passMark : false;
              const attemptDate = new Date(attempt.date);

              return (
                <div
                  key={`${attempt.subjectId}-${index}`}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                >
                  <div>
                    <div className="font-semibold text-slate-900">
                      {subject?.name || 'Quick Quiz'}
                    </div>
                    <div className="text-sm text-slate-600">
                      {attemptDate.toLocaleDateString()} at {attemptDate.toLocaleTimeString()}
                    </div>
                    <div className="text-sm text-slate-600">
                      {attempt.correctAnswers} / {attempt.questionsAttempted} correct
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-2xl font-bold ${
                        passed ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {attempt.score}%
                    </div>
                    <div className="text-xs text-slate-600">{passed ? 'PASSED' : 'FAILED'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {totalAttempts === 0 && (
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
          <p className="text-slate-600 mb-4">You haven't taken any quizzes yet.</p>
          <Link
            href="/quiz/quick"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Take a Quick Quiz
          </Link>
        </div>
      )}
    </div>
  );
}

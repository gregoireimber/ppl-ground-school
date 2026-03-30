import Link from 'next/link';
import { Subject } from '@/types';
import { ProgressBar } from './ProgressBar';

interface SubjectCardProps {
  subject: Subject;
  progress?: number; // 0-100
}

export function SubjectCard({ subject, progress = 0 }: SubjectCardProps) {
  return (
    <Link
      href={`/subjects/${subject.id}`}
      className="block p-4 md:p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{subject.name}</h3>
        <p className="text-sm text-slate-600">{subject.description}</p>
      </div>

      <div className="space-y-3">
        <ProgressBar progress={progress} />

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-4">
            <span>{subject.examInfo.questionCount} questions</span>
            <span>{subject.examInfo.timeLimit} min</span>
          </div>
          <span className="font-medium">Pass: {subject.examInfo.passMark}%</span>
        </div>
      </div>
    </Link>
  );
}

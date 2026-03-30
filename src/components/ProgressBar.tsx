interface ProgressBarProps {
  progress: number; // 0-100
  showLabel?: boolean;
}

export function ProgressBar({ progress, showLabel = true }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-xs font-medium text-slate-700">
            {clampedProgress === 0 ? 'Not started' : `${clampedProgress}% complete`}
          </span>
        )}
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}

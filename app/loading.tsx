export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <img
          src="/witch-hat.png"
          alt="Loading"
          className="h-12 w-12 animate-spin"
          aria-hidden="true"
        />
        <span className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Loading…
        </span>
      </div>
    </div>
  );
}

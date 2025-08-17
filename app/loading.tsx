import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/witch-hat.png"
          alt="Loading"
          width={48}
          height={48}
          className="h-12 w-12 animate-spin"
          aria-hidden="true"
          loading="eager"
        />
        <span className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Loading…
        </span>
      </div>
    </div>
  );
}

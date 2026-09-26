export default function ProjectsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse border border-gray/20">
          <div className="aspect-video bg-gray/10" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-2/3 rounded bg-gray/10" />
            <div className="h-3 w-full rounded bg-gray/10" />
            <div className="h-3 w-5/6 rounded bg-gray/10" />
          </div>
        </div>
      ))}
    </div>
  )
}
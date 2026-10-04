import ProjectsSkeleton from '@/components/ProjectsSkeleton'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Loading() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32">
      <SectionHeading title="works" />
      <ProjectsSkeleton count={6} />
    </div>
  )
}
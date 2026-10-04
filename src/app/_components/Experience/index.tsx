import SectionHeading from '@/components/ui/SectionHeading'
import { experienceData } from '@/data/experience.data'

export default function Experience() {
  return (
    <div className="mt-20">
      <SectionHeading title="experience" />

      <div className="space-y-6">
        {experienceData.map((item) => (
          <div key={item.company} className="border border-gray/20 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-white">
                {item.role} <span className="text-primary">@ {item.company}</span>
              </h3>
              <span className="text-xs text-gray">{item.period}</span>
            </div>

            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-gray">
                  <span className="text-primary">#</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export interface CaseStudy {
  problem: string
  impact: string
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  // اختیاریه - وقتی پروژه واقعی اضافه بشه این فیلد پر می‌شه و کارت به‌صورت خودکار
  // بخش Case Study رو نشون می‌ده. تا وقتی خالیه، کارت مثل قبل ساده نمایش داده می‌شه.
  caseStudy?: CaseStudy
}
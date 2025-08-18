import SchoolHeader from '@/components/school-header'
import getSchoolAbouts from '@/api/getSchoolAbouts'
import getSchoolAdmissions from '@/api/getSchoolAdmissions'
import getSchoolParents from '@/api/getSchoolParents'

export default async function SchoolHeaderWrapper() {
  let schoolAbouts: { label: string; href: string }[] = []
  let schoolAdmissions: { label: string; href: string }[] = []
  let schoolParents: { label: string; href: string }[] = []

  try {
    const results = await Promise.all([
      getSchoolAbouts(true),
      getSchoolAdmissions(true),
      getSchoolParents(true),
    ])
    schoolAbouts = results[0].docs.map((doc) => ({
      label: doc.title,
      href: '/school-about?tabId=' + doc.id,
    }))
    schoolAdmissions = results[1].docs.map((doc) => ({
      label: doc.title,
      href: '/admission?tabId=' + doc.id,
    }))
    schoolParents = results[2].docs.map((doc) => ({
      label: doc.title,
      href: '/parents?tabId=' + doc.id,
    }))
  } catch (error) {
    console.error('Failed to fetch school abouts:', error)
  }

  return (
    <SchoolHeader
      schoolAbouts={schoolAbouts}
      schoolAdmissions={schoolAdmissions}
      schoolParents={schoolParents}
    />
  )
}

import SchoolHeader from '@/components/school-header'
import getSchoolAbouts from '@/api/getSchoolAbouts'
import getSchoolAdmissions from '@/api/getSchoolAdmissions'
import getSchoolParents from '@/api/getSchoolParents'
import { getLocale } from 'next-intl/server'


export default async function SchoolHeaderWrapper() {
    const locale = await getLocale()


        let schoolAbouts: { label: string; href: string }[] = []
        let schoolAdmissions: { label: string; href: string }[] = []
        let schoolParents: { label: string; href: string }[] = []

        const getLocalizedTitle = (doc: any, currentLocale: string) => {
            switch (currentLocale) {
                case 'kk':
                    return doc.titleKk || doc.title
                case 'en':
                    return doc.titleEn || doc.title
                default:
                    return doc.title
            }
        }

        try {
            const results = await Promise.all([
                getSchoolAbouts(true),
                getSchoolAdmissions(true),
                getSchoolParents(true),
            ])
            schoolAbouts = results[0].docs.map((doc) => ({
                label: getLocalizedTitle(doc, locale),
                href: '/school-about?tabId=' + doc.id,
            }))
            schoolAdmissions = results[1].docs.map((doc) => ({
                label: getLocalizedTitle(doc, locale),
                href: '/admission?tabId=' + doc.id,
            }))
            schoolParents = results[2].docs.map((doc) => ({
                label: getLocalizedTitle(doc, locale),
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


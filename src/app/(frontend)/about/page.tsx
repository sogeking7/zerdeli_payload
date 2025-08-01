import Container from '@/components/custom/Container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function AboutPage() {
  return (
    <Container>
      <Breadcrumb className="pt-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>О школе</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <div className="space-y-6 mt-8 md:my-[200px]">
          <h1 className="text-4xl font-agenor font-normal text-center sm:text-7xl">
            О Zerdeli <br />
            International School
          </h1>
          <p className="px-4 text-lg text-center font-normal sm:text-xl opacity-80 max-w-2xl mx-auto">
            ZIS — это международная школа, в которой углубленно преподают математику и логику,
            английский язык и информатику, а также воспитывают детей прививая национальную
            идентичность.
          </p>
        </div>
      </div>
    </Container>
  )
}

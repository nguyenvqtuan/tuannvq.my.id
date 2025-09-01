import { Metadata } from 'next';

import BackButton from '@/src/common/components/elements/BackButton';
import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import ProjectDetail from '@/src/modules/projects/components/ProjectDetail';
import { ProjectItem } from '@/src/common/types/projects';
import { METADATA } from '@/src/common/constants/metadata';
import { loadMdxFiles } from '@/src/lib/mdx';
// import { getProjectsDataBySlug } from '@/src/services/projects';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProjectDetail(slug);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${slug}`,
    },
  };
};

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  //   const projects = await getProjectsDataBySlug(slug);
  //   const contents = loadMdxFiles();
  //   const content = contents.find(item => item.slug === slug);
  //   const response = { ...projects, content: content?.content };
  //   const data = JSON.parse(JSON.stringify(response));
  //   return data;
  return {} as ProjectItem;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const data = await getProjectDetail(slug);

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;

import { notFound } from 'next/navigation';
import { allAbouts } from 'contentlayer/generated';
import { MDXComponent } from '@/app/ui/mdx-component';

type ParamsProps = { title: string };

async function getContent(params: ParamsProps) {
  const post = allAbouts.find((post: any) => post.title === params.title);
  if (!post) null;
  return post;
}

export async function generateStaticParams() {
  return allAbouts.map((post: any) => ({
    title: post.title.toLowerCase(),
  }));
}

export default async function Page({ params }: { params: ParamsProps }) {
  const content = await getContent(params);
  if (!content) return notFound();

  return <MDXComponent code={content.body.code} />;
}

import fs from 'fs';
import path from 'path';
import { ebGaramond, nunitoSans } from '../../_app';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image';
import { prefix } from '@/utils/prefix'

const ProjectPage = ({
  projects,
  mdxContent
}) => {
  return (
    <div className={`${ebGaramond.className} p-4`}>
      {projects.map(({
        name,
        studio,
        studioTitle,
        bioFileName,
        members
      }, index) => (
        <div key={index} className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className="flex flex-col items-center">
              <h2 className="font-medium italic text-2xl">{studio}</h2>
              <h2 className="font-semibold text-2xl">{studioTitle}</h2>
            </div>
          </div>
          {bioFileName && mdxContent?.hasOwnProperty(bioFileName) && 
            <div className={`${nunitoSans.className} text-justify flex flex-col gap-4 font-semibold`}>
              <MDXRemote {...mdxContent[bioFileName]}/>
            </div>
          }
          {
            members?.length > 0 && (
              <div className="self-start">
                <h3 className="font-semibold italic text-2xl">Proudly Presented By:</h3>
                {members.map((member, index) => (
                  <a className="flex items-center" href={member.pageUrl} key={index}>
                    <Image src={`${prefix}/${member.avatarPath}`} alt={`${name}'s character`} width={100} height={100}/>
                    <p className="font-semibold text-xl">{member.name}</p>
                  </a>
                ))}
              </div>
            )
          }
        </div>
      ))}
    </div>
  )
}

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const paths = filenames.map((filename) => {
    const project = filename.replace('.json', '');
    return { params: { project } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectsDirectory = path.join(process.cwd(), 'data/projects', params.project);
  const filePath = path.join(projectsDirectory, 'data.json');
  const props = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const mdxFiles = fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.mdx'));
  const mdxContent = {};

  for (const file of mdxFiles) {
    const mdxFilePath = path.join(projectsDirectory, file);
    const mdxSource = fs.readFileSync(mdxFilePath, 'utf8');
    const mdxKey = file.replace('.mdx', '');
    mdxContent[mdxKey] = await serialize(mdxSource);
  }

  return { props: { ...props, mdxContent } };
}

export default ProjectPage;
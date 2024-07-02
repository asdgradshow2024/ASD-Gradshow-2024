'use client'
import fs from 'fs';
import path from 'path';
import { ebGaramond, nunitoSans } from '../../../../_app'
import Image from 'next/image';
import { prefix } from '@/utils/prefix'
import { useState, useEffect } from 'react';
import { useBreakpoint } from "@/hooks/useBreakpoints";
import Link from 'next/link';

const WithWrapper = ({
  children,
  imageType,
  isAboveBreakpoint,
  ...props
}) => {
  return !isAboveBreakpoint ? children : (
    <div className={`flex items-start ${imageType !== 'portrait' ? 'flex-col' : ''}`} {...props}>
      {children}
    </div>
  )
}

const TitleGroup = ({
  name,
  studio,
  studioTitle
}) => (
  <div className="flex flex-col items-center gap-4 md:items-start">
    <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
    <div className="flex flex-col items-center md:items-start">
      <h2 className="font-medium italic text-2xl">{studio}</h2>
      <h2 className="font-semibold text-2xl">{studioTitle}</h2>
    </div>
  </div>
)

const ImageGroup = ({
  imageType,
  imagePath,
  isAboveBreakpoint,
  className
}) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  console.log({prefix})

  const handleImageLoad = ({ target }) => {
    const { naturalWidth, naturalHeight } = target;
    setAspectRatio(naturalHeight / naturalWidth);
  };

  return imageType === 'portrait' ? (
    <div
      className={`relative h-screen w-full md:w-auto md:h-auto md:flex-grow ${className}`}
      style={{ paddingTop: isAboveBreakpoint ? `${aspectRatio * 100 / 2}%` : 0 }}
    >
      <Image src={`${prefix}/${imagePath}`} fill style={{ objectFit: 'contain' }} onLoad={handleImageLoad} />
    </div>
  ) : (
    <div
      className={`relative w-full h-64 ${className}`}
      style={{ paddingTop: isAboveBreakpoint ? `${aspectRatio * 100 / 2}%` : 0 }}
    >
      <Image src={`${prefix}/${imagePath}`} fill style={{ objectFit: isAboveBreakpoint ? 'cover' : 'contain' }} />
    </div>
  )
}

const MembersGroup = ({ members }) => {
  return (
    <div className="self-start mt-6">
      <h3 className="font-semibold italic text-2xl">Proudly Presented By:</h3>
      {members.map((member, index) => (
        <Link
          className="flex items-center"
          key={index}
          href={member.pageUrl}
        >
          <Image src={`${prefix}/${member.avatarPath}`} alt={`${member.name}'s character`} width={100} height={100}/>
          <p className="font-semibold text-xl">{member.name}</p>
        </Link>
      ))}
    </div>
  )
}

const ProjectPage = ({
  projects,
}) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const { isAbove } = useBreakpoint('md')
  useEffect(() => {
    setIsAboveBreakpoint(isAbove)
  }, [isAbove])

  return (
    <div className={`${ebGaramond.className} p-4 md:p-0`}>
      {projects.map(({
        name,
        studio,
        studioTitle,
        description,
        imagePath,
        imageType,
        members
      }, index) => (
        <WithWrapper key={index} imageType={imageType} isAboveBreakpoint={isAboveBreakpoint}>
          <ImageGroup
            imagePath={imagePath}
            imageType={imageType}
            className="hidden md:inline-block"
            isAboveBreakpoint={isAboveBreakpoint}
          />
          {imageType !== 'portrait' && isAboveBreakpoint ? (
            <div key={index} className='flex items-start justify-center gap-16 py-12'>
              <div className="flex flex-col items-start gap-12 w-1/2">
                <TitleGroup name={name} studio={studio} studioTitle={studioTitle}/>
                <ImageGroup imagePath={imagePath} imageType={imageType} className="md:hidden"/>
                {description && 
                  <div className={`${nunitoSans.className} text-justify flex flex-col gap-4 font-semibold`}>
                    {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                  </div>
                }
              </div>

              {members?.length > 0 && <MembersGroup members={members}/>}
            </div>
          ) : (
            <div key={index} className="flex flex-col items-center gap-4 md:p-8 md:w-1/2 md:items-start md:gap-12 md:pr-16">
              <TitleGroup name={name} studio={studio} studioTitle={studioTitle}/>
              <ImageGroup imagePath={imagePath} imageType={imageType} className="md:hidden"/>
              {description && 
                <div className={`${nunitoSans.className} text-justify flex flex-col gap-4 font-semibold`}>
                  {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
              }
              {members?.length > 0 && <MembersGroup members={members}/>}
            </div>
          )}
        </WithWrapper>
      ))}
    </div>
  )
}

export async function getStaticPaths() {
  const modulesDirectory = path.join(process.cwd(), 'data/modules');
  const moduleNames = fs.readdirSync(modulesDirectory);
  const paths = [];
  moduleNames.forEach((moduleName) => {
    const projectsDirectory = path.join(modulesDirectory, moduleName, 'projects');
    const projectNames = fs.readdirSync(projectsDirectory);

    projectNames.forEach((project) => {
      paths.push({ params: { moduleName, project } });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { moduleName, project } = params;
  const projectsDirectory = path.join(process.cwd(), 'data/modules', moduleName, 'projects', project);
  const filePath = path.join(projectsDirectory, 'data.json');
  const props = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return { props };
}

export default ProjectPage;
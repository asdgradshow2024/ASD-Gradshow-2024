'use client'
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ebGaramond, nunito } from '@/pages/_app';
import { prefix } from '@/utils/prefix';
import { useState, useEffect } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoints';
import Link from 'next/link';

const ImageGroup = ({
  imagePath,
  isAboveBreakpoint,
  className=''
}) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [imageHeight, setImageHeight] = useState(0);

  const handleImageLoad = ({ target }) => {
    const { naturalWidth, naturalHeight } = target;
    setAspectRatio(naturalHeight / naturalWidth);
    setImageHeight(naturalHeight);
  };

  return (
    <div
      className={`relative w-full md:h-auto md:w-auto md:grow ${className}`}
      style={{ 
        paddingTop: isAboveBreakpoint ? `${aspectRatio * 100 / 2}%` : 0,
        height: !isAboveBreakpoint ? imageHeight : 'auto'
      }}
    >
      <Image src={`${prefix}/${imagePath}`} fill style={{ objectFit: 'contain' }} onLoad={handleImageLoad} />
    </div>
  )
}

const ModulePage = ({
  individualPageContent
}) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const { isAbove } = useBreakpoint('md')
  useEffect(() => {
    setIsAboveBreakpoint(isAbove)
  }, [isAbove])

  return (
    <div className={`${ebGaramond.className} flex flex-col gap-8 md:gap-14`}>
      {
        individualPageContent && individualPageContent.map((content, i) => {
          const { thumbnailPath, title, italicSubtitle1, subtitle2, description, projectsFeatured } = content;

          return (
            <div key={i}>
              <div className="flex flex-col text-justify md:flex-row md:items-start">
                <ImageGroup imagePath={thumbnailPath} isAboveBreakpoint={isAboveBreakpoint} />
                <div className="flex flex-col gap-12 p-4 md:p-12 md:w-1/2">
                  <div className="flex flex-col">
                    {title && <h1 className="font-bold text-5xl mb-4 text-left">{title}</h1>}
                    {italicSubtitle1 && <h3 className="italic text-2xl">{italicSubtitle1}</h3>}
                    {subtitle2 && <h3 className="font-semibold text-xl">{subtitle2}</h3>}
                  </div>
                  {description && (
                    <div className='flex flex-col gap-6'>
                      {description?.map((para, i) => <p key={i} className={`${nunito.className} font-semibold text-lg`}>{para}</p>)}
                    </div>
                  )}
                </div>
              </div>
              {projectsFeatured && (
                <div className='text-center px-12'>
                  <h2 className="my-12 font-bold italic text-4xl">Projects Featured</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {projectsFeatured?.map((project, i) => (
                      <div key={i}>
                        <Link href={project?.projectUrl || '/'}>
                          <div className="w-full h-[200px] relative">
                            <Image src={`${prefix}/${project.thumbnailPath}`} alt={project.title} fill style={{ objectFit: 'contain' }}/>
                          </div>
                        </Link>
                        <p className='font-bold text-lg mt-4'>{project.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticPaths() {
  const modulesDirectory = path.join(process.cwd(), 'data/modules');
  const moduleNames = fs.readdirSync(modulesDirectory);
  const paths = moduleNames.map(moduleName => ({
    params: { moduleName }
  }))

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { moduleName } = params;
  const modulesDirectory = path.join(process.cwd(), 'data/modules', moduleName);
  const filePath = path.join(modulesDirectory, 'data.json');
  const props = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return { props };
}

export default ModulePage;
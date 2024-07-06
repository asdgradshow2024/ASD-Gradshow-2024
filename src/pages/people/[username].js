import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ebGaramond, nunito } from '../_app'
import { prefix } from '@/utils/prefix'
import Link from 'next/link';

const RenderNameWithBold = ({ name, boldPart }) => {
  const parts = name.split(new RegExp(`(${boldPart})`, 'gi'));
  return (
    <h1 className={`text-center text-4xl ${ebGaramond.className} font-medium my-2 md:text-left`}>
      {parts.map((part, index) =>
        part.toLowerCase() === boldPart.toLowerCase() ? (
          <span key={index} className="font-bold">{part}</span>
        ) : (
          part
        )
      )}
    </h1>
  )
}

const ProjectElement = ({ project }) => {
  const { projectUrl, project: projectTitle, studio } = project;
  return (
    <Link href={projectUrl || '/'} className='flex flex-col justify-center items-center'>
      {/* TODO: placeholder content, to remove and use image instead */}
      <div className="w-36 h-36 rounded-sm bg-navbar-bg"></div>
      <h3 className={`${ebGaramond.className} font-bold text-xl md:text-2xl`}>{projectTitle}</h3>
      <p className={`${nunito.className} italic font-semibold text-xs md:text-sm`}>{studio}</p>
    </Link>
  )
}

const UserProfile = ({
  name,
  nameToBold,
  profilePath,
  bio,
  avatarPath,
  avatarBio,
  icons,
  projects
}) => {
  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col items-center md:flex-row md:items-stretch md:gap-6">
        <Image className='md:hidden' src={`${prefix}/${profilePath}`} alt={`${name}'s profile picture`} priority={true} width={250} height={250}/>
        <Image className='hidden md:block' src={`${prefix}/${profilePath}`} alt={`${name}'s profile picture`} priority={true} width={300} height={300}/>
        <div className="flex flex-col justify-between grow">
          <RenderNameWithBold name={name} boldPart={nameToBold}/>
          <div className={`text-justify ${nunito.className} font-semibold my-2 flex flex-col gap-4`}>
            {bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <div className='flex flex-col gap-4 items-start md:flex-row md:items-end md:justify-between'>
            <div className="flex justify-center items-end">
              <Image src={`${prefix}/${avatarPath}`} alt={`${name}'s character`} width={100} height={100}/>
              <p className={`italic ${ebGaramond.className} font-medium`}>aka {avatarBio}</p>
            </div>
            <div className="flex justify-center items-center">
              {icons.map((icon, index) => (
                <a className="mx-2" href={icon.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <Image src={`${prefix}/${icon.icon}`} width={50} height={50}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {projects?.length > 0 && (
        <div className={`mt-4 ${ebGaramond.className} md:mt-10 text-center md:text-left`}>
          <h2 className="font-bold italic text-2xl">Projects Featured</h2>
          <div className="mt-4 flex flex-col md:flex-row items-center">
            {projects.map((project, i) => <ProjectElement key={i} project={project}/>)}
          </div>
        </div>
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const usersDirectory = path.join(process.cwd(), 'data/people');
  const filenames = fs.readdirSync(usersDirectory);

  // TODO: filter out paths with noPage prop
  let paths = filenames.map((filename) => {
    const username = filename.replace('.json', '');
    return { params: { username } };
  });
  paths = paths.filter(pathObj => {
    const username = pathObj.params.username;
    const filePath = path.join(usersDirectory, `${username}.json`);
    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return !userData.noPage // ignore those with no individual page
  })

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const usersDirectory = path.join(process.cwd(), 'data/people');
  const filePath = path.join(usersDirectory, `${params.username}.json`);
  const props = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return { props };
}

export default UserProfile;
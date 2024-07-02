import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ebGaramond, nunitoSans } from '../../_app'
import { prefix } from '@/utils/prefix'

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
        <div className="flex flex-col justify-between">
          <RenderNameWithBold name={name} boldPart={nameToBold}/>
          <p className={`text-justify ${nunitoSans.className} font-semibold my-2`}>{bio}</p>
          <div className='flex flex-col gap-4 md:flex-row md:items-end justify-between'>
            <div className="flex justify-center items-end">
              <Image src={`${prefix}/${avatarPath}`} alt={`${name}'s character`} width={100} height={100}/>
              <p className={`italic ${ebGaramond.className} font-medium`}>aka {avatarBio}</p>
            </div>
            <div className="flex justify-center items-center">
              {icons.map((icon, index) => (
                <a href={icon.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <Image src={`${prefix}/${icon.icon}`} width={50} height={50}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {projects?.length > 0 && (
        <div className={`mt-4 ${ebGaramond.className} md:mt-10`}>
          <h2 className="font-bold italic text-2xl">Projects Featured</h2>
        </div>
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const usersDirectory = path.join(process.cwd(), 'data/users');
  const filenames = fs.readdirSync(usersDirectory);

  const paths = filenames.map((filename) => {
    const username = filename.replace('.json', '');
    return { params: { username } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const usersDirectory = path.join(process.cwd(), 'data/users');
  const filePath = path.join(usersDirectory, `${params.username}.json`);
  const props = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return { props };
}

export default UserProfile;
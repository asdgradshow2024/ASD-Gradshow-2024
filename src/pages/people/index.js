import fs from 'fs';
import path from 'path';
import Image from "next/image";
import { ebGaramond, nunito } from '../_app';
import { prefix } from '@/utils/prefix';
import Link from 'next/link';

const Content = ({ image }) => (
  <>
    <div style={{ width: '100%', height: '150px', position: 'relative' }}>
      <Image src={image.src} alt={image.name} fill style={{ objectFit: 'contain' }} loading="lazy" />
    </div>
    <p className="font-bold">{image.name}</p>
    <p className={`${nunito.className} font-semibold italic text-xs`}>{image.avatarBio}</p>
  </>
)
// TODO: fix mobile images too big to crash issue
const PeoplePage = ({
  images
}) => {
  return (
    <div className="p-4 md:p-8">
      <div className={`flex flex-col text-col items-center italic ${ebGaramond.className} mb-4`}>
        <p className="text-xl md:text-2xl">Introducing the</p>
        <h1 className={`${nunito.className} font-extrabold text-3xl md:text-5xl my-2 md:my-4`}>B.Sc CLASS OF 2024</h1>
        <p className="text-xl md:text-2xl">Architecture and Sustainable Design Pillar</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 items-stretch md:px-8">
        {images.map(image => {
          return !image?.noPage ? (
            <Link
              key={image.name}
              className={`${ebGaramond.className} hover:scale-105 transition`}
              style={{ textAlign: 'center' }}
              href={image.urlPath}
            >
              <Content image={image}/>
            </Link>
          ) : (
            <div
              key={image.name}
              className={`${ebGaramond.className}`}
              style={{ textAlign: 'center' }}
              href={image.urlPath}
            >
              <Content image={image}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const people = path.join(process.cwd(), 'public/people');
  const folders = fs.readdirSync(people);
  const images = folders.map(folder => {
    const userFilePath = path.join(process.cwd(), 'data/people', `${folder}.json`);
    const { noPage, shortName, avatarPath, avatarBio } = JSON.parse(fs.readFileSync(userFilePath, 'utf8'));
    const obj = {
      name: shortName,
      src: `${prefix}/${avatarPath}`,
      avatarBio,
      urlPath: `/people/${folder}`,
    }
    if (noPage) obj.noPage = noPage;
    return obj;
  });
  // sort by short name
  images.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

  return { props: { images } };
}

export default PeoplePage
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import { ebGaramond, nunito } from '../_app';

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
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 items-stretch md:px-8">
        {images.map(image => (
          <div key={image.name} style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '150px', position: 'relative' }}>
              <Image src={image.src} alt={image.name} fill style={{ objectFit: 'contain' }}/>
            </div>
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const people = path.join(process.cwd(), 'public/people');
  const folders = fs.readdirSync(people);
  const images = folders.map(folder => ({
    name: folder,
    src: `/people/${folder}/character.png`,
  }));

  return { props: { images } };
}

export default PeoplePage
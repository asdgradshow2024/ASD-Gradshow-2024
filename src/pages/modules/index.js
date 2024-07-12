import fs from 'fs';
import path from 'path';
import Image from "next/image"
import projectsHeader from '../../../public/projects_header.png'
import { ebGaramond, nunito } from "../_app"
import { prefix } from '@/utils/prefix';
import Link from 'next/link';

const ModulesPage = ({
  modules
}) => {
  return (
    <div className="py-4 md:px-12">
      <Image src={projectsHeader} alt="projectsHeader" priority />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 mt-6">
        {
          modules.map((module, i) => (
            <div key={i}>
              <Link href={module?.moduleUrl || '/'}>
                <div className="w-full h-[250px] md:h-[300px] relative">
                  <Image src={`${prefix}/${module.thumbnailPath}`} alt={module.name} fill style={{ objectFit: 'contain' }}/>
                </div>
              </Link>
              <div className="text-center">
                <p className={`${ebGaramond.className} text-3xl font-bold`}>{module.name}</p>
                <p className={`${nunito.className} text-xl italic font-semibold`}>{module.timeframe}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const modulesDirectory = path.join(process.cwd(), 'data/modules');
  const moduleNames = fs.readdirSync(modulesDirectory);
  const modules = moduleNames.map(moduleName => {
    const modulesDirectory = path.join(process.cwd(), 'data/modules', moduleName);
    const filePath = path.join(modulesDirectory, 'data.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });
  modules.sort((a, b) => {
    if (a.order < b.order) return -1;
    if (a.order > b.order) return 1;
    return 0;
  })

  return { props: { modules } };
}

export default ModulesPage
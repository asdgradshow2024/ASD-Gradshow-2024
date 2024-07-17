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
    <div className="p-4 md:px-12">
      <Image src={projectsHeader} alt="projectsHeader" priority className="scale-[0.85]" />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-6 mt-6">
        {
          modules.map((module, i) => (
            <div key={i}>
              <Link href={module?.moduleUrl || '/'}>
                <div className="w-full h-[165px] md:h-[230px] relative">
                  <Image src={`${prefix}/${module.thumbnailPath}`} alt={module.name} fill style={{ objectFit: 'contain' }}/>
                </div>
              </Link>
              <div className="text-center mt-4">
                <p className={`${ebGaramond.className} text-xl md:text-2xl font-bold`}>{module.name}</p>
                <p className={`${nunito.className} md:text-lg italic font-semibold`}>{module.timeframe}</p>
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
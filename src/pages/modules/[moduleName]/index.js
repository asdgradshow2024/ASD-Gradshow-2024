import fs from 'fs';
import path from 'path';

const ModulePage = ({
  name
}) => {
  return (
    <div>
      <h1>{name}</h1>
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
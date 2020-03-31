import { NextPage } from 'next';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../src/containers/WorldMap'), { ssr: false });

const Main: NextPage = (props) => {
  return <DynamicComponentWithNoSSR />;
};

export default Main;

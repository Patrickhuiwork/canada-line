import dynamic from 'next/dynamic';
const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4 text-center flex flex-col items-center">
        <img src="/images/canada-line-logo.png" alt="Logo" className="h-20" />
        <p className="text-md font-bold mt-4">Explore the lower mainland on the Canada Line</p>
      </header>
      <DynamicMap />
    </>
  );
}

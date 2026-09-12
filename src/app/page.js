import ViewerAR from '@/components/ARViewer/ViewerAR';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-xl">
        <h1 className="mb-4 text-center text-xl font-bold">Contoh Viewer 3D</h1>
        <ViewerAR
          glbSrc="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          usdzSrc="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
          alt="Contoh model 3D Astronot"
        />
      </div>
    </main>
  );
}
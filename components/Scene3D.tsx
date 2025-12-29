import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, useGLTF } from '@react-three/drei';
import { HERO_MODEL_PATH } from '../constants';

// Fix for missing JSX types in this environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

// Real Model Loader (Only used if you provide a path)
const RealHeroModel = ({ path }: { path: string }) => {
  const { scene } = useGLTF(path);
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <primitive object={scene} scale={1} />
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] lg:h-full min-h-[400px] relative flex items-center justify-center">
      {HERO_MODEL_PATH ? (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} shadows={false}>
              <RealHeroModel path={HERO_MODEL_PATH} />
            </Stage>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          </Suspense>
        </Canvas>
      ) : (
        // Empty state when no model is loaded
        <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-xl">
          <p className="text-gray-400 font-mono text-sm">No 3D Model Loaded</p>
          <p className="text-xs text-gray-300 mt-2">Add your .glb file to /public and update constants.ts</p>
        </div>
      )}
      
      {HERO_MODEL_PATH && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 pointer-events-none">
          Interactive 3D View
        </div>
      )}
    </div>
  );
};

export default Scene3D;
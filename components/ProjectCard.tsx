import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Float, Html } from '@react-three/drei';
import { Project } from '../types';
import { Loader2 } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
    }
  }
}

// Component to load actual GLTF/GLB models
const RealModel = ({ path }: { path: string }) => {
  const { scene } = useGLTF(path);
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} scale={1} />
    </Float>
  );
};

const LoadingState = () => (
  <Html center>
    <div className="flex flex-col items-center gap-2 text-gray-400">
      <Loader2 className="animate-spin w-6 h-6" />
    </div>
  </Html>
);

const ProjectScene = ({ modelPath }: { modelPath?: string }) => {
  // If no model is provided, just show a blank space or placeholder text
  if (!modelPath) {
    return (
      <div className="w-full h-[300px] md:h-[400px] rounded-2xl flex items-center justify-center bg-transparent border border-gray-100/50">
        <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">
          No Model Attached
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={<LoadingState />}>
          <Stage environment="city" intensity={0.5} shadows={false}>
            <RealModel path={modelPath} />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-8 md:gap-12 py-12 items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* 3D Model Side */}
      <div className="w-full md:w-1/2">
        <ProjectScene modelPath={project.modelPath} />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
            Project 0{index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold font-display uppercase leading-none">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
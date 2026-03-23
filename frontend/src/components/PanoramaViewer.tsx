import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { Maximize2, Minimize2, RotateCcw, Navigation } from 'lucide-react';

interface Hotspot {
  id: string;
  position: [number, number, number];
  label: string;
  onClick?: () => void;
}

interface PanoramaViewerProps {
  imageUrl: string;
  hotspots?: Hotspot[];
  autoRotate?: boolean;
  className?: string;
}

// Composant de la sphère panoramique
function PanoramaSphere({ imageUrl }: { imageUrl: string }) {
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// Composant de hotspot cliquable
function Hotspot({ position, label, onClick }: Hotspot) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2, 16, 16]} />
      <meshBasicMaterial
        color={hovered ? '#F2E1D9' : '#005D6E'}
        transparent
        opacity={0.8}
      />
      <Html
        center
        distanceFactor={15}
        style={{
          pointerEvents: 'none',
          transition: 'all 0.2s',
          opacity: hovered ? 1 : 0.7,
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div className="bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium text-sopi-teal whitespace-nowrap">
          {label}
        </div>
      </Html>
    </mesh>
  );
}

// Loader pendant le chargement
function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 border-4 border-sopi-teal border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white font-medium">
          Chargement {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}

export default function PanoramaViewer({
  imageUrl,
  hotspots = [],
  autoRotate = true,
  className = ''
}: PanoramaViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden ${className}`}
      style={{ height: isFullscreen ? '100vh' : '600px' }}
    >
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 0, 0.1], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={<Loader />}>
          {/* Sphère panoramique */}
          <PanoramaSphere imageUrl={imageUrl} />

          {/* Hotspots */}
          {hotspots.map((hotspot) => (
            <Hotspot key={hotspot.id} {...hotspot} />
          ))}

          {/* Contrôles de caméra */}
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={-0.5}
            minDistance={0.1}
            maxDistance={10}
            autoRotate={isRotating}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Contrôles UI */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={toggleRotation}
          className="p-3 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-all"
          title={isRotating ? "Arrêter la rotation" : "Activer la rotation"}
        >
          <Navigation
            className={`w-5 h-5 text-sopi-teal ${isRotating ? 'animate-spin' : ''}`}
            style={{ animationDuration: '8s' }}
          />
        </button>

        <button
          onClick={resetCamera}
          className="p-3 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-all"
          title="Réinitialiser la vue"
        >
          <RotateCcw className="w-5 h-5 text-sopi-teal" />
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-3 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-all"
          title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 text-sopi-teal" />
          ) : (
            <Maximize2 className="w-5 h-5 text-sopi-teal" />
          )}
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm">
        <p>🖱️ Cliquez et glissez pour explorer | 🔍 Molette pour zoomer</p>
      </div>
    </div>
  );
}

import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

export function PostEffects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette
        eskil={false}
        offset={0.25}
        darkness={0.65}
      />
    </EffectComposer>
  );
}

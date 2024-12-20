import { useCallback } from 'react';
import { MutableRefObject } from 'react';
import * as THREE from 'three';

export function useTreeLights(lightsRef: MutableRefObject<THREE.PointLight[]>) {
  const updateLights = useCallback((time: number) => {
    lightsRef.current.forEach((light, i) => {
      if (light) {
        light.intensity = 0.8 + Math.sin(time * 2 + i) * 0.4;
      }
    });
  }, [lightsRef]);

  return { updateLights };
}
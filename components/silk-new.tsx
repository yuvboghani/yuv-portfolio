"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Color } from "three"

const vertexShader = `
varying vec2 vUv;
varying float vElevation;
uniform float uTime;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  float elevation = sin(modelPosition.x * 3.0 + uTime * 0.5) * sin(modelPosition.y * 2.0 + uTime * 0.3) * 0.2;
  modelPosition.z += elevation;
  vElevation = elevation;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}
`

const fragmentShader = `
varying vec2 vUv;
varying float vElevation;
uniform vec3 uColor1;
uniform vec3 uColor2;

void main() {
  float mixStrength = (vElevation + 0.2) * 2.5;
  vec3 color = mix(uColor1, uColor2, mixStrength);
  
  gl_FragColor = vec4(color, 0.4 + mixStrength * 0.3); 
}
`

const SilkPlane = () => {
  const mesh = useRef<any>(null)
  const { viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new Color("#404040") },
      uColor2: { value: new Color("#808080") },
    }),
    [],
  )

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={mesh} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function Silk() {
  return (
    <div className="fixed inset-0 -z-50 bg-[#0a0a0c]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SilkPlane />
      </Canvas>
    </div>
  )
}

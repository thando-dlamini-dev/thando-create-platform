import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 3D Cube Component that slowly spins

const SpinningCube = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [isHovered, setIsHovered] = useState(false);
    const targetRotation = useRef(new THREE.Euler());

    useFrame((state) => {
        if (meshRef.current) {
            if (isHovered) {
                // Smoothly look at cursor
                const mouse = new THREE.Vector2(state.mouse.x * 2, state.mouse.y * 2);

                // Calculate target rotation to face cursor
                const direction = new THREE.Vector3(mouse.x, mouse.y, 1).normalize();
                const quaternion = new THREE.Quaternion();
                meshRef.current.quaternion.setFromUnitVectors(
                    new THREE.Vector3(0, 0, 1),
                    direction
                );

                // Smooth interpolation
                meshRef.current.quaternion.slerp(quaternion, 0.1);
            } else {
                // Smoothly return to spinning
                meshRef.current.rotation.x += 0.005;
                meshRef.current.rotation.y += 0.01;
            }
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#4f46e5" wireframe />
        </mesh>
    );
};

// Tech icon as 3D text (or you can use actual 3D models)
const TechIcon3D = ({ name }: { name: string }) => {
    return (
        <Text
            fontSize={1}
            color="#4f8b05"
            position={[0, 0, 0]}
        >
            {name}
        </Text>
    );
};

interface Tech {
    id: number;
    name: string;
    category: string;
    description: string;
    useCase: string;
    whyWeUseIt: string;
    features: string[];
    imgUrl: string;
}

const TechStackSection = () => {
    const TechStack: Tech[] = [
        {
            id: 0,
            name: "React.js",
            category: "Frontend Framework",
            description: "A JavaScript library for building user interfaces",
            useCase: "Building interactive UIs and single-page applications",
            whyWeUseIt: "Component-based architecture, huge ecosystem, excellent performance",
            features: ["Virtual DOM", "Component reusability", "Rich ecosystem", "Strong community"],
            imgUrl: "",
        },
        {
            id: 1,
            name: "Node.js",
            category: "Backend Runtime",
            description: "JavaScript runtime built on Chrome's V8 engine",
            useCase: "Building scalable server-side applications",
            whyWeUseIt: "Fast, scalable, and perfect for full-stack JavaScript development",
            features: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Great for APIs"],
            imgUrl: "",
        },
        {
            id: 2,
            name: "TypeScript",
            category: "Programming Language",
            description: "Typed superset of JavaScript",
            useCase: "Adding type safety to JavaScript projects",
            whyWeUseIt: "Catches errors early, better developer experience, scalable code",
            features: ["Static typing", "IDE support", "Modern JavaScript", "Gradual adoption"],
            imgUrl: "",
        }
    ];

    const [activeStack, setActiveStack] = useState<Tech>(TechStack[0]);

    return (
        <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center bg-neutral-50">
            <div className="rounded-2xl w-7xl h-4/5 flex justify-between gap-10 items-center p-10">
                {/* Left side - 3D Canvas */}
                <div className="w-2/5 h-full flex flex-col justify-start items-start gap-10 p-10">
                    <h2 className="text-3xl font-geist-mono-bold text-accent">Our Tech Stack</h2>
                    <div className="size-100 rounded-4xl overflow-hidden">
                        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <SpinningCube />
                        </Canvas>
                    </div>
                </div>

                {/* Right side - Tech Info */}
                <div className="w-3/5 h-full flex flex-col justify-start items-start gap-10 p-10">
                    {/* Tech selector tabs */}
                    <div className="w-full h-15 bg-neutral-200 rounded-full flex justify-evenly items-center p-1">
                        {TechStack.map((tech) => (
                            <button
                                key={tech.id}
                                onClick={() => setActiveStack(tech)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                    activeStack.id === tech.id
                                        ? 'bg-accent text-white'
                                        : 'text-neutral-600 hover:bg-neutral-300'
                                }`}
                            >
                                {tech.name}
                            </button>
                        ))}
                    </div>

                    {/* Tech details */}
                    <div className="w-full flex flex-col gap-6">
                        {/* Category */}
                        <div>
                            <span className="text-sm text-neutral-400">CATEGORY</span>
                            <p className="text-xl font-geist-mono-medium text-neutral-800">
                                {activeStack.category}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <span className="text-sm text-neutral-400">DESCRIPTION</span>
                            <p className="text-lg text-neutral-700">
                                {activeStack.description}
                            </p>
                        </div>

                        {/* Use Case */}
                        <div>
                            <span className="text-sm text-neutral-400">USE CASE</span>
                            <p className="text-lg text-neutral-700">
                                {activeStack.useCase}
                            </p>
                        </div>

                        {/* Why We Use It */}
                        <div>
                            <span className="text-sm text-neutral-400">WHY WE USE IT</span>
                            <p className="text-lg text-accent font-geist-mono-medium">
                                {activeStack.whyWeUseIt}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <span className="text-sm text-neutral-400">KEY FEATURES</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {activeStack.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full text-sm"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackSection;
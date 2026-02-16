import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import type { JSX } from "react"

interface ModelProps {
    scale?: number | [number, number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
    [key: string]: any;
}

const HTMLModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/HTML.glb");
    return <primitive object={scene} {...props} />;
};

const ReactModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/React.glb");
    return <primitive object={scene} {...props} />;
};

const NodeModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Node.glb");
    return <primitive object={scene} {...props} />;
};

const CSSModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/CSS.glb");
    return <primitive object={scene} {...props} />;
};

const ExpressModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Express.glb");
    return <primitive object={scene} {...props} />;
};

const SassModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Sass.glb");
    return <primitive object={scene} {...props} />;
};

const TypescriptModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Typescript.glb");
    return <primitive object={scene} {...props} />;
};

const TailwindModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Tailwind.glb");
    return <primitive object={scene} {...props} />;
};

const MysqlModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Mysql.glb");
    return <primitive object={scene} {...props} />;
};

const JavascriptModel = (props: ModelProps) => {
    const { scene } = useGLTF("src/assets/3D-icons/Javascript.glb");
    return <primitive object={scene} {...props} />;
};

interface Tech {
    id: number;
    name: string;
    category: string;
    description: string;
    useCase: string;
    whyWeUseIt: string;
    features: string[];
    model: JSX.Element;
}

const TechStackSection = () => {
    const TechStack: Tech[] = [
        {
            id: 0,
            name: "Node.js",
            category: "Backend Runtime",
            description: "JavaScript runtime built on Chrome's V8 engine",
            useCase: "Building scalable server-side applications",
            whyWeUseIt: "Fast, scalable, and perfect for full-stack JavaScript development",
            features: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Great for APIs"],
            model: <NodeModel scale={2.5} />,
        },
        {
            id: 1,
            name: "React.js",
            category: "Frontend Framework",
            description: "A JavaScript library for building user interfaces",
            useCase: "Building interactive UIs and single-page applications",
            whyWeUseIt: "Component-based architecture, huge ecosystem, excellent performance",
            features: ["Virtual DOM", "Component reusability", "Rich ecosystem", "Strong community"],
            model: <ReactModel scale={2.5} />,
        },
        {
            id: 2,
            name: "TypeScript",
            category: "Programming Language",
            description: "Typed superset of JavaScript",
            useCase: "Adding type safety to JavaScript projects",
            whyWeUseIt: "Catches errors early, better developer experience, scalable code",
            features: ["Static typing", "IDE support", "Modern JavaScript", "Gradual adoption"],
            model: <TypescriptModel scale={2.5} />,
        },
        {
            id: 3,
            name: "HTML5",
            category: "Markup Language",
            description: "The standard markup language for creating web pages",
            useCase: "Structuring content on the web",
            whyWeUseIt: "Foundation of every website, semantic structure, SEO-friendly",
            features: ["Semantic Elements", "SEO Structure", "Accessibility", "Cross-browser"],
            model: <HTMLModel scale={2.5} />,
        },
        {
            id: 4,
            name: "CSS3",
            category: "Styling Language",
            description: "Cascading Style Sheets for styling web pages",
            useCase: "Styling and animating user interfaces",
            whyWeUseIt: "Essential for creating beautiful, responsive designs",
            features: ["Flexbox", "Grid", "Animations", "Responsive Design"],
            model: <CSSModel scale={2.5} />,
        },
        {
            id: 5,
            name: "Express.js",
            category: "Backend Framework",
            description: "Fast, unopinionated, minimalist web framework for Node.js",
            useCase: "Building REST APIs and web applications",
            whyWeUseIt: "Lightweight, flexible, and great for building scalable backends",
            features: ["Middleware", "Routing", "REST APIs", "Lightweight"],
            model: <ExpressModel scale={2.5} />,
        },
        {
            id: 6,
            name: "Sass",
            category: "CSS Preprocessor",
            description: "Professional grade CSS extension language",
            useCase: "Writing more maintainable and powerful stylesheets",
            whyWeUseIt: "Variables, nesting, mixins make CSS more powerful and organized",
            features: ["Variables", "Nesting", "Mixins", "Functions"],
            model: <SassModel scale={2.5} />,
        },
        {
            id: 7,
            name: "Tailwind CSS",
            category: "CSS Framework",
            description: "A utility-first CSS framework",
            useCase: "Rapidly building modern websites without leaving HTML",
            whyWeUseIt: "Fast development, highly customizable, great for responsive design",
            features: ["Utility classes", "Responsive design", "Customizable", "JIT compiler"],
            model: <TailwindModel scale={2.5} />,
        },
        {
            id: 8,
            name: "MySQL",
            category: "Database",
            description: "Popular open-source relational database management system",
            useCase: "Storing and managing structured data",
            whyWeUseIt: "Reliable, fast, and widely used for web applications",
            features: ["ACID compliance", "Stored procedures", "Triggers", "Replication"],
            model: <MysqlModel scale={2.5} />,
        },
        {
            id: 9,
            name: "JavaScript",
            category: "Programming Language",
            description: "The programming language of the web",
            useCase: "Adding interactivity and logic to websites",
            whyWeUseIt: "Essential for frontend development, versatile, huge ecosystem",
            features: ["ES6+ features", "Async/await", "Closures", "Prototypal inheritance"],
            model: <JavascriptModel scale={2.5} />,
        },
    ];

    const [activeStack, setActiveStack] = useState<Tech>(TechStack[0]);
    const [isHovering, setIsHovering] = useState<boolean>(false)

    const SpinningTechModel = ({ children, isHovered }: { children: React.ReactElement; isHovered: boolean }) => {
        const groupRef = useRef<THREE.Group>(null);
        const spinSpeed = 0.01;
        const smoothFactor = 0.08; // Lower = smoother but slower transition

        useFrame((state) => {
            if (groupRef.current) {
                if (isHovered) {
                    // Target rotation based on mouse X position
                    const targetRotY = state.mouse.x * 0.8;

                    // Smoothly interpolate towards target rotation
                    // Using lerp (linear interpolation) for smooth transition
                    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * smoothFactor;

                    // Lock other axes
                    groupRef.current.rotation.x = 0;
                    groupRef.current.rotation.z = 0;
                } else {
                    // When not hovered, smoothly return to spinning
                    // First, find the closest spinning position
                    const currentRot = groupRef.current.rotation.y;

                    // Continue spinning but with smooth transition from hover position
                    groupRef.current.rotation.y += spinSpeed;
                }
            }
        });

        return (
            <Center ref={groupRef}>
                {children}
            </Center>
        );
    };

    return (
        <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center bg-neutral-50">
            <div className="rounded-2xl w-7xl h-4/5 flex justify-between gap-10 items-center p-10">
                {/* Left side - 3D Canvas */}
                <div className="w-2/5 h-full flex flex-col justify-start items-start gap-2 p-10">
                    <h2 className="text-3xl font-geist-mono-bold text-accent">Our Tech Stack</h2>
                    <div className="w-2/3 min-h-2 flex items-start justify-start">
                        <p className="text-neutral-600">These are the tools we use to bring your websites tò life</p>
                    </div>
                    <div
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="size-100 hover:scale-105 transition-all duration-300 rounded-4xl overflow-hidden"
                    >
                        <Canvas camera={{position: [0, 0, 10], fov: 35}}>
                            <ambientLight intensity={0}/>
                            {/* Lighting position excluded since the models use baked lighting */}
                            <SpinningTechModel isHovered={isHovering}>
                                {activeStack.model}
                            </SpinningTechModel>
                        </Canvas>
                    </div>
                </div>

                {/* Right side - Tech Info */}
                <div className="w-3/5 h-full flex flex-col justify-start items-start gap-10 p-10">
                    {/* Tech selector tabs */}
                    <div className="w-full min-h-15 bg-neutral-200 shadow-lg rounded-2xl grid-rows-2 gap-x-2 gap-y-1 px-2 py-2">
                        {TechStack.map((tech) => (
                            <button
                                key={tech.id}
                                onClick={() => setActiveStack(tech)}
                                className={`py-1 px-2 rounded-xl transition-all duration-300 ${
                                    activeStack.id === tech.id
                                        ? 'bg-accent text-white shadow-sm shadow-neutral-500'
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
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

// Type for navigation views
type ViewType = 'home' | 'experience' | 'projects' | 'contact';

// Props interface for Home component
interface HomeProps {
  onNavigate: (view: ViewType, height: number) => void;
  isNavigatingBack: boolean;
  prevHeight: number;
}

// Props interface for view components (Experience, Projects, Contact)
interface ViewProps {
  onBack: (height?: number) => void;
  prevHeight: number;
}

// Interface for view heights reference
interface ViewHeights {
  home: number;
  experience: number;
  projects: number;
  contact: number;
}

function Home({ onNavigate, isNavigatingBack, prevHeight }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    if (isNavigatingBack) {
      // When coming back to home, use height transition instead of opacity
      gsap.fromTo(
        container,
        { height: prevHeight, overflow: 'hidden' },
        {
          height: 'auto',
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(container, { clearProps: "overflow" });
          }
        }
      );
      // Text animation delay
      const textElements = container.querySelectorAll('.animate-text');
      gsap.fromTo(
        textElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 }
      );

    } else {
      // First time loading, use opacity animation
      gsap.fromTo(
        container,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      // Text animation delay
      const textElements = container.querySelectorAll('.animate-text');
      gsap.fromTo(
        textElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 }
      );

      // Nav links animation with more delay
      const navLinks = container.querySelectorAll('.nav-link');
      gsap.fromTo(
        navLinks,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.6 }
      );
    }

    // Always update the current height after animations
    setCurrentHeight(container.offsetHeight);
  }, [isNavigatingBack, prevHeight]);

  // Pass current height when navigating
  const handleNavigate = (view: ViewType) => {
    if (containerRef.current) {
      onNavigate(view, containerRef.current.offsetHeight);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-black/30 rounded-2xl p-8 max-w-4xl w-full flex flex-col sm:flex-row gap-6 mx-4 shadow-lg"
      style={{
        backdropFilter: 'blur(3px)',
      }}
    >
      {/* Profile picture - always on left except on very small screens */}
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden">
          <img
            src="profile1.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white mb-2 text-center sm:text-left animate-text">David Saldubehere</h1>
        <h2 className="text-xl text-blue-200 mb-6 text-center sm:text-left animate-text">Software Engineer, CS & Math</h2>

        <p className="text-blue-100 mb-8 text-center sm:text-left animate-text">
          Hi! Thanks for checking out my portfolio. Feel free to reach out
          regarding questions, opportunities, or anything else.
        </p>

        {/* Navigation */}
        <div className="flex justify-center sm:justify-start gap-8 text-white">
          <button
            style={{ pointerEvents: 'auto' }}
            onClick={() => handleNavigate('experience')}
            className="font-semibold nav-link hover:text-blue-300 cursor-pointer transition duration-200"
          >
            experience
          </button>
          <button
            style={{ pointerEvents: 'auto' }}
            onClick={() => handleNavigate('projects')}
            className="font-semibold nav-link hover:text-blue-300 cursor-pointer transition duration-200"
          >
            projects
          </button>
          <button
            style={{ pointerEvents: 'auto' }}
            onClick={() => handleNavigate('contact')}
            className="font-semibold nav-link hover:text-blue-300 cursor-pointer transition duration-200"
          >
            contact
          </button>
        </div>
      </div>
    </div>
  );
}

export function Welcome() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [previousHeight, setPreviousHeight] = useState<number>(0);
  const [isNavigatingBack, setIsNavigatingBack] = useState<boolean>(false);
  const previousViewRef = useRef<ViewType>('home');

  // Store heights for each view to ensure proper transitions
  const viewHeightsRef = useRef<ViewHeights>({
    home: 0,
    experience: 0,
    projects: 0,
    contact: 0
  });

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  function handleNavigate(view: ViewType, height: number) {
    // Store the height of current view before changing
    if (height) {
      viewHeightsRef.current[currentView] = height;
    }

    // Set the previous height to the current view's height
    setPreviousHeight(height || viewHeightsRef.current[currentView]);

    // Store previous view and update current view
    previousViewRef.current = currentView;
    setCurrentView(view);

    // Not navigating back when going to a different view
    if (isNavigatingBack) {
      setIsNavigatingBack(false);
    }
  }

  function handleNavigateBack(height?: number) {
    // Store height of the current view before navigating back
    if (height) {
      viewHeightsRef.current[currentView] = height;
    }

    // Set the previous height to the current view's height for transition
    setPreviousHeight(height || viewHeightsRef.current[currentView]);

    // Set flag to indicate we're navigating back to home
    setIsNavigatingBack(true);
    setCurrentView('home');
  }

  const renderContent = () => {
    switch (currentView) {
      case 'experience':
        return <Experience onBack={handleNavigateBack} prevHeight={previousHeight} />;
      case 'projects':
        return <Projects onBack={handleNavigateBack} prevHeight={previousHeight} />;
      case 'contact':
        return <Contact onBack={handleNavigateBack} prevHeight={previousHeight} />;
      default:
        return <Home
          onNavigate={handleNavigate}
          isNavigatingBack={isNavigatingBack}
          prevHeight={previousHeight}
        />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ pointerEvents: 'none' }}>

      {/* tailwind seems to be broken for both the blur and pointer-events-none features i need */}
      < div className="relative z-10 flex items-center justify-center min-h-screen" >
        {renderContent()}
      </div >
    </div >
  );
}

const Experience = ({ onBack, prevHeight }: ViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    // Only reference the current property once
    const container = containerRef.current;

    if (!container) return;

    gsap.fromTo(
      container,
      { height: prevHeight, overflow: 'hidden' },
      {
        height: 'auto', // Use 'auto' instead of fixed pixel value for flexibility
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          // Remove overflow hidden after animation completes
          gsap.set(container, { clearProps: "overflow" });
          // Update current height after animation completes
          setCurrentHeight(container.offsetHeight);
        }
      }
    );

    // Get all child elements for staggered animation
    const elements = container.querySelectorAll('.animate-item');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
    );
  }, [prevHeight]);

  // Pass current height when navigating back
  const handleBack = () => {
    if (containerRef.current) {
      onBack(containerRef.current.offsetHeight);
    } else {
      onBack();
    }
  };

  return (
    <div ref={containerRef} className="bg-black/30 rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-lg"
      style={{
        backdropFilter: 'blur(3px)',
      }}>
      <div className="flex items-center gap-4 mb-6">
        <button
          style={{ pointerEvents: 'auto' }}
          onClick={handleBack}
          className="text-white hover:text-blue-300 transition duration-200"
        >
          ←
        </button>
        <h1 className="text-4xl font-bold text-white">work experience</h1>
      </div>
      <div className="space-y-8">
        <div className="flex gap-5 animate-item">
          <div className="flex-shrink-0 w-16 h-16 rounded">
            <img src="sheetz.webp" alt="sheetz" className="w-full h-full object-cover rounded" />
          </div>
          <div>
            <h2 className="text-xl text-white font-semibold">software engineering intern at Sheetz</h2>
            <p className="text-blue-200">Created production applications to capture data regarding competitor pricing of various convenience products</p>
          </div>
        </div>
        <div className="flex gap-5 animate-item">
          <div className="flex-shrink-0 w-16 h-16 rounded">
            <img src="psu.png" alt="PSU" className="w-full h-full object-cover rounded" />
          </div>
          <div>
            <h2 className="text-xl text-white font-semibold">software engineering intern at Penn State</h2>
            <p className="text-blue-200">Developed a class library used to hot reload data in all Penn State research admin applications</p>
          </div>
        </div>
        <div className="flex gap-5 animate-item">
          <div className="flex-shrink-0 w-16 h-16  rounded">
            <img src="uit.png" alt="PSU UIT Lab" className="w-full h-full object-cover rounded" />
          </div>
          <div>
            <h2 className="text-xl text-white font-semibold">computer vision researcher at Penn State UIT Lab</h2>
            <p className="text-blue-200">Developed novel graph-based vision architectures for medical image segmentation. Acheived improved performance compared with SOTA models </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = ({ onBack, prevHeight }: ViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Apply height transition
    gsap.fromTo(
      container,
      { height: prevHeight, overflow: 'hidden' },
      {
        height: 'auto',
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(container, { clearProps: "overflow" });
          // Update current height after animation completes
          setCurrentHeight(container.offsetHeight);
        }
      }
    );

    // Get all child elements for staggered animation
    const elements = container.querySelectorAll('.animate-item');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
    );
  }, [prevHeight]);

  // Pass current height when navigating back
  const handleBack = () => {
    if (containerRef.current) {
      onBack(containerRef.current.offsetHeight);
    } else {
      onBack();
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-black/30 rounded-2xl p-4 sm:p-8 max-w-4xl w-full mx-4 shadow-lg max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
      style={{
        backdropFilter: 'blur(3px)',
      }}
    >
      <div className="flex items-center gap-4 mb-6 relative top-0 py-2 z-10">
        <button
          style={{ pointerEvents: 'auto' }}
          onClick={handleBack}
          className="text-white hover:text-blue-300 transition duration-200"
        >
          ←
        </button>
        <h1 className="text-4xl font-bold text-white">projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ pointerEvents: 'auto' }}>
        <div className="bg-black/20 p-5 rounded-lg animate-item">
          <h2 className="text-xl text-white font-semibold mb-2">ViGR-Unet</h2>
          <p className="text-blue-200 mb-3">A high accuracy graph-based Unet model for medical image segmentation</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">PyTorch</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">Computer Vision</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">Machine Learning</span>
            <span className="text-xs bg-white text-white px-2 py-1 rounded">
              <img
                src="github.svg"
                alt="GitHub"
                className="inline-block w-4 h-4"
                onClick={() => window.open("https://github.com/davidsaldubehere/ViGR-Unet", "_blank")}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              />
            </span>
          </div>
        </div>

        <div className="bg-black/20 p-5 rounded-lg animate-item">
          <h2 className="text-xl text-white font-semibold mb-2">GeoRouter</h2>
          <p className="text-blue-200 mb-3">Offline navigation engine with customizable route scenery preferences</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">OSM</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">Graph Theory</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">NumPy</span>
            <span className="text-xs bg-white text-white px-2 py-1 rounded">
              <img
                src="github.svg"
                alt="GitHub"
                className="inline-block w-4 h-4"
                onClick={() => window.open("https://github.com/davidsaldubehere/georouter/", "_blank")}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              />
            </span>
          </div>
        </div>

        <div className="bg-black/20 p-5 rounded-lg animate-item">
          <h2 className="text-xl text-white font-semibold mb-2">PSU 3D Printing Club App</h2>
          <p className="text-blue-200 mb-3">Official club app. Manages printer statuses, club projects, and announcements</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">React Native</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">MySQL</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">Django</span>
            <span className="text-xs bg-white text-white px-2 py-1 rounded">
              <img
                src="github.svg"
                alt="GitHub"
                className="inline-block w-4 h-4"
                onClick={() => window.open("https://github.com/davidsaldubehere/psu3dprintingappfrontend/", "_blank")}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              />
            </span>
          </div>
        </div>

        <div className="bg-black/20 p-5 rounded-lg animate-item">
          <h2 className="text-xl text-white font-semibold mb-2">Dynamic Memory Allocator</h2>
          <p className="text-blue-200 mb-3">Custom implementation of GNU Malloc with segmented lists</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">C</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">GCC</span>
            <span className="text-xs bg-blue-600/50 text-white px-2 py-1 rounded">Computer Architecture</span>
            <span className="text-xs bg-white text-white px-2 py-1 rounded">
              <img
                src="github.svg"
                alt="GitHub"
                className="inline-block w-4 h-4"
                onClick={() => window.open("https://github.com/davidsaldubehere/malloc-implementation", "_blank")}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = ({ onBack, prevHeight }: ViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Apply height transition
    gsap.fromTo(
      container,
      { height: prevHeight, overflow: 'hidden' },
      {
        height: 'auto',
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(container, { clearProps: "overflow" });
          // Update current height after animation completes
          setCurrentHeight(container.offsetHeight);
        }
      }
    );

    // Get all child elements for staggered animation
    const elements = container.querySelectorAll('.animate-item');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
    );
  }, [prevHeight]);

  // Pass current height when navigating back
  const handleBack = () => {
    if (containerRef.current) {
      onBack(containerRef.current.offsetHeight);
    } else {
      onBack();
    }
  };

  return (
    <div ref={containerRef} className="bg-black/30 rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-lg"
      style={{
        backdropFilter: 'blur(3px)',
      }}>
      <div className="flex items-center gap-4 mb-6">
        <button
          style={{ pointerEvents: 'auto' }}
          onClick={handleBack}
          className="text-white hover:text-blue-300 transition duration-200"
        >
          ←
        </button>
        <h1 className="text-4xl font-bold text-white">contact</h1>
      </div>

      <div className="space-y-6">
        <div className="animate-item">
          <h2 className="text-xl text-white font-semibold mb-2">Get in touch</h2>
          <p className="text-blue-200">Feel free to reach out for opportunities or just to say hello!</p>
        </div>

        <form className="space-y-4" name="contact"
          method="POST" data-netlify="true"
        >
          <input type="hidden" name="form-name" value="don't touch this" />

          <div className="animate-item">
            <label className="block text-blue-200 mb-1">Name</label>
            <input
              style={{ pointerEvents: 'auto' }}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-black/20 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="animate-item">
            <label className="block text-blue-200 mb-1">Email</label>
            <input
              style={{ pointerEvents: 'auto' }}
              type="email"
              name="email"
              placeholder="Email" className="w-full bg-black/20 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="animate-item">
            <label className="block text-blue-200 mb-1">Message</label>
            <textarea
              style={{ pointerEvents: 'auto' }}
              name="message"
              placeholder="Message"
              className="w-full bg-black/20 text-white border border-blue-600/50 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="animate-item">
            <button
              style={{ pointerEvents: 'auto' }}
              type='submit'
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
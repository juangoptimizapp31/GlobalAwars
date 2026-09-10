import { useEffect } from 'react';

export default function useScripts(srcArray) {
  useEffect(() => {
    let active = true;
    
    const loadScript = (index) => {
      if (index >= srcArray.length || !active) return;
      
      const src = srcArray[index];
      
      // Check if script already exists to prevent duplicate loading
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        loadScript(index + 1);
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.setAttribute('data-dynamic', 'true');
      script.onload = () => {
        if (active) loadScript(index + 1);
      };
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        if (active) loadScript(index + 1);
      };
      document.body.appendChild(script);
    };

    loadScript(0);

    return () => {
      active = false;
      srcArray.forEach(src => {
        const script = document.querySelector(`script[src="${src}"][data-dynamic="true"]`);
        if (script && document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, [srcArray]);
}

import { useEffect } from 'react';

export const useSmoothScroll = () => {
    useEffect(() => {
        const root = document.querySelector('.smooth-content') as HTMLElement;
        if (!root) return;

        let current = 0;
        let target = 0;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            target += e.deltaY * 0.5;
            target = Math.max(0, Math.min(target, root.scrollHeight - window.innerHeight));
        };

        const smooth = () => {
            current += (target - current) * 0.075;
            root.style.transform = `translate3d(0, ${-current}px, 0)`;
            requestAnimationFrame(smooth);
        };

        document.addEventListener('wheel', onWheel, { passive: false });
        smooth();

        return () => {
            document.removeEventListener('wheel', onWheel);
        };
    }, []);
};
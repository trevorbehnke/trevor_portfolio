import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset = 100) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Create an observer for each section
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                {
                    rootMargin: `-${offset}px 0px -${window.innerHeight / 2}px 0px`, // Trigger when section is near top
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds, offset]);

    return activeSection;
}

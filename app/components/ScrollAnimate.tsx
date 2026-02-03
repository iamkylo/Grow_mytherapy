"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
    children: ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "scale-in" | "fade-left" | "fade-right";
    delay?: number;
    duration?: number;
    threshold?: number;
}

export default function ScrollAnimate({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
            transitionDelay: `${delay}s`,
        };

        if (!isVisible) {
            switch (animation) {
                case "fade-up":
                    return { ...baseStyles, opacity: 0, transform: "translateY(30px)" };
                case "fade-in":
                    return { ...baseStyles, opacity: 0 };
                case "scale-in":
                    return { ...baseStyles, opacity: 0, transform: "scale(0.95)" };
                case "fade-left":
                    return { ...baseStyles, opacity: 0, transform: "translateX(-30px)" };
                case "fade-right":
                    return { ...baseStyles, opacity: 0, transform: "translateX(30px)" };
                default:
                    return { ...baseStyles, opacity: 0 };
            }
        }

        return { ...baseStyles, opacity: 1, transform: "translateY(0) translateX(0) scale(1)" };
    };

    return (
        <div ref={ref} className={className} style={getAnimationStyles()}>
            {children}
        </div>
    );
}

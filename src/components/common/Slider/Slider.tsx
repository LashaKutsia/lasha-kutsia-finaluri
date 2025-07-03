import { useRef } from "react";
import type { SliderProps } from "./types";
import './Slider.scss';

const Slider = ({ children, title }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollAmount = container.offsetWidth * 0.9;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="slider">
            {title && <h2 className="slider-title">{title}</h2>}
            <div className="slider-wrapper">
                <button className="slider-btn prev" onClick={() => scroll('left')}>‹</button>
                <div className="slider-container" ref={sliderRef}>
                    {children}
                </div>
                <button className="slider-btn next" onClick={() => scroll('right')}>›</button>
            </div>
        </div>
    );
};

export default Slider;

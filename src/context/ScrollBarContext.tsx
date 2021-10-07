import React, {createContext, useState, useContext, useEffect} from 'react';
import ScrollBar from 'smooth-scrollbar';
import {isTouchDevice} from "../helpers";

type ScrollBarContextType = ScrollBar | Window | null

const ScrollBarContext = createContext<ScrollBarContextType>(null);
export const useScrollBar = () => useContext(ScrollBarContext);

const ScrollBarProvider: React.FC = ({ children }) => {
    const [scrollBar, setScrollBar] = useState<ScrollBarContextType>(null);

    useEffect(() => {
        const scrollWrapper = document?.querySelector('main');
        if (scrollWrapper && !isTouchDevice()) {
            const inst = ScrollBar.init(scrollWrapper, {
                damping: 0.1
            });
            setScrollBar(inst);
        } else {
            setScrollBar(window)
        }

        return () => {
            if (scrollBar && 'destroy' in scrollBar) {
                scrollBar.destroy();
            }
        };
    }, []);

    return <ScrollBarContext.Provider value={scrollBar}>{children}</ScrollBarContext.Provider>;
};

export default ScrollBarProvider;

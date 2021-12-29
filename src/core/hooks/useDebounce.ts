import { useCallback, useRef } from 'react';

export default function useDebounce(callback: () => void, delay: number) {
    const timer = useRef<ReturnType<typeof window.setTimeout>>();

    const debouncedCallback = useCallback(() => {
        if (timer.current) {
            window.clearTimeout(timer.current);
        }
        // @ts-ignore
        timer.current = window.setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
};

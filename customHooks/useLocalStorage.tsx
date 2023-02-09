import {useCallback, useState} from "react";

function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log(e);
            return initialValue;
        }
    });

    // let valueToStore = value;
    // if (value instanceof Function) {
    //     const item = window.localStorage.getItem(key);
    //     valueToStore = value(item ? JSON.parse(item) : initialValue)
    // }
    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const remove = useCallback(() => {
        try {
            localStorage.removeItem(key);
            setStoredValue(null);
        } catch (e) {
            console.warn(e);
        }
    }, [key, storedValue]);
    return [storedValue, setValue, remove];
}

export default useLocalStorage;
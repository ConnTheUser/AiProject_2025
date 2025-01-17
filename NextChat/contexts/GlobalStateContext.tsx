// contexts/GlobalStateContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface GlobalStateContextType {
    isMatlabInstalled: boolean | null;
}

const GlobalStateContext = createContext<GlobalStateContextType>({ isMatlabInstalled: null });

interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const [isMatlabInstalled, setIsMatlabInstalled] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/init');
            const data = await response.json();
            setIsMatlabInstalled(data.isMatlabInstalled);
        };

        fetchData();
    }, []);

    return (
        <GlobalStateContext.Provider value={{ isMatlabInstalled }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
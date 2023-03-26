import React, { useContext, useState } from 'react'
import LoadingContext from './ContextLoading';

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

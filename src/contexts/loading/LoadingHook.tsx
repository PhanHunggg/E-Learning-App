import React, { useContext, useEffect, useState } from 'react'
import LoadingContext from './ContextLoading';
import { Spin } from 'antd';
import "./loading.scss";

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const bodyElement = document.body;
        bodyElement.style.overflow = isLoading
            ? "hidden"
            : "auto";
    }, [isLoading]);
    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {isLoading && (
                <div className="spin">
                    <Spin size="large" />
                </div>
            )}
            {children}
        </LoadingContext.Provider>
    );
}

import React from 'react';

interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const defaultLoadingContext: LoadingContextProps = {
  isLoading: false,
  setLoading: () => {},
};

const LoadingContext = React.createContext<LoadingContextProps>(defaultLoadingContext);

export default LoadingContext;
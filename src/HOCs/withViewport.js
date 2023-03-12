import { useViewPort } from "../hooks/useViewPort";

export const withViewport = (Component) => {
  return (props) => {
    const device = useViewPort();

    return <Component {...props} device={device} />;
  };
};

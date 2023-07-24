import { FC } from 'react';

interface RefMarkerProps {
  reference: React.RefObject<HTMLSpanElement>;
}

const RefMarker: FC<RefMarkerProps> = ({ reference }) => {
  return <span ref={reference}></span>;
};

export default RefMarker;

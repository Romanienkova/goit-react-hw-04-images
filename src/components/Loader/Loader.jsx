import { ThreeCircles } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

export const Loader = () => {
  return (
    <div className={css.Overlay}>
      <ThreeCircles
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
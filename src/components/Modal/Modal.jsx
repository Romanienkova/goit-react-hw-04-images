import { useEffect } from 'react';

import css from './Modal.module.css';

export function Modal({ modalData, handleModal }) {
  useEffect(() => {
    const handleClose = e => {
      if (e.code === 'Escape') {
        handleModal();
      }
    };

    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleModal]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <img src={modalData} alt="tags" />
      </div>
    </div>
  );
}

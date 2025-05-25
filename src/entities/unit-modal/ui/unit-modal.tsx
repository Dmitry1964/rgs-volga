import { Link } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';
import cls from './unit-modal.module.scss';
import './unit-modal.scss';

type UnitModalProps = {
  children: React.ReactNode;
};


const UnitModal = ({ children }: UnitModalProps): React.ReactNode => {
  const handleModalButton = useCallback((e : MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = (e.target as HTMLElement).closest('#modal');
    target?.classList.remove('isActive');
  }, [])

  return (
    <div className={cls.unit_modal} id="modal">
      <div className={cls.unit_modal__wrapper}>
        <div className={cls.unit_modal__content}>{children}</div>
        <Link
          className={cls.unit_modal__button}
          to="#"
          onClick={handleModalButton}
        >
          Назад
        </Link>
      </div>
    </div>
  );
};

export default UnitModal;

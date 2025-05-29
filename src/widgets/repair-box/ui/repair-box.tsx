
import { BoxList } from 'src/features/box-list';
import cls from './repair-box.module.scss';

const RepairBox = (): React.ReactNode => {
  return (
    <section className={cls.repair_box}>
      <h2>Ремонт гидрораспределителей</h2>
      <BoxList/>
    </section>
  );
};

export default RepairBox;

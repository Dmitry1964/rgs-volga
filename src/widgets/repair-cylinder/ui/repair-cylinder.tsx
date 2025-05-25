import { CilinderList } from 'src/features/cilinder-list';
import cls from './repair-cylinder.module.scss';

const RepairCylinder = (): React.ReactNode => {
  return (
    <section className={cls.repair_cylinder}>
      <h2>Ремонт гидроцилиндров</h2>
      <CilinderList/>
    </section>
  );
};

export default RepairCylinder;

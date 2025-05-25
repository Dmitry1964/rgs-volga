import { PumpList } from 'src/features/pump-list';
import cls from './repair-pump.module.scss';

const RepairPump = (): React.ReactNode => {
  return (
    <section className={cls.repair_pump}>
      <h2>Ремонт гидромоторов и насосов</h2>
      <PumpList/>
    </section>
  );
};

export default RepairPump;

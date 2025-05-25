import { Intro } from "src/widgets/intro";
import { RepairCylinder } from "src/widgets/repair-cylinder";
import { RepairPump } from "src/widgets/repair-pump";

const RepairPage = (): React.ReactNode => {
    return (
        <>
            <Intro>
                <h2>Ремонт гидравлического оборудования</h2>
            </Intro>
            <RepairPump />
            <RepairCylinder />
        </>
    )
};

export default RepairPage;
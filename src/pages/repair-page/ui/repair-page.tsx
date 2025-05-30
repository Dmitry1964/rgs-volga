import { ContactsBlock } from "src/widgets/contacts-block";
import { Intro } from "src/widgets/intro";
import { RepairBox } from "src/widgets/repair-box";
import { RepairCylinder } from "src/widgets/repair-cylinder";
import { RepairPump } from "src/widgets/repair-pump";

const RepairPage = (): React.ReactNode => {
    return (
        <main>
            <Intro>
                <h2>Ремонт гидравлического оборудования</h2>
            </Intro>
            <RepairPump />
            <RepairCylinder />
            <RepairBox />
            <ContactsBlock/>
        </main>
    )
};

export default RepairPage;
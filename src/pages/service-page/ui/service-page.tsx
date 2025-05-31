import { ContactsBlock } from "src/widgets/contacts-block";
import { Intro } from "src/widgets/intro";

const ServicePage = (): React.ReactNode => {
    return (
        <main className="main-page">
            <Intro>
                <h2>Ремонт и сервис спецтехники</h2>
            </Intro>
            <ContactsBlock/>
        </main>
    )
};

export default ServicePage;
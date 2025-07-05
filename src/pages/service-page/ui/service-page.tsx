import { Intro } from "src/widgets/intro";
import { ServiceSection } from "src/widgets/service-section";
import { ContactsBlock } from "src/widgets/contacts-block";

const ServicePage = (): React.ReactNode => {
  return (
      <main >
        <Intro>
          <h2>Ремонт и сервис спецтехники</h2>
        </Intro>
        <ServiceSection />
        <ContactsBlock />
      </main>
  )
};

export default ServicePage;
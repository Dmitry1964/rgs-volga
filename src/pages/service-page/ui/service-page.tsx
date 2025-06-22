import { ContactsBlock } from "src/widgets/contacts-block";
import { Intro } from "src/widgets/intro";
import { TempBlock } from "src/widgets/temp-block";

const ServicePage = (): React.ReactNode => {
  return (
    <main className="main-page">
      <Intro>
        <h2>Ремонт и сервис спецтехники</h2>
      </Intro>
      <TempBlock imgUrl={'img/content/temp-service.jpg'} />
      {/* <ServiceSection /> */}
      <ContactsBlock />
    </main>
  )
};

export default ServicePage;
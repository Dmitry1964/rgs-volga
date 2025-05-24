import { About } from "src/widgets/about";
import { Banner } from "src/widgets/banner";
import { Contacts } from "src/widgets/contacts";
import { FeaturesList } from "src/widgets/features-list";
import { Intro } from "src/widgets/intro";
import { Partners } from "src/widgets/partners";

const MainPage = (): React.ReactNode => {
  return (
    <main>
      <Banner />
      <Intro>
        <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2>
      </Intro>
      <FeaturesList />
      <About />
      <Partners />
      <Contacts />
    </main>
  )
}

export default MainPage;
import { About } from "src/widgets/about";
import { Banner } from "src/widgets/banner";
import { FeaturesList } from "src/widgets/features-list";
import { Intro } from "src/widgets/intro";

const MainPage = (): React.ReactNode => {
  return (
    <main>
      <Banner />
      <Intro>
        <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2>
      </Intro>
      <FeaturesList />
      <About />
    </main>
  )
}

export default MainPage;
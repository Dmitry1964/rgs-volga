import { ContactsBlock } from "src/widgets/contacts-block";
import { Intro } from "src/widgets/intro";
import { TempBlock } from "src/widgets/temp-block";

const PageDiagnostics = () => {
  return (
    <main className="main-page">
      <Intro>
        <h2>Диагностика гидросистем</h2>
      </Intro>
      <TempBlock imgUrl={'img/content/temp-diag.jpg'}/>
      <ContactsBlock />
    </main>
  )
}

export default PageDiagnostics;

import { ContactsBlock } from "src/widgets/contacts-block";
import { Intro } from "src/widgets/intro";
import { TempBlock } from "src/widgets/temp-block";

const RvdPage = () => {
  return (
    <main className='main'>
      <Intro>
        <h2>Производство рукавов высокого давления</h2>
      </Intro>
      <TempBlock imgUrl={'img/content/temp-rvd.jpg'}/>
      <ContactsBlock />
    </main>
  )
}

export default RvdPage;
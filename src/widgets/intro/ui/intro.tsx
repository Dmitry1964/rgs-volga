import cls from './intro.module.scss';

type IntroProps = {
  children: React.ReactNode;
}

const Intro = ({ children }: IntroProps) => {
  return (
    <div className={cls.intro}>
      <div className="container">
        <p>предлагаем вам</p>
        {children}
        {/* <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2> */}
      </div>
    </div>
  );
};

export default Intro;

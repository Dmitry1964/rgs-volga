import cls from './work-examples.module.scss';
import {classNames} from 'src/shared/lib/class-names';

const WorkExamples = () => {
  return (
    <div className={cls.work_examples}>
      <div className='container'>
        <div className={cls.work_examples__content}>
          <img className={classNames(cls.work_example__img, [cls.work_example__img_after], {})} src="img/content/krane-after.jpg" srcSet='img/content/krane-after@2x.jpg 2x' alt="Фото кран после ремонта" />
          <img className={cls.work_example__img} src="img/content/krane-before.jpg" srcSet='img/content/krane-before@2x.jpg 2x' alt="Фото кран до ремонта" />

        </div>
      </div>
    </div>
  );
}

export default WorkExamples;

import cls from './pump-card.module.scss';

type PumpCardType = {
  img: string;
  img2x: string;
  webp: string;
  webp2x: string;
  title: string;
  desc: string;
};

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

// const PumpCard = (card: PumpCardType): React.ReactNode => {
//   const { img, img2x, webp, webp2x, title, desc } = card;
//   return (
//     <Card>
//       <div>
//         <Typography className={cls.pump_card__title}>{title}</Typography>
//         <IconButton
//           aria-label="bookmark Bahamas Islands"
//           variant="plain"
//           color="neutral"
//           size="sm"
//           sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
//         >
//           <BookmarkAdd />
//         </IconButton>
//       </div>
//       <AspectRatio>
//       <picture>
//             <source type="image/webp" srcSet={`${webp}, ${webp2x}`} />
//             <img
//               src={img}
//               alt={title}
//               srcSet={img2x}
//             />
//           </picture>
//       </AspectRatio>
//       <CardContent orientation="horizontal">
//         <div>
//           <Typography className={cls.pump_card__desc}>{desc}</Typography>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


const PumpCard = (card: PumpCardType): React.ReactNode => {
  const { img, img2x, webp, webp2x, title, desc } = card;
  return (
    <article className={cls.pump_card}>
      <div className={cls.pump_card__wrapper}>
        <h3 className={cls.pump_card__title}>{title}</h3>
        <div className={cls.pump_card__img}>
          <picture>
            <source type="image/webp" srcSet={`${webp}, ${webp2x}`} />
            <img
              src={img}
              alt={title}
              srcSet={img2x}
            />
          </picture>
        </div>
        <p className={cls.pump_card__desc}>{desc}</p>
      </div>
    </article>
  );
};

export default PumpCard;

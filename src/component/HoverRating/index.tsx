import { Box, Rating } from "@mui/material";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './HoverRating.scss';

const labels: { [index: string]: string } = {
  // 0.5: '有研究沒用過',
  // 1: '有研究測試過',
  // 1.5: '熟練度低',
  // 2: '熟練度低，但有使用過',
  // 2.5: '熟練度中',
  // 3: '熟練度中，時常使用',
  // 3.5: '熟練度中上',
  // 4: '熟練度中上，時常使用',
  // 4.5: '熟練度高',
  // 5: '熟練度高+',

  // 0.5: '有研究沒用過',
  // 1: '有研究測試過',
  // 1.5: '很少使用',
  // 2: '熟練度中下，以前有使用過',
  // 2.5: '熟練度中，有使用過',
  // 3: '熟練度中',
  // 3.5: '熟練度中上',
  // 4: '熟練度中上，時常使用',
  // 4.5: '熟練度高',
  // 5: '熟練度高+',

  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function HoverRating({ rating = 3.5 }: { rating?: number}) {
  const [value, setValue] = React.useState<number | null>(rating);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      className="HoverRating"
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        /* onChange={(event, newValue) => {
          setValue(newValue);
        }} */
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box className="label" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
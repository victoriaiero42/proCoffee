import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CustomizedRatings() {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom empty icon</Typography>
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}

// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// export default function StarRating() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   return (
//     <div>
//       {[...Array(5)].map((star, index) => {
//         const ratingValue = index + 1;

//         return (
//           <label>
//             <input
//               type="radio"
//               name="rating"
//               value={ratingValue}
//               onClick={() => setRating(ratingValue)}
//             />
//             <FaStar
//               className="star"
//               color={ratingValue <= (hover || rating) ? 'yellow' : 'lightgray'}
//               size={100}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//       <p>
//         The rating is:
//         {' '}
//         {rating}
//       </p>
//     </div>
//   );
// }

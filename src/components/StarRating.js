import React, { useState } from 'react';
import Star from './Star'; // Adjust the import path if needed

export default function StarRating({
                                      maxRating = 5,
                                      starSize = '4xl', // Default size
                                      starColor = 'yellow-500', // Default color
                                      numberSize = 'text-7xl', // Default size for the number
                                      numberColor = 'text-yellow-500' // Default color for the number
                                   }) {
   const [rating, setRating] = useState(0);
   const [tempRating, setTempRating] = useState(0);

   return (
      <div className='flex items-center gap-4'>
         <div className='flex gap-1'>
            {Array.from({ length: maxRating }, (_, i) => (
               <Star
                  key={i}
                  onClick={() => setRating(i + 1)}
                  full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                  onHoverIn={() => setTempRating(i + 1)}
                  onHoverOut={() => setTempRating(0)}
                  size={starSize}
                  color={starColor}
               />
            ))}
         </div>
         <p className={`m-0 leading-none ${numberSize} ${numberColor}`}>
            {tempRating || rating || ''}
         </p>
      </div>
   );
}
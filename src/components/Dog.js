import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Dog({ name, age, weight }) {
  // const dog = {
  // name: 'Spot',
  // age: 5,
  // weight: '20 lbs'
  return (
    <>
      <Color name ={name} hex="#FF0000" rgb={{ r: 255, g: 0, b: 0 }} />
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
      
        <dt>Age</dt>
        <dd>{age}</dd>

        {weight && (
          <>
            <dt>Weight</dt>
            <dd>{weight ? weight : 'unknown'}</dd>
          </>
        )}
      </dl>
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
};

export default Dog;



  
//Alternate method
// const fields = Object.keys(dog)
//   .map(key => {
//     return (
//       <>
//       <dt>{key}</dt>
//       <dd>{dog[key]}</dd>
//       </>
//     );
//   });

// return (
//   <dl>
//     {fields}
//   </dl>
// );

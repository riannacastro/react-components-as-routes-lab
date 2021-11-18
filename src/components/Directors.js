import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, index) => {
        return <div key={index}>
          {d.name}
          <ul>
            <li>{d.movies}</li>
          </ul>
          </div>
      })}
    </div>
  );
}

export default Directors

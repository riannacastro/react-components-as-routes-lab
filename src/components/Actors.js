import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return <div key={index}>
          {actor.name}
          <ul>
            <li>{actor.movies}</li>
          </ul>
          </div>
      })}
    </div>
  );
};

export default Actors;

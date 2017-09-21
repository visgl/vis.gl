import React from 'react';

export default function Icon({name}) {
  return (<img style={{width: '1em', height: '1em'}} src={`./images/${name}.svg`} alt={name} />);
}
import React from 'react';

interface Interface {
  name: string;
}

const Anchor: React.FC<Interface> = ({ name }) => {
  return <a name={name}></a>;
};

export default Anchor;

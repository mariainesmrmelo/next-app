import React from "react";

export interface Props {
  breed: string;
}

const Card: React.FC<Props> = ({ breed }) => {
  return <div>{breed}</div>;
};

export default Card;

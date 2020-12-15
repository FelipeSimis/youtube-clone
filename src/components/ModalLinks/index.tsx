import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
  icon: string;
  alt?: string;
  label: string;
}

const ModalLinks: React.FC<Props> = ({ path, icon, alt, label }) => {
  return (
    <Link to={path}>
      <img src={icon} alt={alt} />
      <span>{label}</span>
    </Link>
  );
};

export default ModalLinks;

import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, disabled }) => {
  return (
    <button type={type} className={classNames(['btn', className])} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

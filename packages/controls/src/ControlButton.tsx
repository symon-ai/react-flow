import cc from 'classcat';
import { FC, PropsWithChildren } from 'react';

import { ControlButtonProps } from './types';

const ControlButton: FC<PropsWithChildren<ControlButtonProps>> = ({ children, className, ...rest }) => (
  <button type="button" className={cc(['react-flow__controls-button', className])} {...rest}>
    {children}
  </button>
);

ControlButton.displayName = 'ControlButton';

export default ControlButton;

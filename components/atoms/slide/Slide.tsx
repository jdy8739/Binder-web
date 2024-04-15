import { ReactElement } from 'react';
import classNames from 'classnames/bind';

import style from './Slide.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  elementList: ReactElement[];
}

const Slide = ({ className, elementList }: Props) => {
  return <div className={cx(className)}>{elementList}</div>;
};

export default Slide;

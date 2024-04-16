import classNames from 'classnames/bind';

import styles from './Label.module.scss';

const cx = classNames.bind(styles);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label = ({ className = '', htmlFor = '', content = '' }: LabelProps) => {
  return (
    <label className={cx(className, 'label')} htmlFor={htmlFor}>
      {content}
    </label>
  );
};

export default Label;

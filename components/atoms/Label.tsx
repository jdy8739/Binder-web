import classNames from 'classnames/bind';

import styles from './Label.module.scss';

const cx = classNames.bind(styles);

const Label = ({
  className = '',
  htmlFor = '',
  content = '',
}: {
  className?: string;
  htmlFor: string;
  content: string;
}) => {
  return (
    <label className={cx(className, 'label')} htmlFor={htmlFor}>
      {content}
    </label>
  );
};

export default Label;

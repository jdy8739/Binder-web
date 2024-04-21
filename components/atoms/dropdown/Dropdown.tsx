import { ReactNode } from 'react';

import Select from '../select/Select';
import Option from '../option/Option';

interface DropdownProps {
  header?: ReactNode;
  footer?: ReactNode;
  optionList: { value: number | string; text: string; subText?: string }[];
}

const Dropdown = ({ header, footer, optionList }: DropdownProps) => {
  return (
    <section>
      {header && <div>{header}</div>}
      <div>
        <Select>
          {optionList.map((option) => (
            <Option key={option.value}>
              <div>
                <span>{option.text}</span>
                <span>{option.subText}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>
      {footer && <div>{footer}</div>}
    </section>
  );
};

export default Dropdown;

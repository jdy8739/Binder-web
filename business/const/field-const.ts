import { LinkOptionType } from '/components/atoms/option/LinkOption';
import { BasicOption } from '/components/atoms/option/Option';

const BASIC_CONST: BasicOption[] = [
  { value: 'life-science', label: '암생물학' },
  { value: 'virus', label: '바이러스' },
  { value: 'sales', label: '영업' },
  { value: 'bacteria', label: '박테리아' },
  { value: 'genetics', label: '유전학' },
  { value: 'bioinformatics', label: '생명정보' },
  { value: 'medical-equipment', label: '의료기기' },
  { value: 'smart-farm', label: '스마트팜' },
  { value: 'pharmaceutical-engineering', label: '제약공학' },
  { value: 'gardening', label: '식물농업' },
  { value: 'stem-cells', label: '줄기세포' },
  { value: 'food-engineering', label: '식품공학' },
  { value: 'livestock-industry', label: '축산*가축' },
];

const FILED_CONST: LinkOptionType[] = BASIC_CONST.map((con) => {
  return { ...con, link: `/board/field?category=${con.value}` };
});

export { FILED_CONST };

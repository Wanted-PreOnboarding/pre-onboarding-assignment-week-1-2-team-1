import styled from '@emotion/styled';

const ChipSpan = styled.span`
  width: 40px;
  height: 18px;
  font-size: 10px;
  color: #ffffff;
`;
const MdChip = styled(ChipSpan)`
  background-color: #4a9536;
`;
const SaleChip = styled(ChipSpan)`
  background-color: #483695;
`;
const BestChip = styled(ChipSpan)`
  background-color: #483695;
`;

function Chip({ chip }) {
  switch (chip) {
    case 'MD':
      return <MdChip>MD</MdChip>;
    case 'SALE':
      return <SaleChip>SALE</SaleChip>;
    case 'BEST':
      return <BestChip>BEST</BestChip>;
    default:
      return null;
  }
}

export default Chip;

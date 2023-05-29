import Antwerp from '../../meals_mock_api/antwerp.json';
import Chicago from '../../meals_mock_api/chicago.json';
import SanFrancisco from '../../meals_mock_api/san_francisco.json';
import Toronto from '../../meals_mock_api/toronto.json';
import BusinessType from '../Types/BusinessType';

export const listOfBusiness: Array<BusinessType> = [
  ...Antwerp.results,
  ...Chicago.results,
  ...SanFrancisco.results,
  ...Toronto.results,
];

export const getAllOperationalBusiness = () =>
  listOfBusiness.filter(
    BusinessType => BusinessType.business_status === 'OPERATIONAL',
  );

export const getAllOpenedBusiness = () =>
  listOfBusiness.filter(
    BusinessType => BusinessType.opening_hours?.open_now === true,
  );

export const getBusinessByType = (
  typeOfBusiness: string,
  prevBusiness?: Array<BusinessType>,
) => {
  const filteredBusiness = listOfBusiness.filter(Business =>
    Business.types?.includes(typeOfBusiness),
  );
  console.log(filteredBusiness.length);
  return filteredBusiness;
};

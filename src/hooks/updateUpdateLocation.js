import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_LOCATION } from '../graphql/mutations';

const useUpdateLocation = () => {

  const [getLocationValues, { loading }] = useMutation(UPDATE_LOCATION, {
    refetchQueries: [{
      query: CURRENT_CONTENT,
    }],
  });
  
  const updateCurrentLocation = async ({ address, postalCode, city }) => {
    try {
      const response = await getLocationValues({
        variables: {
          getNewAddressData: address,
          getNewPostalCodeData: postalCode,
          getNewCityData: city,
        },
      });

      return response.data;
    } catch (error) {
      return error
    }
  };

  return [updateCurrentLocation, { loadingUpdateLocation: loading }];
};

export default useUpdateLocation;

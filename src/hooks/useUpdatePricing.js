import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_PRICING } from '../graphql/mutations';

const useUpdatePricing = () => {

  const [getPricingValues, { loading }] = useMutation(UPDATE_PRICING, {
    refetchQueries: [{
      query: CURRENT_CONTENT
    }],
  });

  const updateCurrentPrices = async ({ oneTimeSolo, oneTimeDuo, threeTimeSolo, threeTimeDuo, fiveTimeSolo, fiveTimeDuo }) => {

    try {
      const response = await getPricingValues({
        variables: {
          OneTimeSolo: parseInt(oneTimeSolo),
          OneTimeDuo: parseInt(oneTimeDuo),
          ThreeTimeSolo: parseInt(threeTimeSolo),
          ThreeTimeDuo: parseInt(threeTimeDuo),
          FiveTimeSolo: parseInt(fiveTimeSolo),
          FiveTimeDuo: parseInt(fiveTimeDuo)
        }
      });

      return response.data;
    } catch (error) {
      console.log(error.message)
      return error
    };
  };

  return [updateCurrentPrices, { loadingUpdatePrice: loading }];
};

export default useUpdatePricing;

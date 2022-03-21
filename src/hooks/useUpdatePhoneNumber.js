import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_PHONE_NUMBER } from '../graphql/mutations';

const useUpdatePhoneNumber = () => {

  const [getPhoneNumberValue, { loading }] = useMutation(UPDATE_PHONE_NUMBER, {
    refetchQueries: [{
      query: CURRENT_CONTENT,
    }],
  });
  
  const updateCurrentPhoneNumber = async ({ phonenumber }) => {

    try {
      const response = await getPhoneNumberValue({
        variables: {
          getNewNumberData: phonenumber,
        },
      });

      return response.data;
    } catch (error) {
      return error
    }
  };

  return [updateCurrentPhoneNumber, { loadingUpdatePhoneNumber: loading }];
};

export default useUpdatePhoneNumber;

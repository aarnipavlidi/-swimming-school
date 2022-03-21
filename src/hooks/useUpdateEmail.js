import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_EMAIL } from '../graphql/mutations';

const useUpdateEmail = () => {

  const [getEmailValue, { loading }] = useMutation(UPDATE_EMAIL, {
    refetchQueries: [{
      query: CURRENT_CONTENT,
    }],
  });
  
  const updateCurrentEmail = async ({ email }) => {

    try {
      const response = await getEmailValue({
        variables: {
          getNewEmailData: email,
        },
      });

      return response.data;
    } catch (error) {
      return error
    }
  };

  return [updateCurrentEmail, { loadingUpdateEmail: loading }];
};

export default useUpdateEmail;

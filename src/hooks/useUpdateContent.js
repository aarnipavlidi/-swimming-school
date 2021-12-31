import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_CONTENT } from '../graphql/mutations';

const useUpdateContent = () => {

  const [getContentValues, { loading }] = useMutation(UPDATE_CONTENT, {
    refetchQueries: [{
      query: CURRENT_CONTENT
    }],
  });

  const updateCurrentContent = async ({ elementData, elementValueData }) => {

    try {
      const response = await getContentValues({
        variables: {
          getElementData: elementData,
          getElementValueData: elementValueData
        },
      });

      console.log(response)

      return response.data;
    } catch (error) {
      console.log(error.message)
      return error
    }
  };

  return [updateCurrentContent, { loadingUpdateContent: loading }];
};

export default useUpdateContent;

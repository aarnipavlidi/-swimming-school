import { useMutation } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';
import { UPDATE_CONTENT } from '../graphql/mutations';

const useUpdateContent = () => {

  const [getContentValues, { loading }] = useMutation(UPDATE_CONTENT, {
    refetchQueries: [{
      query: CURRENT_CONTENT
    }],
  });

  const updateCurrentContent = async ({ sourceData, elementData, elementValueData }) => {

    try {
      const response = await getContentValues({
        variables: {
          getSourceData: sourceData,
          getElementData: elementData,
          getElementValueData: elementValueData
        },
      });

      return response.data;
    } catch (error) {
      return error
    }
  };

  return [updateCurrentContent, { loadingUpdateContent: loading }];
};

export default useUpdateContent;

import { useApolloClient, useMutation } from '@apollo/client';
import { ADMIN_LOGIN } from '../graphql/mutations';

const useLogin = () => {

  const client = useApolloClient();
  const [getAdminCredentials, { loading }] = useMutation(ADMIN_LOGIN, {
    onError: (error) => {
      console.log(error)
    }
  });

  const adminLogin = async ({ username, password }) => {

    const response = await getAdminCredentials({
      variables: {
        usernameData: username,
        passwordData: password
      }
    });

    if (response.data) {

      const getTokenValue = response.data.loginAdmin.value;
      await localStorage.setItem('current-admin-token', getTokenValue);
      client.resetStore();
      return response.data;
    } else {
      client.resetStore();
      return null;
    };
  };

  return [adminLogin, { adminLoading: loading }]
};

export default useLogin;

export const EditFooterMainContainer = {
  element: {
    flex: 1/3,
  },
  titleContainer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
  },
  titleContent: {
    padding: 10,
    fontSize: 19,
    backgroundColor: 'var(--secondary-color)',
  },
};

export const EditFooterLocationContainer = {
  element: {
    width: '100%',
    marginBottom: 25,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    color: 'var(--content-color)'
  },
  labelContainer: {
    fontSize: 15,
    color: 'var(--content-color)'
  },
  labelIcon: {
    marginRight: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    marginTop: 25,
    marginBottom: 25,
  },
  button: {
    backgroundColor: 'var(--dashboard-color)',
  },
  content: {
    display: 'flex',
    gap: 10,
    color: 'var(--secondary-color)',
    alignItems: 'center',
  }
};

import { Provider } from 'react-redux';
import { createReduxStore } from '../../store';

export const renderWithRedux = (component, initialState) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{component}</Provider>;
};

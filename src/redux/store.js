import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, {
  fetchData,
} from './metrics/metricsSlice';

const store = configureStore({
  reducer: {
    cryptoCurrency: CryptoReducer,
  },
});
store.dispatch(fetchData());
export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins';

export const fetchData = createAsyncThunk(
  'features/fetchCryptoData',
  async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data.coins;
  },
);

const metricsSlice = createSlice({
  name: 'cryptoCurrency',
  initialState: { cryptoCurrency: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cryptoCurrency = action.payload;
      });
  },
});

export default metricsSlice.reducer;

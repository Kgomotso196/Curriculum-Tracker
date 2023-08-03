import metricsReducer, { fetchData } from '../redux/metrics/metricsSlice';

describe('metricsSlice reducer', () => {
  it('should handle initial state', () => {
    expect(metricsReducer(undefined, {})).toEqual({
      cryptoCurrency: [],
      status: 'idle',
    });
  });

  it('should handle fetchData.pending', () => {
    const nextState = metricsReducer(undefined, fetchData.pending);
    expect(nextState.status).toBe('pending');
  });

  it('should handle fetchData.fulfilled', () => {
    const mockData = [
      { id: 'BTC', name: 'Bitcoin', symbol: 'BTC' },
    ];
    const nextState = metricsReducer(undefined, fetchData.fulfilled(mockData));
    expect(nextState.status).toBe('idle');
    expect(nextState.cryptoCurrency).toEqual(mockData);
  });
});

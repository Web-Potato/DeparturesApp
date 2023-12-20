import { describe, it, expect, vi } from 'vitest';
import useFlightData from '../src/composables/useFlightData';
import axios from 'axios';

// Mock axios
vi.mock('axios', () => ({
    default: {
      get: vi.fn(() => Promise.resolve({
        data: {
          allDepartures: [{ flightNumber: '123', status: 'On Time' }]
        }
      })),
    },
  }));
  
//test suite
describe('useFlightData', () => {
    it('fetches flight data successfully', async () => {
        const { fetchData, allDepartures, loading, error } = useFlightData();
        //assertions
        expect(allDepartures.value).toEqual([]);
        expect(loading.value).toBeFalsy();
        expect(error.value).toBeNull();
      
        await fetchData();
      
        expect(allDepartures.value).toEqual([{
          flightNumber: '123', 
          status: 'On Time',
          borderColor: '#52D3D8'
        }]);
        //assertions after call
        expect(loading.value).toBeFalsy();
        expect(error.value).toBeNull();
      });
});

//test simulates successful data fetching
//Initialise state > perform actions > check resulting state
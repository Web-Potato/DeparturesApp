import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FlightBoard from '../src/components/FlightBoard.vue';
import FlightCard from '../src/components/FlightCard.vue';

//test suite
describe('FlightBoard', () => {
  it('render list of flight cards from allDepartures, ignoring changing labels', () => {
    const allDepartures = [
      {
        flightNumber: '123',
        scheduledDepartureDateTime: new Date(),
        arrivalAirport: { cityName: 'City1', countryName: 'Country1', code: 'C1' },
        airline: { name: 'Airline1' },
        departureGate: { number: '1' },
        status: 'On Time',
        borderColor: '#000'
      },
    ];
    
    const wrapper = mount(FlightBoard, {
      props: { allDepartures },
      global: {
        mocks: {
            //mock function as component uses global one that is not accessible in the unit test
          $formatTime: (time) => time.toString(),
        }
      }
    });

    const flightCards = wrapper.findAllComponents(FlightCard);
    expect(flightCards.length).toBe(allDepartures.length);

    //assertions for checking props
    flightCards.forEach((card, index) => {
      const props = card.props();
      expect(props.time).toBe(allDepartures[index].scheduledDepartureDateTime.toString());
      expect(props.city).toBe(allDepartures[index].arrivalAirport.cityName);
      // ignoring checking 'country' and 'flightNumber' because of interval on the component
      expect(props.code).toBe(allDepartures[index].arrivalAirport.code);
      expect(props.airline).toBe(allDepartures[index].airline.name);
      expect(props.gate).toBe(allDepartures[index].departureGate ? allDepartures[index].departureGate.number : 'N/A');
      expect(props.status).toBe(allDepartures[index].status);
      expect(props.borderColor).toBe(allDepartures[index].borderColor);
    });
  });
});

//test mounts component with props and ensures component correctly shows data ignoring dynamic features
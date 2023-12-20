import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FlightCard from '../src/components/FlightCard.vue';

//test suite
describe('FlightCard', () => {
    //test case
  it('renders correctly with props', () => {
    //mount component with props
    const wrapper = mount(FlightCard, {
      props: {
        time: '10:00',
        city: 'Warsaw',
        country: 'Poland',
        code: 'WAW',
        airline: 'Lot',
        gate: '10',
        status: 'Delayed',
        borderColor: '#000',
        flightNumber: '666'
      }
    });
    // variables as city and country are changing with interval
    const cityText = wrapper.text().includes('Warsaw');
    const countryText = wrapper.text().includes('Poland');
    // variables as flight number and and airline are changing with interval as well
    const flightNumberText = wrapper.text().includes('666');
    const airlineText = wrapper.text().includes('Lot');
    //assertions to check if content is present
    expect(wrapper.text()).toContain('10:00'); //time
    expect(cityText || countryText).toBeTruthy(); // city or country
    expect(airlineText || flightNumberText).toBeTruthy(); // airline or flight number
    expect(wrapper.text()).toContain('Lot'); // airline
    expect(wrapper.text()).toContain('10'); // gate
    expect(wrapper.text()).toContain('Delayed'); // status
  });
});

//Test checks if text from props is present in components.

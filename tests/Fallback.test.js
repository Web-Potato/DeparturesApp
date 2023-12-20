import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Fallback from '../src/components/Fallback.vue';

//test suite
describe('Fallback', () => {
    it('renders the loader correctly', () => {
        const wrapper = mount(Fallback);
      
        // check for loader container
        expect(wrapper.find('.loader').exists()).toBe(true);
      
        // check for number of span elements rendered
        const spans = wrapper.findAll('.loader span');
        expect(spans.length).toBe(7);
      
        // check for text content of each span if applicable
        const expectedText = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
        spans.forEach((span, index) => {
          expect(span.text()).toBe(expectedText[index]);
        });
      });
  });

  //test for checking loader rendering
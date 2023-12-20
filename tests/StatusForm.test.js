import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

//test suite
describe('App', () => {
    it('renders the form correctly', () => {
        const wrapper = mount(App);
      
        // check if form is present
        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);
      
        // check if form elements render ignoring text input as its dynamic
        expect(form.find('.flight-select').exists()).toBe(true);  // select
        expect(form.find('.radio-container').exists()).toBe(true); // radio group
        expect(form.find('button').exists()).toBe(true);  // submit button

      });
  });

  //test checks if form renders in App.vue
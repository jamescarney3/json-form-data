'use strict';

import JSFormData from '../src/form-data';


test('returns the value of a present key', () => {
  const formData = new JSFormData();
  
  formData._data = { foo: ['bar'] };
  expect(formData.getAll('foo')).toEqual(['bar'])
});


test('returns null if key not present', () => {
  const formData = new JSFormData();
  
  expect(formData.getAll('foo')).toEqual([]);
});
import React from 'react';
import { createContentPlugin } from '@react-page/create-plugin-materialui';

export const basicCustomContentPlugin = createContentPlugin<{
  // define the fields the plugin should have
  firstName: string;
  lastName: string;
  age: number;
  location: {
    lat: number;
    lng: number;
  };
}>({
  Renderer: ({ state }) => (
    <div>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname: {state.lastName}</p>
      <p>Age: {state.age}</p>
      {state.location.lat && (
        <div>
          <p>Latitude: {state.location.lat}</p>
          <p>Longitude: {state.location.lng}</p>
        </div>
      )}
    </div>
  ),
  version: '0.0.1',
  // a unique name
  name: 'person-content-plugin',
  // a user facing plugin name
  text: 'Person content plugin',
  // description shown below the user facing name in the plugin menu
  description: 'Persons first and last name.',
  schema: {
    title: 'Optional schema title',
    // properties reflecting the fields definition <T> of createContentPlugin<T>()
    properties: {
      firstName: {
        // the Label of the field in edit mode
        title: 'First name',
        type: 'string',
        minLength: 2, // schema validation property
      },
      lastName: {
        title: 'Last name',
        type: 'string',
        // a regex pattern to validate the string
        pattern: '^[A-Z].+',
      },
      age: {
        title: 'Age in years',
        type: 'integer',
        // validation properties for number/integer fields
        minimum: 0,
        maximum: 120,
      },
      // a nested object property
      location: {
        type: 'object',
        title: 'The persons position',
        properties: {
          lat: {
            type: 'number',
            minimum: 0,
            title: 'Latitude',
          },
          lng: {
            type: 'number',
            minimum: 0,
            title: 'Longitude',
          },
        },
        required: ['lat', 'lng'],
      },
    },
    required: ['firstName'],
  },
});

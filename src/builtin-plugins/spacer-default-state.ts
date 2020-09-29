export const spacerDefaultState = {
  id: '43ecb32b-56bc-49d0-8444-1c263ac4e666',
  cells: [
    {
      id: 'd302ba70-3658-421e-98c6-27715321a005',
      inline: null,
      size: 12,
      rows: [
        {
          id: '51385c4b-0d03-4d14-b9dc-af832aa3fa87',
          cells: [
            {
              id: '598c7bc8-a329-45d8-acb4-344a8925b069',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.4',
                },
                state: {
                  slate: [
                    {
                      type: 'PARAGRAPH/PARAGRAPH',
                      children: [{ text: 'asdfasdf' }],
                      data: { align: 'center' },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          id: '166bc380-5b03-45ec-b2da-c198de54cc59',
          cells: [
            {
              id: '593ca470-cbbe-40cb-9ba9-3ac78ada9d3f',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/spacer',
                  version: '0.0.1',
                },
                state: { height: 227 },
              },
            },
          ],
        },
        {
          id: 'fd338d04-0df4-4da9-abc0-8bc3de6017c9',
          cells: [
            {
              id: 'dfbf8e78-b2c8-481b-8b03-4e93895e5c26',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.4',
                },
                state: {
                  slate: [
                    {
                      type: 'PARAGRAPH/PARAGRAPH',
                      children: [{ text: 'Text after spacer' }],
                      data: { align: 'center' },
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

export const imageDefaultState = {
  id: 'c5280b2e-30a7-47e3-be61-6528e7f4e5b3',
  cells: [
    {
      id: 'bab577e7-f221-4ce0-a2ff-48932ab30ab7',
      inline: null,
      size: 6,
      content: {
        plugin: { name: 'ory/editor/core/content/image', version: '0.0.1' },
        state: { src: 'https://picsum.photos/200/300' },
      },
    },
    {
      id: '492884cf-f572-47c4-b745-cf07a4d14b23',
      inline: null,
      size: 6,
      rows: [
        {
          id: '1b17552a-61ec-44ff-841d-de13d7aa670c',
          cells: [
            {
              id: 'cc8dd504-1e09-410e-9f92-5661b5eeb01a',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/image',
                  version: '0.0.1',
                },
                state: { src: 'https://picsum.photos/200/50' },
              },
            },
          ],
        },
        {
          id: '5d9b481a-f1b5-4c6d-a97e-5c51557e3a3f',
          cells: [
            {
              id: 'd7dbad16-01a6-4f0b-b6d7-1bd1cb16a642',
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
                      children: [{ text: 'A text' }],
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

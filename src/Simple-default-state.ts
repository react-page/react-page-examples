export const simpleDefaultState = {
  id: 'f3a9fe8e-f35c-49ca-a262-d743e5f470ff',
  cells: [
    {
      id: 'd938a360-c33c-4775-bc50-251a581fa9c8',
      inline: null,
      size: 12,
      rows: [
        {
          id: 'f25a09e6-df6e-4c0a-98a2-4d56efeadfb5',
          cells: [
            {
              id: 'e4992c9b-1128-45c4-8ca8-58aee201df5a',
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
                      children: [{ text: "I'm an example text" }],
                      type: 'HEADINGS/HEADING-ONE',
                      data: { align: 'center' },
                    },
                    {
                      type: 'LISTS/ORDERED-LIST',
                      children: [
                        {
                          children: [{ text: 'Example list' }],
                          type: 'LISTS/LIST-ITEM',
                          data: { align: 'left' },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          id: '64990718-34e6-4681-a581-69d1f32c7576',
          cells: [
            {
              id: 'f19d10f2-3617-4d04-a259-cd9c88ff2d82',
              inline: null,
              size: 12,
              layout: {
                plugin: {
                  name: 'ory/editor/core/layout/background',
                  version: '0.0.1',
                },
                state: {
                  gradients: [
                    {
                      deg: 95,
                      opacity: 1,
                      colors: [{ color: { r: 164, g: 56, b: 94, a: 1 } }],
                    },
                  ],
                },
              },
              rows: [
                {
                  id: '72ed6609-6958-47cf-9cd9-2598099e568e',
                  cells: [
                    {
                      id: '29cdf844-3691-4907-a755-53e8a2be8cc3',
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
                              children: [
                                { text: "I'm a text with background" },
                              ],
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
        },
      ],
    },
  ],
};

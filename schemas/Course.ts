import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select } from '@keystone-next/fields';

export const Course = list({
  fields: {
    name: text({ isRequired: true }),
    topic: relationship({
      ref: 'Topic.courses',
      many: false,
    }),
    description: text({
      isRequired: true,
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'CourseImage.course',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    tags: relationship({
      ref: 'Tag.courses',
      many: true,
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
  },
});

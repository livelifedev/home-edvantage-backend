import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Tag = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    courses: relationship({
      ref: 'Course.tags',
      many: true,
    }),
  },
});

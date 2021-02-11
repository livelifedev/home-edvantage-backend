import 'dotenv/config';
import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'homeedvantage',
};

export const CourseImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    course: relationship({ ref: 'Course.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'course'],
    },
  },
});

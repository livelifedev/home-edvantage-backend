import 'dotenv/config';
// import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
// import {
//   withItemData,
//   statelessSessions,
// } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Topic } from './schemas/Topic';
import { TopicImage } from './schemas/TopicImage';
import { Course } from './schemas/Course';
import { CourseImage } from './schemas/CourseImage';
import { Tag } from './schemas/Tag';
// import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/home-edvantage';

// const sessionConfig = {
//   maxAge: 60 * 60 * 24 * 360,
//   secret: process.env.COOKIE_SECRET,
// };

// const { withAuth } = createAuth({
//   listKey: 'User',
//   identityField: 'email',
//   secretField: 'password',
//   initFirstItem: { fields: ['name', 'email', 'password'] },
// });

// export default withAuth(
export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // async onConnect(keystone) {
    //   console.log('connected to db');
    //   if (process.argv.includes('--seed-data')) {
    //     await insertSeedData(keystone);
    //   }
    // },
  },
  lists: createSchema({ User, Topic, TopicImage, Course, CourseImage, Tag }),
  ui: {
    isAccessAllowed: (context) => true,
    enableSessionItem: false,
  },
  // session: withItemData(statelessSessions(sessionConfig), { User: 'id' }),
});
// );

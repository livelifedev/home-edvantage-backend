import { courses } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${courses.length} Products`);
  const { mongoose } = adapter;
  for (const course of courses) {
    console.log(`  🛍️ Adding Product: ${course.name}`);
    if (course.photo) {
      const { _id } = await mongoose
        .model('CourseImage')
        .create({ image: course.photo, altText: course.description });
      course.photo = _id;
    }
    await mongoose.model('Course').create(course);
  }
  console.log(`✅ Seed Data Inserted: ${courses.length} Courses`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}

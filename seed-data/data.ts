function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const courses = [
  {
    name: 'Algebra 101',
    description: 'Learn the fundamentals of algebra.',
    photo: {
      id: '602518d6fb6a32f759a1cd34',
      filename: 'home-ed.jpg',
      originalFilename: 'home-ed.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'homeedvantage/602518d6fb6a32f759a1cd34',
        version: 1613043928,
        signature: 'a72a7a32413fa3d8e25355b530fa52154315e503',
        width: 561,
        height: 600,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 77735,
        type: 'upload',
        etag: 'bca32fc158ce5ee3a6045cc56002651c',
        placeholder: false,
        url:
          'http://res.cloudinary.com/livelifedev/image/upload/v1613043928/homeedvantage/602518d6fb6a32f759a1cd34.jpg',
        secure_url:
          'https://res.cloudinary.com/livelifedev/image/upload/v1613043928/homeedvantage/602518d6fb6a32f759a1cd34.jpg',
        original_filename: 'file',
      },
    },
    status: 'AVAILABLE',
  },
  {
    name: 'Algebra 102',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    status: 'AVAILABLE',
  },
  {
    name: 'Master the Fundamentals of Math',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    status: 'AVAILABLE',
  },
  {
    name: 'Master Discrete Mathematics: Sets, Math Logic, and More',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    status: 'AVAILABLE',
  },
  {
    name: 'High School Advanced Maths',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 'AVAILABLE',
  },
  {
    name: 'Elementary School Geometry',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
    status: 'AVAILABLE',
  },
  {
    name: 'General Mathematics',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
    status: 'AVAILABLE',
  },
  {
    name: 'Einstein Equations',
    description: '1914 translation by H. Rackham',
    status: 'AVAILABLE',
  },
  {
    name: 'Diagrams in English for Maths',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    status: 'AVAILABLE',
  },
  {
    name: 'Physics Basics',
    status: 'AVAILABLE',
    description:
      'Pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
  {
    name: 'Training Your Brain for Advanced High School Mathematics',
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
    status: 'AVAILABLE',
  },
  {
    name: 'Maths',
    description: 'This is a maths course.',
    photo: {
      id: '6024e5577f3aebee5973c01a',
      filename: 'home-edvantage-bw.jpg',
      originalFilename: 'home-edvantage-bw.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'homeedvantage/6024e5577f3aebee5973c01a',
        version: 1613030745,
        signature: '28147a49adbd0d61ae7199812c74aab698b0ddfa',
        width: 533,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 58610,
        type: 'upload',
        etag: 'a8ea50788339585783eb59b8ac61d401',
        placeholder: false,
        url:
          'http://res.cloudinary.com/livelifedev/image/upload/v1613030745/homeedvantage/6024e5577f3aebee5973c01a.jpg',
        secure_url:
          'https://res.cloudinary.com/livelifedev/image/upload/v1613030745/homeedvantage/6024e5577f3aebee5973c01a.jpg',
        original_filename: 'file',
      },
    },
    status: 'AVAILABLE',
  },
];

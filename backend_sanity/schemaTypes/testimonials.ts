export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',

      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
    {
      name: 'company',
      title: 'Company',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
    {
      name: 'imageurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
  ],
}

export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

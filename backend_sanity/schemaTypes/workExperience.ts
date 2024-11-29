export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
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
      name: 'desc',
      title: 'Desc',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'ar', title: 'Arabic', type: 'string'},
      ],
    },
  ],
}

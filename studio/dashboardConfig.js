export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c6408c14b23a23d093400c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sjvk6nz5',
                  apiId: '19dedf35-4f06-4d3a-988e-5314b161dee3'
                },
                {
                  buildHookId: '62c6408d84fa0720e87fe45e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-16eirgdj',
                  apiId: 'b15e16b7-fef0-4505-a218-17b481ff1e74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sodevious/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-16eirgdj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

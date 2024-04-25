module.exports = {
   semi: false,
   singleQuote: true,
   tabWidth: 2,
   useTabs: true,
   plugins: [import('prettier-plugin-astro')],
   overrides: [
     {
       files: '**/*.astro',
       options: {
         parser: 'astro',
       },
     },
   ],
 }
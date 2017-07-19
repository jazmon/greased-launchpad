module.exports = function(plop) {
  // create your generators here
  plop.setGenerator('module', {
    description: 'generates a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (Casing will be modified)',
      },
      {
        type: 'input',
        name: 'namePlural',
        message: 'Module name (plural) (Casing will be modified)',
      },
    ],
    actions: [
      // Add the module
      {
        type: 'add',
        path: 'src/modules/{{camelCase namePlural}}/endpoint.ts',
        templateFile: 'generators/module/endpoint.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase namePlural}}/index.ts',
        templateFile: 'generators/module/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase namePlural}}/model.ts',
        templateFile: 'generators/module/model.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase namePlural}}/schema.ts',
        templateFile: 'generators/module/schema.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase namePlural}}/type.ts',
        templateFile: 'generators/module/type.ts.hbs',
      },
      // Add to graphql schema
      {
        type: 'modify',
        path: 'src/api/sql/schema.ts',
        pattern: /\/\/ ## GENERATOR SCHEMA IMPORTS/gi,
        template:
          "// ## GENERATOR SCHEMA IMPORTS\nimport { {{camelCase name}}Resolver, {{camelCase name}}SchemaFragment } from '~/modules/{{camelCase namePlural}}';",
      },
      {
        type: 'modify',
        path: 'src/api/sql/schema.ts',
        pattern: /## GENERATOR SCHEMA FRAGMENTS/gi,
        // prettier-ignore
        template:
          '## GENERATOR SCHEMA FRAGMENTS\n  ${{{~camelCase name~}}SchemaFragment}', // eslint-disable-line no-template-curly-in-string, no-useless-escape
      },
      {
        type: 'modify',
        path: 'src/api/sql/schema.ts',
        pattern: /\/\/ ## GENERATOR SCHEMA RESOLVERS/gi,
        template:
          '// ## GENERATOR SCHEMA RESOLVERS\n  {{camelCase name}}Resolver,',
      },
      {
        type: 'modify',
        path: 'src/api/schema.ts',
        pattern: /## GENERATOR SCHEMA IMPORTS/gi,
        template:
          '## GENERATOR SCHEMA IMPORTS\n      {{camelCase namePlural}}: [{{pascalCase namePlural}}]',
      },
      {
        type: 'modify',
        path: 'src/api/schema.ts',
        pattern: /\/\/ ## GENERATOR RESOLVER IMPORTS/gi,
        template:
          '// ## GENERATOR RESOLVER IMPORTS\n{{camelCase namePlural}}(root: any, args: any, context: Context) {\nreturn context.{{pascalCase namePlural}}.getAll();\n},',
      },
      {
        type: 'modify',
        path: 'src/middleware/graphql.ts',
        pattern: /\/\/ ## GENERATOR MODULE IMPORTS/gi,
        template:
          "// ## GENERATOR MODULE IMPORTS\nimport { {{pascalCase namePlural}} } from '~/modules/{{camelCase namePlural}}';",
      },
      // Add to routes
      {
        type: 'modify',
        path: 'src/router.ts',
        pattern: /\/\/ ## GENERATOR ENDPOINT IMPORTS/gi,
        template:
          "// ## GENERATOR ENDPOINT IMPORTS\nimport * as { {{camelCase namePlural}} } from '~/modules/{{camelCase namePlural}}/endpoint';",
      },
      {
        type: 'modify',
        path: 'src/router.ts',
        pattern: /\/\/ ## GENERATOR ROUTES/gi,
        template:
          "// ## GENERATOR ROUTES\nrouter.get('/{{camelCase namePlural}}', {{camelCase namePlural}}.get{{pascalCase namePlural}});",
      },
    ],
  });
};

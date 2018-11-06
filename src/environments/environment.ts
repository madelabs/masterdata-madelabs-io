// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'https://localhost:5000',
  base_url: 'http://localhost:8080',
  client_id: '3gf1rbk1sba7f1r8q3mn6rhslk',
  identity_url: 'https://made.auth.us-east-2.amazoncognito.com',
  ga: null,
  redirect_uri: 'http://localhost:8080/callback' 
};

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:react/recommended",
   
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
    
//     'import/no-default-export': 'error',
// overrides: [
//   {
//     files: ['src/pages/**/*'],
//     rules: {
//       'import/no-default-export': "off",
//       'react/jsx-uses-react': "off",
//       'react/react-in-jsx-scope': 'off',
//       'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
//       'no-use-before-define': ['error', { functions: false }],
//       'no-param-reassign': ['error', { props: false }],
//     },
//   },
// ],
//     "parser": "@typescript-eslint/parser",
//     "parser": "babel-eslint",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint",
//         "react",
//         "import"
//     ],
//     "rules": {
        
//         "semi": ["error", "always"],
//         "quotes": ["error", "double"],
//         "import/no-anonymous-default-export": ["error", {
//             "devDependencies": true,
//             "allowArray": false,
//             "allowArrowFunction": false,
//             "allowAnonymousClass": false,
//             "allowAnonymousFunction": false,
//             "allowCallExpression": true, // backward compatibility -> e.g. export default foo(bar)
//             "allowNew": true,
//             "allowLiteral": false,
//             "allowObject": false
//           }],
//           "import/no-named-as-default": 0,
//         "import/prefer-default-export": "off",
//         "import/prefer-default-export": 0,
//         "import/no-default-export": "error",
//         "import/prefer-default-export": "off",
        
//     },

   
// }

// // module.exports = {
// //     env: {
// //       browser: true,
// //       es2021: true,
// //     },
// //     extends: [
     
     
// //       'plugin:react/recommended',
// //     ],
// //     overrides: [
// //       {
// //         files: [
// //           'src/**/*.jsx',
// //         ],
// //         rules: {
// //           'react/jsx-uses-react': 'off',
// //           'react/react-in-jsx-scope': 'off',
// //           'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
// //           'no-use-before-define': ['error', { functions: false }],
// //           'no-param-reassign': ['error', { props: false }],
// //         },
// //       },
// //     ],
// //     parserOptions: {
// //       ecmaFeatures: {
// //         jsx: true,
// //       },
// //       ecmaVersion: 12,
// //       sourceType: 'module',
// //     },
// //     plugins: [
// //       'react',
// //     ],
// //   };
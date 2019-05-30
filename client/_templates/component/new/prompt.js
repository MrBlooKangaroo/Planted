// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: 'input',
    name: 'folder',
    message: 'Folder Name (i.e. log-in-page, ui-button)',
    validate: input => (input.length ? true : 'You must provide a folder name'),
  },
  {
    type: 'input',
    name: 'component',
    message: 'Component Name (i.e. root, button)',
    validate: input =>
      input.length ? true : 'You must provide a component name',
  },
  {
    type: 'multiselect',
    name: 'additionalFeatures',
    message: 'Additional Features (All added by default)',
    choices: [
      { name: 'hooks', value: 'hooks' },
      { name: 'styles.css', value: 'styles' },
    ],
    initial: ['hooks', 'styles.css'],
  },
];

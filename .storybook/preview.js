import themeDecorator from './theme-decorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  themeDecorator
];
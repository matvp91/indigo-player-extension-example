import { Config, ModuleLoaderTypes } from 'indigo-player';
import { ExampleExtension } from './ExampleExtension';

export const ExampleExtensionLoader = {
  type: ModuleLoaderTypes.EXTENSION,

  create: instance => new ExampleExtension(instance),

  isSupported: ({ config }): boolean => config.enableCustomExtension,
};

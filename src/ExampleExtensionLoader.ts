import { Config, ModuleLoaderTypes } from 'indigo-player';
import { ExampleExtension } from './ExampleExtension';

export const ExampleExtensionLoader = {
  type: ModuleLoaderTypes.EXTENSION,

  create: instance => new ExampleExtension(instance),

  /**
   * When the config contains the variable iAmACustomConfigVariable and it is true,
   * load the ExampleExtension class.
   */
  isSupported: ({ config }): boolean => config.iAmACustomConfigVariable,
};

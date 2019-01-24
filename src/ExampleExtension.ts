import { Module, Events, IInstance } from 'indigo-player';

export class ExampleExtension extends Module {
  public name: string = 'ExampleExtension';

  constructor(instance: IInstance) {
    super(instance);
  }
}

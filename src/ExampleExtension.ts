import { Module, Events, IInstance } from 'indigo-player';

export class ExampleExtension extends Module {
  public name: string = 'ExampleExtension';

  constructor(instance: IInstance) {
    super(instance);

    /**
     * Create a hook in the controller.
     * Example: play, pause, seekTo, setVolume, ...
     */
    instance.controller.hooks.create('play', this.onControllerPlay.bind(this));

    /**
     * An example on how to listen to an event.
     * Example: Execute onPlayerTimeUpdate when the time of the player changes.
     */
    instance.on(Events.PLAYER_STATE_TIMEUPDATE, this.onPlayerTimeUpdate.bind(this));

    /**
     * Retrieve a property from the instance.
     * Example: the container
     * @type {HTMLElement}
     */
    const container: HTMLElement = instance.container;

    // NOTE: this.instance is available in the entire class after calling super(instance).
  }

  onControllerPlay(next) {
    /**
     * Instruct the controller to call the next hook. If there is no hook left to execute,
     * then the original play function in the controller will be called (and the player will start to play)
     */
    next();
  }

  onPlayerTimeUpdate(event) {
    const currentTime: number = event.currentTime;

    // Example: sendToTracking('TIME_CHANGED', currentTime);
  }
}

import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'repro-styles/config/environment';
import 'repro-styles/assets/styles/style.css';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  ready() {
    console.log('App loaded');
  }
}

loadInitializers(App, config.modulePrefix);

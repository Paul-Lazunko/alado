import { injector } from '@injector';

export function initializeInjector() {
  injector.inject({
    appMapping: injector.injected.appMapping || {},
    shadowAppMapping: injector.injected.shadowAppMapping || {},
    requestMapping: injector.injected.requestMapping || {},
    responseMapping: injector.injected.responseMapping || {},
    authMapping: injector.injected.authMapping || {},
    accessControlMapping: injector.injected.accessControlMapping || {},
    propertyDefinitionsMapping: injector.injected.propertyDefinitionsMapping || {},
    controllers: injector.injected.controllers || {},
  });
}

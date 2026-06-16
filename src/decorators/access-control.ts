import { AccessControlConfig, RequestAuthentication } from '@dto';
import { injector } from '@injector';
import { initializeInjector } from './initialize-injector';

export function accessControl(configs: AccessControlConfig<any>[]) {
  initializeInjector();
  return function (...args: any[]) {
    const [
      controller,
      method,
    ] = args;
    const key = `${controller.constructor.name}.${method}`;
    injector.injected.accessControlMapping[key] = configs;
  };
}

import { AladoServerError } from './alado-server-error';

export type AccessControlConfig<T> = {
  inputProperty: string;
  transformInputProperty?: (inputPropertyValue: unknown) => T | Promise<T>;
  compareWithProperty?: string;
  expectedValue?: T;
} & AladoServerError;

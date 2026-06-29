import { AccessControlConfig, AladoServerError, Context } from '@dto';
import { getProperty } from '../accessor';

export async function accessControlChecker(context: Context<any>, request: any): Promise<AladoServerError | void> {
  const { accessControl } = context;
  let success: boolean = true;
  for (const item of accessControl) {
    const {
      inputProperty,
      transformInputProperty,
      statusCode,
      message,
      compareWithProperty,
      expectedValue,
      accessControlHandler,
    } = item;

    let providedValue: unknown = getProperty(request, inputProperty);

    if (typeof transformInputProperty === 'function') {
      providedValue = await transformInputProperty(providedValue);
    }

    if (expectedValue !== undefined) {
      success = expectedValue === providedValue;
    }

    if (!success) {
      return { statusCode, message };
    }

    if (compareWithProperty) {
      const compareWithVale = getProperty(request, compareWithProperty);
      success = compareWithVale === providedValue;
    }

    if (!success) {
      return { statusCode, message };
    }

    if (typeof accessControlHandler === 'function') {
      success = await accessControlHandler(providedValue);
    }

    if (!success) {
      return { statusCode, message };
    }
  }
}

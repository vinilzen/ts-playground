export type SomeEvent =
  | {
      type: 'LOG_OUT';
    }
  | {
      type: 'LOG_IN';
      payload: {
        user: string;
      };
    };

type T01 = {
  type: string;
};
type T02 = {
  type: string;
  payload: Object;
};
type T00 = T01 | T02;

type T0 = Extract<T00, T01>;

const t: T0 = {
  type: 'LOG_IN',
};

/*
 * Wrong
 */
const sendEvent = (type: SomeEvent['type'], payload?: any) => {};

sendEvent('LOG_IN', { user: 'foo' });
sendEvent('LOG_OUT');
sendEvent('LOG_IN');

const sendEvent2 = <Type extends SomeEvent['type']>(
  ...args: Extract<SomeEvent, { type: Type }> extends {
    payload: infer TPayload;
  }
    ? [Type, TPayload]
    : [Type]
) => {};

sendEvent2('LOG_IN', { user: 'foo' });
sendEvent2('LOG_IN');
sendEvent2('LOG_OUT');

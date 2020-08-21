import {
  Status,
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
  Method,
} from '../dist';

type Test = [
  Status,
  [
    // isInformational
    boolean,
    // isSuccess
    boolean,
    // isRedirect
    boolean,
    // isClientError
    boolean,
    // isServerError
    boolean
  ]
];

const tests: Test[] = [
  [Status.HTTP_100_CONTINUE, [true, false, false, false, false]],
  [Status.HTTP_101_SWITCHING_PROTOCOLS, [true, false, false, false, false]],
  [Status.HTTP_200_OK, [false, true, false, false, false]],
  [Status.HTTP_201_CREATED, [false, true, false, false, false]],
  [Status.HTTP_202_ACCEPTED, [false, true, false, false, false]],
  [
    Status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
    [false, true, false, false, false],
  ],
  [Status.HTTP_204_NO_CONTENT, [false, true, false, false, false]],
  [Status.HTTP_205_RESET_CONTENT, [false, true, false, false, false]],
  [Status.HTTP_206_PARTIAL_CONTENT, [false, true, false, false, false]],
  [Status.HTTP_207_MULTI_STATUS, [false, true, false, false, false]],
  [Status.HTTP_208_ALREADY_REPORTED, [false, true, false, false, false]],
  [Status.HTTP_226_IM_USED, [false, true, false, false, false]],
  [Status.HTTP_300_MULTIPLE_CHOICES, [false, false, true, false, false]],
  [Status.HTTP_301_MOVED_PERMANENTLY, [false, false, true, false, false]],
  [Status.HTTP_302_FOUND, [false, false, true, false, false]],
  [Status.HTTP_303_SEE_OTHER, [false, false, true, false, false]],
  [Status.HTTP_304_NOT_MODIFIED, [false, false, true, false, false]],
  [Status.HTTP_305_USE_PROXY, [false, false, true, false, false]],
  [Status.HTTP_306_RESERVED, [false, false, true, false, false]],
  [Status.HTTP_307_TEMPORARY_REDIRECT, [false, false, true, false, false]],
  [Status.HTTP_308_PERMANENT_REDIRECT, [false, false, true, false, false]],
  [Status.HTTP_400_BAD_REQUEST, [false, false, false, true, false]],
  [Status.HTTP_401_UNAUTHORIZED, [false, false, false, true, false]],
  [Status.HTTP_402_PAYMENT_REQUIRED, [false, false, false, true, false]],
  [Status.HTTP_403_FORBIDDEN, [false, false, false, true, false]],
  [Status.HTTP_404_NOT_FOUND, [false, false, false, true, false]],
  [Status.HTTP_405_METHOD_NOT_ALLOWED, [false, false, false, true, false]],
  [Status.HTTP_406_NOT_ACCEPTABLE, [false, false, false, true, false]],
  [
    Status.HTTP_407_PROXY_AUTHENTICATION_REQUIRED,
    [false, false, false, true, false],
  ],
  [Status.HTTP_408_REQUEST_TIMEOUT, [false, false, false, true, false]],
  [Status.HTTP_409_CONFLICT, [false, false, false, true, false]],
  [Status.HTTP_410_GONE, [false, false, false, true, false]],
  [Status.HTTP_411_LENGTH_REQUIRED, [false, false, false, true, false]],
  [Status.HTTP_412_PRECONDITION_FAILED, [false, false, false, true, false]],
  [
    Status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
    [false, false, false, true, false],
  ],
  [Status.HTTP_414_REQUEST_URI_TOO_LONG, [false, false, false, true, false]],
  [Status.HTTP_415_UNSUPPORTED_MEDIA_TYPE, [false, false, false, true, false]],
  [
    Status.HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE,
    [false, false, false, true, false],
  ],
  [Status.HTTP_417_EXPECTATION_FAILED, [false, false, false, true, false]],
  [Status.HTTP_422_UNPROCESSABLE_ENTITY, [false, false, false, true, false]],
  [Status.HTTP_423_LOCKED, [false, false, false, true, false]],
  [Status.HTTP_424_FAILED_DEPENDENCY, [false, false, false, true, false]],
  [Status.HTTP_426_UPGRADE_REQUIRED, [false, false, false, true, false]],
  [Status.HTTP_428_PRECONDITION_REQUIRED, [false, false, false, true, false]],
  [Status.HTTP_429_TOO_MANY_REQUESTS, [false, false, false, true, false]],
  [
    Status.HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE,
    [false, false, false, true, false],
  ],
  [
    Status.HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS,
    [false, false, false, true, false],
  ],
  [Status.HTTP_500_INTERNAL_SERVER_ERROR, [false, false, false, false, true]],
  [Status.HTTP_501_NOT_IMPLEMENTED, [false, false, false, false, true]],
  [Status.HTTP_502_BAD_GATEWAY, [false, false, false, false, true]],
  [Status.HTTP_503_SERVICE_UNAVAILABLE, [false, false, false, false, true]],
  [Status.HTTP_504_GATEWAY_TIMEOUT, [false, false, false, false, true]],
  [
    Status.HTTP_505_HTTP_VERSION_NOT_SUPPORTED,
    [false, false, false, false, true],
  ],
  [Status.HTTP_506_VARIANT_ALSO_NEGOTIATES, [false, false, false, false, true]],
  [Status.HTTP_507_INSUFFICIENT_STORAGE, [false, false, false, false, true]],
  [Status.HTTP_508_LOOP_DETECTED, [false, false, false, false, true]],
  [
    Status.HTTP_509_BANDWIDTH_LIMIT_EXCEEDED,
    [false, false, false, false, true],
  ],
  [Status.HTTP_510_NOT_EXTENDED, [false, false, false, false, true]],
  [
    Status.HTTP_511_NETWORK_AUTHENTICATION_REQUIRED,
    [false, false, false, false, true],
  ],
];

tests.map(
  ([status, [informational, success, redirect, clientError, serverError]]) => {
    describe(`[${status}]`, () => {
      it(`isInformational |> ${informational}`, () => {
        expect(isInformational(status)).toEqual(informational);
      });
      it(`isSuccess |> ${success}`, () => {
        expect(isSuccess(status)).toEqual(success);
      });
      it(`isRedirect |> ${redirect}`, () => {
        expect(isRedirect(status)).toEqual(redirect);
      });
      it(`isClientError |> ${clientError}`, () => {
        expect(isClientError(status)).toEqual(clientError);
      });
      it(`isServerError |> ${serverError}`, () => {
        expect(isServerError(status)).toEqual(serverError);
      });
    });
  }
);

describe('[Method]', () => {
  it('Should contain all the HTTP methods', () => {
    expect(Method).toMatchInlineSnapshot(`
      Object {
        "CONNECT": "CONNECT",
        "DELETE": "DELETE",
        "GET": "GET",
        "HEAD": "HEAD",
        "OPTIONS": "OPTIONS",
        "PATCH": "PATCH",
        "POST": "POST",
        "PUT": "PUT",
        "TRACE": "TRACE",
      }
    `);
  });
});

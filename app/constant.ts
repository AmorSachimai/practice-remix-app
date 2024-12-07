/**
 * @see https://developer.mozilla.org/ja/docs/Web/HTTP/Status
 */
export const HTTP_ERROR_STATUS = {
  BAD_REQUEST_400: 400,
  UNAUTHORIZED_401: 401,
  FORBIDDEN_403: 403,
  NOT_FOUND_404: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const satisfies Record<string, number>;

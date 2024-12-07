import { isRouteErrorResponse } from "@remix-run/react";
import { HTTP_ERROR_STATUS } from "~/constant";

type HttpErrorStatus =
  (typeof HTTP_ERROR_STATUS)[keyof typeof HTTP_ERROR_STATUS];

export const isHttpErrorStatus = (
  status: number,
): status is HttpErrorStatus => {
  return Object.values(HTTP_ERROR_STATUS).some(
    (errorCode) => errorCode === status,
  );
};

export const getErrorStatus = (error: unknown): HttpErrorStatus => {
  if (isRouteErrorResponse(error)) {
    const status = error.status;
    if (isHttpErrorStatus(status)) {
      return status;
    }
  }

  // 例外はすべて500エラー
  return HTTP_ERROR_STATUS.INTERNAL_SERVER_ERROR;
};

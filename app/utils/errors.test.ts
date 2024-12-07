import { UNSAFE_ErrorResponseImpl } from "@remix-run/router";
import { describe, expect, it } from "vitest";
import { HTTP_ERROR_STATUS } from "~/constant";
import { getErrorStatus, isHttpErrorStatus } from "./errors";

describe("isHttpErrorStatus() testing", () => {
  it("定義したエラーステータスであれば True を返す", () => {
    expect(isHttpErrorStatus(HTTP_ERROR_STATUS.BAD_REQUEST_400)).toBeTruthy();
    expect(isHttpErrorStatus(HTTP_ERROR_STATUS.FORBIDDEN_403)).toBeTruthy();
    expect(
      isHttpErrorStatus(HTTP_ERROR_STATUS.INTERNAL_SERVER_ERROR),
    ).toBeTruthy();
    expect(isHttpErrorStatus(HTTP_ERROR_STATUS.NOT_FOUND_404)).toBeTruthy();
    expect(isHttpErrorStatus(HTTP_ERROR_STATUS.UNAUTHORIZED_401)).toBeTruthy();
  });
  it("未定義のエラーステータスであれば False を返す", () => {
    expect(isHttpErrorStatus(100)).toBeFalsy();
    expect(isHttpErrorStatus(300)).toBeFalsy();
    expect(isHttpErrorStatus(303)).toBeFalsy();
    expect(isHttpErrorStatus(402)).toBeFalsy();
  });
});

describe("getErrorStatus() testing", () => {
  it("404 を返す", () => {
    const error = new UNSAFE_ErrorResponseImpl(
      404,
      "Not found",
      new Error("Not found"),
      false,
    );

    expect(getErrorStatus(error)).toEqual(404);
  });
  it("不明なエラーであれば 500 を返す", () => {
    const error = new Error("不明なエラー");

    expect(getErrorStatus(error)).toEqual(500);
  });
});

import { describe, expect, it } from "vitest";
import { HTTP_ERROR_STATUS } from "~/constant";
import { isHttpErrorStatus } from "./errors";

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

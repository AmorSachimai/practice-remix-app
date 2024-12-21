import type { OpenSearchOptions } from "../types";

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");
};

/**
 * ## 検索クエリ作成
 */
export const buildQuery = (querys: OpenSearchOptions): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(querys)) {
    if (isString(value)) {
      searchParams.append(key, value);
    }

    if (isNumber(value)) {
      searchParams.append(key, String(value));
    }

    if (Array.isArray(value)) {
      for (const v of value) {
        if (isString(v)) {
          searchParams.append(key, v);
        }
      }
    }

    if (value instanceof Date) {
      searchParams.append(key, formatDate(value));
    }
  }

  return searchParams.toString();
};

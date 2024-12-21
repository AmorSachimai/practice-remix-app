import { describe, expect, test } from "vitest";
import { NDC, type OpenSearchOptions } from "../types";
import { buildQuery } from "./query";

type TestPattern = {
  patternName: string;
  propsPattern: OpenSearchOptions;
  expected: string;
};

const testPatterns = [
  {
    patternName: "タイトルだけのクエリ",
    propsPattern: { title: "夏目漱石" },
    expected: "title=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3",
  },
  {
    patternName: "日付だけのクエリ",
    propsPattern: { until: new Date("2024/01/01") },
    expected: "until=2024-01-01",
  },
  {
    patternName: "タイトルを複数指定したクエリ",
    propsPattern: { title: ["夏目漱石", "マリーアントワネット"] },
    expected:
      "title=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3&title=%E3%83%9E%E3%83%AA%E3%83%BC%E3%82%A2%E3%83%B3%E3%83%88%E3%83%AF%E3%83%8D%E3%83%83%E3%83%88",
  },
  {
    patternName:
      "タイトルに「マリーアントワネット」を含み、かつ分類（NDC）が「2（歴史）」",
    propsPattern: {
      cnt: 10,
      title: "マリーアントワネット",
      ndc: NDC.History,
    },
    expected:
      "cnt=10&title=%E3%83%9E%E3%83%AA%E3%83%BC%E3%82%A2%E3%83%B3%E3%83%88%E3%83%AF%E3%83%8D%E3%83%83%E3%83%88&ndc=2",
  },
] as const satisfies TestPattern[];

describe("BuildQuery() testing", () => {
  test.each(testPatterns)(
    "正常系: $patternName",
    ({ propsPattern, expected }) => {
      expect(buildQuery(propsPattern)).toEqual(expected);
    },
  );
});

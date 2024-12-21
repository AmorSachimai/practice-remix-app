import { XMLParser } from "fast-xml-parser";

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
  parseAttributeValue: true,
  numberParseOptions: {
    hex: false,
    leadingZeros: false,
  },
});

/**
 * ### NDL API (OpenSearch) のレスポンスをパース
 * xmlはRSS2.0形式で返却される為、それに準拠したパースを行う。
 * @see https://hail2u.net/documents/rss20notes.html#channel_element
 */
export const parseOpenSearchXml = (xml: string) => xmlParser.parse(xml);

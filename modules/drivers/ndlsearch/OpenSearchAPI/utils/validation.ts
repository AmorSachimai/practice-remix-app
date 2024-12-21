import { openSearchResponseSchema } from "../schema";
import type { OpenSearchResponseType } from "../types";

/**
 * ### パースされたオブジェクトをバリデーションする
 * @return OpenSearchResponseType
 */
export const validationOpenSearchSchema = (
  xml: unknown,
): OpenSearchResponseType => {
  return openSearchResponseSchema.parse(xml);
};

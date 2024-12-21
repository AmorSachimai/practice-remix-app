import type { z } from "zod";
import type { MEDIA_TYPES_INFO } from "./constant";
import type { openSearchResponseSchema } from "./schema";

export type MediaType = keyof typeof MEDIA_TYPES_INFO;

/**
 * ## NDC(書籍分類)
 * @see https://www.library.metro.tokyo.lg.jp/support_school/research/for_study/report_guide/tool/ndc/index.html
 */
export enum NDC {
  /** 総記 */
  GeneralWorks = 0,
  /** 哲学 */
  Philosophy = 1,
  /** 歴史 */
  History = 2,
  /** 社会科学 */
  SocialSciences = 3,
  /** 自然科学 */
  NaturalSciences = 4,
  /** 技術 */
  Technology = 5,
  /** 産業 */
  Industry = 6,
  /** 芸術 */
  Arts = 7,
  /** 言語 */
  Language = 8,
  /** 文学 */
  Literature = 9,
}

/**
 * ## Open Search API - 検索オプション
 * 外部提供インタフェース仕様書の12P参照
 * @see https://ndlsearch.ndl.go.jp/file/help/api/specifications/ndlsearch_api_20240712.pdf
 */
export interface OpenSearchOptions {
  /**データプロバイダ ID、データグループ ID、コレクションコード、AcessRights */
  dpid?: string | string[];
  /** すべての項目を対象に検索 */
  any?: string;
  /** タイトル(部分一致・複数可) */
  title?: string | string[];
  /** 作成者(部分一致・複数可) */
  creator?: string | string[];
  /** 出版者(部分一致・複数可) */
  publisher?: string | string[];
  /** デジタル化した製作者(部分一致・複数可) */
  digitizedPublisher?: string | string[];
  /** 分類(NDC, NDLC)(前方一致) */
  ndc?: NDC;
  /** 開始出版年月日 */
  from?: Date;
  /** 終了出版年月日 */
  until?: Date;
  /** 出力レコード上限値（省略時は200とする。max=500） */
  cnt?: number;
  /** レコード取得開始位置（省略時は1とする）  */
  idx?: number;
  /** ISBN(完全一致または前方一致) */
  isbn?: string;
  /** メディアタイプ(完全一致・複数可) */
  mediatype?: MediaType | MediaType[];
}

export type OpenSearchResponseType = z.infer<typeof openSearchResponseSchema>;

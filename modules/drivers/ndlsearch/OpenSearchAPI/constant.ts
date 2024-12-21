/**
 * ## メディアタイプ一覧
 * @see https://ndlsearch.ndl.go.jp/file/help/api/specifications/ndlsearch_api_ap2_20240401.pdf
 */
export const MEDIA_TYPES_INFO = {
  booklet: { name: "紙", description: "資料形態が”紙”であるメタデータ" },
  micro: {
    name: "マイクロ",
    description: "資料形態が”マイクロ”であるメタデータ",
  },
  media: {
    name: "記録メディア",
    description: "資料形態が”記録メディア”であるメタデータ",
  },
  digital: {
    name: "デジタル",
    description: "資料形態が”デジタル”であるメタデータ",
  },
  books: { name: "図書", description: "資料種別が”図書”であるメタデータ" },
  periodicals: {
    name: "雑誌",
    description: "資料種別が”雑誌”であるメタデータ",
  },
  articles: { name: "記事", description: "資料種別が”記事”であるメタデータ" },
  newspapers: { name: "新聞", description: "資料種別が”新聞”であるメタデータ" },
  oldmaterials: {
    name: "和古書・漢籍",
    description: "資料種別が”和古書・漢籍”であるメタデータ",
  },
  maps: { name: "地図", description: "資料種別が”地図”であるメタデータ" },
  electronic: {
    name: "電子資料",
    description: "資料種別が”電子資料”であるメタデータ",
  },
  video: {
    name: "映像資料",
    description: "資料種別が”映像資料”であるメタデータ",
  },
  audio: {
    name: "録音資料",
    description: "資料種別が”録音資料”であるメタデータ",
  },
  online: {
    name: "電子資料・電子雑誌",
    description: "資料種別が”電子書籍・電子雑誌”であるメタデータ",
  },
  doctoral: {
    name: "博士論文",
    description: "資料種別が”博士論文”であるメタデータ",
  },
  reports: {
    name: "規格・テクニカルリポート類",
    description: "資料種別が”規格・テクニカルリポート類”であるメタデータ",
  },
  web: {
    name: "webサイト",
    description: "資料種別が”webサイト”であるメタデータ",
  },
  scores: { name: "楽譜", description: "資料種別が”楽譜”であるメタデータ" },
  manuscripts: {
    name: "文書・図像類",
    description: "資料種別が”文書・図像類”であるメタデータ",
  },
  children: {
    name: "児童書",
    description: "コレクションが”児童書”であるメタデータ",
  },
  repository: {
    name: "リポジトリ収録資料",
    description: "コレクションが”リポジトリ収録資料”であるメタデータ",
  },
  mina: {
    name: "障害者（全体）",
    description: "コレクションが”障害者向け資料”であるメタデータ",
  },
  "mina-daisy": {
    name: "障害者DAISY",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”DAISY”であるメタデータ",
  },
  "mina-audio": {
    name: "録音資料",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”録音資料”であるメタデータ",
  },
  "mina-braille": {
    name: "点字資料",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”点字資料”であるメタデータ",
  },
  "mina-text": {
    name: "テキストデータ",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”テキストデータ”であるメタデータ",
  },
  "mina-video": {
    name: "映像資料",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”映像資料”であるメタデータ",
  },
  "mina-booklet": {
    name: "冊子体資料",
    description:
      "コレクションが”障害者向け資料”であり、資料形態が”冊子体資料”であるメタデータ",
  },
} as const satisfies Record<string, { name: string; description: string }>;

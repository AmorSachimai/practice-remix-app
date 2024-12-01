import type {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import styles from "./index.module.css";

const ButtonSize = {
  default: 20,
  large: 24,
} as const;
type Size = keyof typeof ButtonSize;

/**
 * ### リンク専用ボタン
 * - 確認項目
 *   - reactのstyleは適用されるか
 *   - css modulesは適用されるか
 *   - tailwind css は適用されるか
 */
const LinkButton: FunctionComponent<
  PropsWithChildren<{
    href: string;
    size?: Size;
  }>
> = ({ href, size = "default", children }) => {
  const fontSize = {
    fontSize: ButtonSize[size],
  } satisfies CSSProperties;
  return (
    <a
      href={href}
      className={`bg-blue-500 hover:underline ${styles.link}`}
      target="_blank"
      rel="noreferrer"
    >
      <span style={fontSize}>{children}</span>
    </a>
  );
};

export default LinkButton;

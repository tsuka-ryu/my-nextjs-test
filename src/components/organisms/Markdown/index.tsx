import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./styles.module.css";

export const Markdown = ({ body }: { body: string }) => {
  const components: Components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match;
      return isInline ? (
        <code className={className} {...props}>
          {children}
        </code>
      ) : (
        <SyntaxHighlighter style={coldarkDark} language={match[1]} PreTag="div">
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className={styles.markdown}>
      <ReactMarkdown components={components}>{body}</ReactMarkdown>
    </div>
  );
};

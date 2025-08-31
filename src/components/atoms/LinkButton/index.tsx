import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<typeof Link>;

export const LinkButton = ({
  className,
  theme = "dark",
  variant = "medium",
  disabled,
  href,
  children,
  ...props
}: Props) => (
  <Link
    {...props}
    className={clsx(className, styles.module)}
    aria-disabled={disabled}
    data-theme={theme}
    data-variant={variant}
    href={href}
  >
    {children}
  </Link>
);

import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

import styles from "./styles.module.css";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx("footer", styles.footer, {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div style={{ height: 40 }}>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}

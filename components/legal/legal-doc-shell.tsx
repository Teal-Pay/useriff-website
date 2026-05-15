import Image from "next/image";
import Link from "next/link";

/**
 * Shared legal / disclosures shell: top nav + main.panel wrapper.
 * Matches legacy static HTML structure and class names.
 */
export function LegalDocShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <nav>
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            lineHeight: 0,
            marginTop: "-40px",
            marginBottom: "-40px",
          }}
        >
          <Link href="/" aria-label="Riff">
            <Image
              src="/riff-horiz-logo.svg"
              alt=""
              width={170}
              height={64}
              style={{ display: "block", height: 40, width: "auto" }}
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/#contact-support">Contact / Support</Link>
          <Link href="/" className="btn-nav">
            Back to website
          </Link>
        </div>
      </nav>
      <main className="panel">{children}</main>
    </div>
  );
}

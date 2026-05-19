import "./legal-doc.css";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-doc-root">{children}</div>
  );
}

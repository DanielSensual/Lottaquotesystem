function parseDateInput(dateValue?: string) {
  if (!dateValue) {
    return new Date();
  }

  return new Date(`${dateValue}T12:00:00`);
}

function sanitizeFileName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatPdfDate(dateValue?: string) {
  const date = parseDateInput(dateValue);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function buildPdfDocumentTitle(title: string, dateValue?: string) {
  const date = parseDateInput(dateValue).toISOString().slice(0, 10);
  const safeTitle = sanitizeFileName(title || "document");

  return `${safeTitle}-${date}`;
}

const basePageStyle = `
@page {
  size: A4;
  margin: 14mm;
}

html,
body {
  margin: 0 !important;
  padding: 0 !important;
  background: #ffffff !important;
  color: #111827 !important;
  print-color-adjust: exact !important;
  -webkit-print-color-adjust: exact !important;
  font-family: "Helvetica Neue", Arial, sans-serif !important;
}

body {
  line-height: 1.5;
}

[data-pdf-hide="true"] {
  display: none !important;
}

[data-pdf-root="true"] {
  background: #ffffff !important;
  color: #111827 !important;
}

[data-pdf-root="true"] * {
  box-shadow: none !important;
}

[data-pdf-root="true"] .pdf-card {
  background: #ffffff !important;
  color: #111827 !important;
  border: 1px solid #d4d4d8 !important;
  break-inside: avoid;
  page-break-inside: avoid;
}

[data-pdf-root="true"] .pdf-image {
  background: #f4f4f5 !important;
  color: #111827 !important;
  border: 1px solid #d4d4d8 !important;
}

[data-pdf-root="true"] .pdf-muted {
  color: #52525b !important;
}

[data-pdf-root="true"] .pdf-soft {
  color: #71717a !important;
}

[data-pdf-root="true"] .pdf-accent {
  color: #27272a !important;
  letter-spacing: 0.24em !important;
  text-transform: uppercase !important;
}

[data-pdf-root="true"] .pdf-divider {
  background: #e4e4e7 !important;
}

[data-pdf-root="true"] a {
  color: #111827 !important;
  text-decoration: none !important;
}

[data-pdf-root="true"] .pdf-pill {
  border: 1px solid #d4d4d8 !important;
  background: #fafafa !important;
  color: #27272a !important;
}
`;

export const quotePdfPageStyle = `
${basePageStyle}

[data-pdf-kind="quote"] {
  padding: 0 !important;
}

[data-pdf-kind="quote"] .pdf-hero {
  padding-top: 0 !important;
}

[data-pdf-kind="quote"] .pdf-hero-grid {
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px) !important;
}

[data-pdf-kind="quote"] .pdf-three-column {
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}

[data-pdf-kind="quote"] .pdf-two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}
`;

export const conversationPdfPageStyle = `
${basePageStyle}

[data-pdf-kind="conversation"] {
  padding: 0 !important;
}

[data-pdf-kind="conversation"] .pdf-conversation p {
  break-inside: avoid;
  page-break-inside: avoid;
  orphans: 3;
  widows: 3;
}
`;


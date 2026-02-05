import "./globals.css";

export const metadata = {
  title: "EduKids",
  description: "Kids learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

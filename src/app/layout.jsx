import { inter } from '@/app/ui/fonts'; // Import the Inter font
import '@/app/ui/global.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

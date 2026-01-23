import './globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={heebo.className}>
      <body>{children}</body>
    </html>
  )
}
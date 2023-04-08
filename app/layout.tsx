import '../public/globals.css'

export const metadata = {
  title: 'Podium',
  description: 'Learning model that predicts podiums',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

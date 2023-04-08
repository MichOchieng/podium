import '../public/globals.css'
import Navbar from './components/Navbar'

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
      <body>
        <Navbar/>
        <main className='main-container'>
          {children}
        </main>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Blog using nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.navigation_container}> 
          <h1> 🪻 Lavender blogs 🪻</h1>
        </div>


        <div className={styles.fake_navigation_container}> <h1> 1 </h1>  </div>
        <div className={styles.page_content_container}> 
         {children}
        </div>
      </body>
    </html>
  )
}

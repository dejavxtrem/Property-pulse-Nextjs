
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse',
  description: 'find the perfect rental property',
  keywords: 'rental , property, real estate'
}

const MainLayOut = ({children}) => {
  return (
    <html>
      <body>
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}

export default MainLayOut   



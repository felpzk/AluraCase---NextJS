import LinkPages from '@/components/Link'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Alura Case - Home Page</h1>
      <LinkPages href='/FaqHome'>
        Ir para perguntas
      </LinkPages>
    </div>
  )
}

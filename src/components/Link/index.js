import Link from 'next/link'

export default function LinkPages ({children, href}) {
  return <Link href={href}><p>{children}</p></Link> 
}


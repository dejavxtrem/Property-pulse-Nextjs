import Link from 'next/link'

const HomePage  = () => {
  return (
    <div className="text-2xl">
      <h1> HomePage</h1>
      <Link href='/properties'> Got to properties</Link>
      </div>
  )
}

export default HomePage
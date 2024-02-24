
import Image from 'next/image'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='relative flex min-h-screen w-screen justify-center items-center bg-emerald-600'>
        <button className='absolute w-28 h-10 bg-black rounded-full font-bold text-white text-xl bottom-[12.8%]'><Link href="/">Back</Link></button>
      <Image src="/404Page.jpg" alt="Cannot show" height={500} width={600} className='rounded-full'/>
    </div>
  )
}
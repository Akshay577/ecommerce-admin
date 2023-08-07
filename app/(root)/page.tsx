import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function SetUpPage() {
  return (
<div className='p-4'>
    <UserButton afterSignOutUrl="/"/>
</div>
    )
}

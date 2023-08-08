
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetUpPage() {
  return (
<div className='p-4'>
    <Modal title="Test" description="test" isOpen={true} onClose={() => {}}>Children</Modal>
    {/* <UserButton afterSignOutUrl="/"/> */}

</div>
    )
}

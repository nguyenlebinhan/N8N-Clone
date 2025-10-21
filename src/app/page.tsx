import { LoginForm } from '@/features/auth/components/login-form';
import {caller} from '@/trpc/server'
import { json } from 'zod';
const Page =async() =>{
  
  return (
    <div>
      <LoginForm />
    </div>
  )
}
export default Page
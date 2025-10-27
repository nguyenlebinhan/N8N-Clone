import { requireAuth } from "@/lib/auth-utils";

const Page= async() =>{
    await requireAuth();
    return (
        <div>Credential</div>
    )
}
export default Page;
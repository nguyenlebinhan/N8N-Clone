import Link from "next/link";
import Image from "next/image";
const AuthLayout =({ children }: { children: React.ReactNode }) => {
    return(
    <div className="bg-muted flex-col flex justify-center items-center min-h-svh gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Link href="/" className="flex justify-center items-center gap-2 font-medium">
                <Image src="/logos/logo.svg" alt="Logo" width={30} height={30} />
                NodeBase
            </Link>        
        <>{children}</>
        </div>
    </div>
    )
}
export default AuthLayout;
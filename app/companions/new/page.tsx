import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const NewCompanion = async () => {

    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            { canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col">
                    <h1>Companion Builder</h1>
                    <CompanionForm/>
                </article>
            ) : (
                <article className="companion-limit">
                    <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} className="bg-purple-600 rounded-3xl"/>
                    <div className="cta-badge">
                        Upgrade your plan
                    </div>
                    <div>
                        <h1>You've Reached Your Limit</h1>
                        <p>You've reached your companion limit. Upgrade to create more companions and premium features.</p>
                        <Link href="/subscrption" className="btn-primary w-full justify-center bg-purple-600">
                            Upgrade My Plan
                        </Link>
                    </div>
                </article>
            )}
        </main>
    )
}

export default NewCompanion
"use client";
import Image from "next/image";
import Link from "next/link";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({id, name, topic, subject, duration, color, bookmarked}: CompanionCardProps) => {
    const pathname = usePathname();
    const handleBookmark = async () => {
        if (bookmarked) {
        await removeBookmark(id, pathname);
        } else {
        await addBookmark(id, pathname);
        }
  };
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark" onClick={handleBookmark}>
                <Image
                    src={
                    bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
                    } 
                    alt="bookmark" width={12.5} height={15} />
            </button>
        </div>

        <h2 className="text-2xl text-black font-bold">{name}</h2>
        <p className="text-gray-600 text-sm">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5}/>
            <p className="text-gray-700 text-sm">{duration} min</p>
        </div>

        <Link href={`/companions/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center bg-purple-600">Launch Session</button>
        </Link>
            
    </article>
  )
}

export default CompanionCard
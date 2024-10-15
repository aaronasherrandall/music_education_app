import { Home, Music, Book, Settings } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around border-t">
      <Link href="/" className="flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
      </Link>
      <Link href="/practice" className="flex flex-col items-center">
          <Music className="h-6 w-6" />
          <span className="text-xs">Practice</span>
      </Link>
      <Link href="/learn" className="flex flex-col items-center">
          <Book className="h-6 w-6" />
          <span className="text-xs">Learn</span>
      </Link>
      <Link href="/settings" className="flex flex-col items-center">
          <Settings className="h-6 w-6" />
          <span className="text-xs">Settings</span>
      </Link>
    </div>
  );
}

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      href="/contact"
      aria-label="Contact NexBak Solutions"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-cyan text-navy shadow-cyan transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}

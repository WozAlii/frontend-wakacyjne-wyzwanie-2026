import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
        <Image
          loading="eager"
          src="/profile-default.svg"
          width={500}
          height={500}
          alt="Default profile picture of the author"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className={inter.className}>{role}</p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="https://solvro.pwr.edu.pl/pl/"
          target="_blank"
          rel="noreferrer"
          className="self-start rounded-full bg-blue-200 px-3 py-1 text-xs font-medium text-gray-700 shadow-md transition hover:bg-blue-400 hover:shadow-lg"
        >
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
}

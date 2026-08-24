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
    <div className="flex flex-col gap-4 rounded-2xl bg-pink-200 p-6 text-zinc-800 shadow-md sm:flex-row sm:items-start md:p-8 lg:max-w-3xl">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-zinc-800 text-white text-6xl">
        {name.charAt(0)}
      </div>

      <div>
        <h2 className="text-2xl font-bold">{name}</h2>

        <p className="mt-1 font-bold">{role}</p>

        <p>{bio}</p>

        <p className="mt-2 font-medium text-base">Umiejętności:</p>

        <ul className="italic text-sm">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

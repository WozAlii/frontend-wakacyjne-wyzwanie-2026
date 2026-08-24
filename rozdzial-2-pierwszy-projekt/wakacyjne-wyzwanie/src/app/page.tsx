import TeamMemberCard from "@/TeamMemberCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full items-center justify-center px-4">
        <TeamMemberCard
          name="Alicja Woźnica"
          role="Frontend Developer"
          bio="Uczestniczę w wakacyjnym wyzwaniu na ścieżce frontend"
          skills={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
        ></TeamMemberCard>
      </main>
    </div>
  );
}

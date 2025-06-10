import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/details/${project.id}`}>
      <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
        <div className="relative w-full h-[200px]">
          <Image
            className="rounded-lg border border-border object-cover"
            src={project.icon}
            alt="img"
            fill
          />
        </div>
        <div className="pt-5 space-y-3">
          <h5 className="text-2xl font-bold tracking-tight text-foreground">
            {project.topic}
          </h5>
        </div>
      </div>
    </Link>
  );
}

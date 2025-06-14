
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[150px] flex-col justify-between rounded-md p-6 sm:h-[150px]">
            <skill.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

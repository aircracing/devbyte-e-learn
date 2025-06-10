import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ExperienceDescription from "@/components/experience/exp-description";
import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { allTopics } from "@/config/topics";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";


import dp from "@/public/dp.png";


interface ExperiencePageProps {
  params: {
    expId: string;
  };
}

export default function Experience({ params }: ExperiencePageProps) {
  let exp = allTopics.find((val:any) => val.id === params.expId);
  if (!exp) {
    redirect("/details");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/details"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Topics
      </Link>
      <div>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {exp.topic}
        </h1>

        <div href={siteConfig.lnk} className="mt-4 flex space-x-4">
          <Image
            src={dp}
            alt={"dp"}
            width={42}
            height={42}
            className="rounded-full bg-background"
          />

          <div className="flex-1 text-left leading-tight">
            <p className="font-medium">{siteConfig.developer}</p>
            <p className="text-[12px] text-muted-foreground">
              @{siteConfig.id}
            </p>
          </div>
        </div>
      </div>

      <Image
        src={exp.icon}
        alt={exp.topic}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <div className="mb-7 ">
        {exp.pagesInfoArr.map((page: any, ind: any) => (
          <div key={ind}>
            <ExperienceDescription item={page} />
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/details"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Topics
        </Link>
      </div>
    </article>
  );
}

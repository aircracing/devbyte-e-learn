import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allTopics } from "@/config/topics";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = allTopics;
  if (tabVal === "js") {
    expArr = expArr.filter((val) => val.type === "js");
  } else if (tabVal === "rn") {
    expArr = expArr.filter((val) => val.type === "rn");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[30rem] grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="js">JavaScript</TabsTrigger>
          <TabsTrigger value="rn">ReactNative</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="js">
          {renderContent("js")}
        </TabsContent>
        <TabsContent value="rn">{renderContent("rn")}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}

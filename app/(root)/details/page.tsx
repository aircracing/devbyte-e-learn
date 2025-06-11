import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pagesConfig } from "@/config/pages";
import { ReactNativeArray } from "@/config/rnArray/RnArray";
import { JSArray } from "@/config/jsArray/JsArrayOne";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const renderContent = (tabVal: string) => {
let expArr: any = [];
  if (tabVal == "js") {
    expArr = JSArray;
  } else if (tabVal == "rn") {
    expArr = ReactNativeArray;
  } else if (tabVal == "all") {
    const maxLength = Math.max(JSArray.length, ReactNativeArray.length);
    const interleaved = [];

    for (let i = 0; i < maxLength; i++) {
      if (JSArray[i]) interleaved.push(JSArray[i]);
      if (ReactNativeArray[i]) interleaved.push(ReactNativeArray[i]);
    }
    expArr = interleaved;
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp:any) => (
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

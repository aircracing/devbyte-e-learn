import Chip from "./chip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: any) {
  return (
    <div className="flex my-3 gap-2 flex-wrap">
      {textArr.map((it: any, ind: any) => (
        <Chip key={ind} content={it} />
      ))}
    </div>
  );
}

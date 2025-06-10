const ExperienceDescription = ({ item }: any) => {
  return (
    <div>
   <h3 className="inline-block mt-2 font-heading text-2xl leading-tight lg:text-2xl mb-2">
  {item?.heading}  {item?.subHeading && <span className="text-base ml-2 ">({item?.subHeading})</span>}
</h3>
      
      <ul className="list-disc pl-6 mt-4">
        {item.bulletpoints.map((bullet: any, index: any) => (
          <div key={index}>
            <BottomCard item={bullet} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDescription;

const BottomCard = ({ item }: any) => {
  return (
    <div>
      <p className="mb-4 mt-4 text-2xl ">{item?.bulletHeading}</p>
      <ul className="list-disc pl-6 mt-4 text-gray-500">
        {item.points.map((bullet: any, index: any) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

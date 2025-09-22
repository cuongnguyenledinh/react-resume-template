import { FC, memo } from "react";

import type { TimelineItemType } from "../../../data/dataDef";

const TimelineItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col p-6 text-center md:text-left bg-neutral-200 border border-neutral-300 rounded-md mb-4">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;

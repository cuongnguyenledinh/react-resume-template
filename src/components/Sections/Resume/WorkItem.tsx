import { FC, memo } from "react";

import type { TimelineItemType } from "../../../data/dataDef";

const WorkItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { content, title, date, location } = item;
  return (
    <div className="work-item bg-neutral-200 border border-neutral-300 rounded-md mb-6">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="flex items-center gap-x-2">
        <span className="work-location">{location}</span>
        <span className="work-location">•</span>
        <span className="work-time">{date}</span>
      </div>

      {content}
    </div>
  );
});

WorkItem.displayName = "WorkItem";
export default WorkItem;

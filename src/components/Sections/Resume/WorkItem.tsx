import { FC, memo } from "react";

import type { TimelineItemType } from "../../../data/dataDef";

const WorkItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { content, title, date, location } = item;
  return (
    <div className="work-item bg-neutral-200 border border-neutral-300 rounded-md mb-6">
      <h3>{title}</h3>

      <p className="work-time">{location}</p>
      <p className="work-time">{date}</p>

      {content}
    </div>
  );
});

WorkItem.displayName = "WorkItem";
export default WorkItem;

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Card grid that shows the first `initialCount` items and a toggle for the rest.
// `renderItem` must return a keyed element (cards animate in/out via AnimatePresence).
export default function ExpandableGrid({ items, renderItem, initialCount = 6, columns = "md:grid-cols-2 lg:grid-cols-3" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, initialCount);
  const hiddenCount = items.length - initialCount;

  return (
    <>
      <div className={`grid grid-cols-1 ${columns} gap-6`}>
        <AnimatePresence mode="popLayout">
          {visibleItems.map(renderItem)}
        </AnimatePresence>
      </div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border border-primary/30 text-primary bg-white hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            <span>{isExpanded ? "Show Less" : `Show All (+${hiddenCount})`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </>
  );
}

import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import { Bold } from "lucide-react";

interface iAppProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: iAppProps) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border rounded-t-lg p-2 bg-card flex flex-wrap gap-2 items-center">
      <TooltipProvider>
        <div className="flex flex-wrap gap-2 items-center">
          <Tooltip>
            <TooltipTrigger>
              <Toggle>
                <Bold />
              </Toggle>
            </TooltipTrigger>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default MenuBar;

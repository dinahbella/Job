import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { Control, useController } from "react-hook-form";

interface iAppProps {
  control: Control<any>;
  minSalary: number;
  maxSalary: number;
  step: number;
  currency: string;
}

const SalaryRange = ({
  control,
  minSalary,
  maxSalary,
  step,
  currency,
}: iAppProps) => {
  const { field: fromField } = useController({
    name: "SalaryFrom",
    control,
  });
  const { field: toField } = useController({
    name: "SalaryTo",
    control,
  });

  const [range, setRange] = useState<[number, number]>([
    fromField.value || minSalary,
    toField.value || maxSalary / 2,
  ]);
  function handleChangeRange(value: number[]) {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    fromField.onChange(newRange[0]);
    toField.onChange(newRange[1]);
  }
  return (
    <div className="w-full space-y-4">
      <Slider
        onValueChange={handleChangeRange}
        max={maxSalary}
        value={range}
        min={minSalary}
        step={step}
      />
    </div>
  );
};

export default SalaryRange;

import React from "react";

interface MemberProps {
  name: string;
  desig?: string;
}

const Member: React.FC<MemberProps> = ({ name, desig }) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="shrink-0 bg-yellow-400 shadow-2xl h-[196px] w-[196px] rounded-[32px] max-lg:h-[150px] max-lg:w-[150px]" />
      <div className="mt-8 max-lg:mt-5">
        {name}
        <br />
        {desig}
      </div>
    </div>
  );
};

export default Member;

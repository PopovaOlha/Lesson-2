import { GeneralCardProps } from '../../interfaces';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const GeneralCard = ({ id, emoji, fullName }: GeneralCardProps) => {
  const [athletes, setAthletes] = useState<GeneralCardProps[]>([]);
  const handleSelect = () => {
    setAthletes((prev) => {
      const isSelected = prev.some((athlete) => athlete.id === id);
      if (isSelected) {
        return prev.filter((athlete) => athlete.id === id);
      }
      return [...prev, { id, emoji, fullName }];
    });
    console.log('Selected Athletes:', athletes);
  };
  return (
    <div className="group flex items-center justify-between p-3 bg-[#2f3136] rounded-md hover:bg-[#3c3f45] transition-colors cursor-pointer">
      <div key={id} className="flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <span className="text-white font-medium">{fullName}</span>
      </div>

      <button
        onClick={handleSelect}
        type="button"
        title="Select"
        className="ml-4 p-1.5 rounded-full bg-[#5865f2] text-white hover:bg-[#4752c4] transition"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
};
export default GeneralCard;

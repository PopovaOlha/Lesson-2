import { Props } from '../../interfaces';
import { ArrowRight } from 'lucide-react';

const GeneralCard = ({ id, emoji, fullName, handleSelect }: Props) => {
  return (
    <div>
      <div className="group flex flex-col gap-2 p-3 bg-[#2f3136] rounded-md hover:bg-[#3c3f45] transition-colors cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            <span className="text-white font-medium">{fullName}</span>
          </div>
          <button
            onClick={() => handleSelect({ id, emoji, fullName })}
            type="button"
            title="Select"
            className="ml-4 p-1.5 rounded-full bg-[#5865f2] text-white hover:bg-[#4752c4] transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;

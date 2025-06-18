import { athletes } from '../../data';
import GeneralCard from './GeneralCard';

const GeneralList = () => {
  return (
    <div className="bg-[#36393f] p-6 rounded-xl w-full max-w-md mx-auto space-y-3 shadow-lg">
      <h2 className="text-lg text-center font-semibold text-white mb-4 border-b border-[#42454a] pb-2">
        🏅 Athletes List
      </h2>
      <div className="flex flex-col gap-2">
        {athletes.map((athlete) => (
          <GeneralCard key={athlete.id} {...athlete} />
        ))}
      </div>
    </div>
  );
};

export default GeneralList;

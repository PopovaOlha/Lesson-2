import { SelectedListProps } from '../../interfaces';

const SelectedList = ({ current, newAthletes }: SelectedListProps) => {
  return (
    <div>
      {current && (
        <div className="mt-4 bg-[#2f3136] p-4 rounded-lg border border-[#42454a] space-y-2">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">
            Selected Participants
          </h3>
          {newAthletes.map((athlete) => (
            <div
              key={athlete.id}
              className="flex items-center justify-between bg-[#36393f] hover:bg-[#40444b] transition-colors rounded-md px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{athlete.emoji}</span>
                <span className="text-white font-medium">
                  {athlete.fullName}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedList;

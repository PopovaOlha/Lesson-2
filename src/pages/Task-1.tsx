import { useState } from 'react';
import GeneralList from '../components/task-1/GeneralList';
import { GeneralCardProps } from '../interfaces';
import SelectedList from '../components/task-1/SelectedList';
import { athletes } from '../data';

const Task1 = () => {
  const [newAthletes, newSetAthletes] = useState<GeneralCardProps[]>([]);
  const [current, setCurrent] = useState<GeneralCardProps | null>(null);

  const handleSelect = ({ id, emoji, fullName }: GeneralCardProps) => {
    const foundAthlete = athletes.map((athlete) => athlete.id === id);
    if (foundAthlete) {
      setCurrent(foundAthlete ? { id, emoji, fullName } : null);
      newSetAthletes((prev) => [...prev, { id, emoji, fullName }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#2b2d31] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#1e1f22] p-6 rounded-2xl shadow-lg space-y-6">
        <GeneralList handleSelect={handleSelect} />
        <SelectedList current={current} newAthletes={newAthletes} />
      </div>
    </div>
  );
};

export default Task1;

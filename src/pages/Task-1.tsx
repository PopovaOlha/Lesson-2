import GeneralList from '../components/task-1/GeneralList';

const Task1 = () => {
  return (
    <div className="min-h-screen bg-[#2b2d31] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#1e1f22] p-6 rounded-2xl shadow-lg space-y-6">
        <GeneralList />
      </div>
    </div>
  );
};

export default Task1;

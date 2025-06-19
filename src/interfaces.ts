export interface GeneralCardProps {
  id: number;
  emoji: string;
  fullName: string;
}

export interface Props extends GeneralCardProps {
  handleSelect: (athlete: GeneralCardProps) => void;
}

export interface SelectedListProps {
  current: GeneralCardProps | null;
  newAthletes: { id: number; emoji: string; fullName: string }[];
}

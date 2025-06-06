import type { TumblerGridItemData } from './types';
import { TumblerGridAnimated } from './TumblerGridAnimated';
import { TumblerGridStatic } from './TumblerGridStatic';

interface TumblerGridProps {
  items: TumblerGridItemData[];
  animated?: boolean;
}

export const TumblerGrid = ({ items, animated }: TumblerGridProps) => {
  return animated ? <TumblerGridAnimated items={items} /> : <TumblerGridStatic items={items} />
}

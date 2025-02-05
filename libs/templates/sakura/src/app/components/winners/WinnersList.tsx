import { WinnerCard } from './WinnerCard';
import { TabContainer, Tab } from '@3win/ui-kit/ui';

export function WinnersList() {
  const winners: any = {
    daily: [
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
    ],
    weekly: [
      { id: 2478956, amount: '6,125,400,20' },
      { id: 2478956, amount: '6,125,400,20' },
      { id: 2478956, amount: '6,125,400,20' },
      { id: 2478956, amount: '6,125,400,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
    ],
    monthly: [
      { id: 3478956, amount: '10,125,700,20' },
      { id: 3478956, amount: '10,125,700,20' },
      { id: 3478956, amount: '10,125,700,20' },
      { id: 3478956, amount: '10,125,700,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
      { id: 1478956, amount: '8,125,600,20' },
    ],
  };

  const tabs = Object.keys(winners).map((period) => {
    const label = period.toUpperCase() + ' WINNERS';
    const content = (
      <div className="flex gap-4 md:gap-6 items-stretch justify-between overflow-x-auto scrollbar-hide w-full ">
        {winners[period].map((winner: any, index: number) => (
          <WinnerCard key={index} id={winner.id} amount={winner.amount} />
        ))}
      </div>
    );

    return (
      <Tab classList="rounded-2xl text-base xl:text-xl 2xl:text-2xl font-bold" key={period} label={label}>
        {content}
      </Tab>
    );
  });

  return (
    <TabContainer classList="rounded-2xl" title={false}>
      {tabs}
    </TabContainer>
  );
}

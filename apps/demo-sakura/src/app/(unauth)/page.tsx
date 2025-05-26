import { BannerCarousel } from '@triple-win/ui';
import {
  GameSection,
  JackpotList,
  ProvidersList,
  MainTitle,
  TumblerGridAnimated,
  WinnersList, SectionTitle,
} from '@triple-win/template-sakura';
import { faker } from '@faker-js/faker';

const random6Digits = () => Math.floor(100000 + Math.random() * 900000);
const currency = 'USD';

const slides = [
  {
    desktop: {
      image: {
        src: '/images/banner.png?v1',
        width: 1792,
        height: 600,
        alt: faker.string.alpha({ length: 5 }),
      },
      content: {
        description: 'Better games, endless fun, more chances to win big!',
        ctaText: 'Play Now',
        ctaUrl: 'https://triplewin.com',
      },
    },
    mobile: {
      image: {
        src: '/images/banner.png?v3',
        width: 640,
        height: 800,
        alt: faker.string.alpha({ length: 5 }),
      },
      content: {
        description: 'Better games, endless fun, more chances to win big!',
        ctaText: 'Play Now',
        ctaUrl: 'https://triplewin.com',
      },
    },
  },
  {
    desktop: {
      image: {
        src: '/images/banner2.png?v4',
        width: 1792,
        height: 600,
        alt: faker.string.alpha({ length: 5 }),
      },
      content: {
        description: 'Better games, endless fun, more chances to win big!',
        ctaText: 'Play Now',
        ctaUrl: 'https://triplewin.com',
      },
    },
    mobile: {
      image: {
        src: '/images/banner2.png?v5',
        width: 640,
        height: 800,
        alt: faker.string.alpha({ length: 5 }),
      },
      content: {
        description: 'Better games, endless fun, more chances to win big!',
        ctaText: 'Play Now',
        ctaUrl: 'https://triplewin.com',
      },
    },
  },
];

const jackpotList = [
  { id: faker.string.uuid(), icon: 'Spade', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: 'Heart', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: 'Diamond', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: 'Club', amount: random6Digits(), currency },
];

const winners = {
  'daily winners': Array.from({ length: 14 }, () => ({
    winnerId: random6Digits().toString(),
    game: {
      id: faker.string.uuid(),
      image: `/images/winner-game-${faker.helpers.rangeToNumber({ min: 1, max: 4 })}.png`,
    },
    amount: random6Digits(),
    currency,
  })),
  'weekly winners': Array.from({ length: 14 }, () => ({
    winnerId: random6Digits().toString(),
    game: {
      id: faker.string.uuid(),
      image: `/images/winner-game-${faker.helpers.rangeToNumber({ min: 1, max: 4 })}.png`,
    },
    amount: random6Digits(),
    currency,
  })),
  'monthly winners': Array.from({ length: 14 }, () => ({
    winnerId: random6Digits().toString(),
    game: {
      id: faker.string.uuid(),
      image: `/images/winner-game-${faker.helpers.rangeToNumber({ min: 1, max: 4 })}.png`,
    },
    amount: random6Digits(),
    currency,
  })),
};

const trendingItems = [
  {
    id: '1',
    src: '/images/Banner-1.png',
    gameUrl: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '5',
    src: '/images/Banner-4.png',
    gameUrl: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '2',
    src: '/images/Banner-2.png',
    gameUrl: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '3',
    src: '/images/Banner-5.png',
    gameUrl: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '4',
    src: '/images/Banner-3.png',
    gameUrl: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
];

const providerItems = [
  {
    id: '1',
    name: 'NetEnt',
    icon: '/images/provider-1.png',
    count: 20, // Example count
  },
  {
    id: '2',
    name: 'Habanero',
    icon: '/images/provider-2.png',
    count: 20, // Example count
  },
  {
    id: '3',
    name: 'Relax',
    icon: '/images/provider-3.png',
    count: 100,
  },
  {
    id: '4',
    name: 'Booming Games',
    icon: '/images/provider-4.png',
    count: 5,
  },
  {
    id: '5',
    name: 'EvoPlay',
    icon: '/images/provider-5.png',
    count: 30,
  },
  {
    id: '6',
    name: 'RubyPlay',
    icon: '/images/provider-6.png',
    count: 50,
  },
  {
    id: '7',
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: 40,
  },
  {
    id: '8',
    name: 'Playson',
    icon: '/images/provider-8.png',
    count: 300,
  },
  {
    id: '9',
    name: 'Playson',
    icon: '/images/provider-8.png',
    count: 40,
  },
  {
    id: '10',
    name: 'Relax',
    icon: '/images/provider-3.png',
    count: 40,
  },
  {
    id: '11',
    name: 'NetEnt',
    icon: '/images/provider-1.png',
    count: 40,
  },
  {
    id: '12',
    name: 'Habanero',
    icon: '/images/provider-2.png',
    count: 40,
  },
  {
    id: '13',
    name: 'Booming Games',
    icon: '/images/provider-4.png',
    count: 40,
  },
  {
    id: '14',
    name: 'EvoPlay',
    icon: '/images/provider-5.png',
    count: 40,
  },
  {
    id: '15',
    name: 'RubyPlay',
    icon: '/images/provider-6.png',
    count: 40,
  },
  {
    id: '16',
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: 40,
  },
];

const gamesInfo = [
  {
    title: 'Last Played',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `./images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
  {
    title: 'Favorites',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `./images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
  {
    title: 'EvoPlay',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `./images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
];

export default async function Index() {
  return (
    <div className="flex flex-col gap-24">
      <BannerCarousel
        frames={slides}
        heights={{ desktop: 320, mobile: 320 }}
        noBlur={true}
        classNames={{
          imageClassnames: 'rounded-3xl',
          containerClassnames: 'rounded-3xl',
        }}
      />
      <section>
        <MainTitle>Jackpot</MainTitle>
        <JackpotList items={jackpotList} />
        <div className={'mt-6'}>
          <WinnersList items={winners} />
        </div>
      </section>
      <section>
        <SectionTitle>Trending Now</SectionTitle>
        {/*<TumblerGrid items={trendingItems} />*/}
        <TumblerGridAnimated items={trendingItems} />
      </section>
      <section>
        <SectionTitle>Providers</SectionTitle>
        <ProvidersList items={providerItems} />
      </section>
      <section>
        <SectionTitle>Categories</SectionTitle>
        <GameSection
          filters={{
            enable: true,
          }}
          data={gamesInfo}
        />
      </section>
    </div>
  );
}

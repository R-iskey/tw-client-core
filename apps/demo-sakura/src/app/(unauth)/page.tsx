import {
  GameSection,
  JackpotSection,
  ProvidersSection,
  MainTitle,
  WinnersSection,
  SectionTitle,
  BannerSection,
} from '@triple-win/template-sakura';
import { faker } from '@faker-js/faker';
import { TumblerGrid } from '@triple-win/ui';

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
  { id: faker.string.uuid(), icon: '/images/cart-spades.png', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: '/images/cart-heart.png', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: '/images/cart-diamonds.png', amount: random6Digits(), currency },
  { id: faker.string.uuid(), icon: '/images/cart-clubs.png', amount: random6Digits(), currency },
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
    url: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '5',
    src: '/images/Banner-4.png',
    url: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '2',
    src: '/images/Banner-2.png',
    url: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '3',
    src: '/images/Banner-5.png',
    url: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
  {
    id: '4',
    src: '/images/Banner-3.png',
    url: 'https://triplewin.com',
    alt: faker.string.alpha({ length: 5 }),
  },
];

const providerItems = [
  {
    id: faker.string.uuid(),
    name: 'NetEnt',
    icon: '/images/provider-1.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Habanero',
    icon: '/images/provider-2.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Relax',
    icon: '/images/provider-3.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Booming Games',
    icon: '/images/provider-4.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'EvoPlay',
    icon: '/images/provider-5.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'RubyPlay',
    icon: '/images/provider-6.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Playson',
    icon: '/images/provider-8.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Playson',
    icon: '/images/provider-8.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Relax',
    icon: '/images/provider-3.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'NetEnt',
    icon: '/images/provider-1.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Habanero',
    icon: '/images/provider-2.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'Booming Games',
    icon: '/images/provider-4.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'EvoPlay',
    icon: '/images/provider-5.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'RubyPlay',
    icon: '/images/provider-6.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
  {
    id: faker.string.uuid(),
    name: 'SlotMill',
    icon: '/images/provider-7.png',
    count: faker.number.int({ max: 40 }),
  },
];

const gamesInfo = [
  {
    title: 'Last Played',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `/images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
  {
    title: 'Favorites',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `/images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
  {
    title: 'EvoPlay',
    items: Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      provider: 'EvoPlay',
      imageUrl: `/images/Banner-${faker.helpers.rangeToNumber({ min: 1, max: 5 })}.png`,
    })),
  },
];

export default async function Index() {
  return (
    <div className="flex flex-col gap-13">
      <BannerSection slides={slides} />
      <section>
        <MainTitle>Jackpot</MainTitle>
        <JackpotSection items={jackpotList} />
        <div className={'mt-6'}>
          <WinnersSection items={winners} />
        </div>
      </section>
      <section>
        <SectionTitle>Trending Now</SectionTitle>
        <TumblerGrid items={trendingItems} animated={false} />
      </section>
      <section>
        <SectionTitle>Providers</SectionTitle>
        <ProvidersSection items={providerItems} />
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

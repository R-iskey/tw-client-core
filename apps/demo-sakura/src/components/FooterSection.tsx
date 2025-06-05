'use client';

import { Icon } from '@triple-win/ui';
import { Footer } from '@triple-win/template-sakura';

const { FMain, FGrid, FGridLast, FLinksSection } = Footer;

export function FooterSection() {
  return (
    <FMain className={'pt-30 pb-15'}>
      <FGrid>
        <FLinksSection
          title={'About Us'}
          linksGroup={[
            [
              { href: '/', label: 'Terms of service' },
              { href: '/', label: 'Responsible play' },
              { href: '/', label: 'Privacy policy' },
              { href: '/', label: 'Blog' },
            ],
          ]}
        />

        <Footer.FLinksSection
          title={'Games'}
          linksGroup={[
            [
              { href: '/', label: 'Best games for you' },
              { href: '/', label: 'Popular' },
              { href: '/', label: 'Newest' },
              { href: '/', label: 'Hold and win' },
            ],
            [
              { href: '/', label: 'Classic' },
              { href: '/', label: 'Megaways' },
              { href: '/', label: 'Cascading' },
              { href: '/', label: 'Slots' },
            ],
            [
              { href: '/', label: 'Features' },
              { href: '/', label: 'Exclusive' },
              { href: '/', label: 'Unlimited play' },
            ],
          ]}
        />

        <FGridLast className="text-sm lg:text-lg">
          <div>
            <span className="font-semibold">Online support 24/7: </span>
            <a href="#" className="underline">
              Contact Us
            </a>
          </div>
          <div>
            <span className="font-semibold">US Payment Related Queries (24/7): </span>
            <span>+1 (650) 663-2778 / +1 (424) 842-4264</span>
          </div>
          <div>
            <span className="font-semibold">EU/UK Payment Related Queries (24/7): </span>
            <span>+372 651 0239</span>
          </div>
          <div className="text-sm text-muted-foreground mt-5 lg:mt-2">
            Please use the applicable number for your country of residence.
            <br />
            Calls to the incorrect number for your country of residence may incur additional charges.
          </div>
        </FGridLast>
      </FGrid>

      <div className="flex flex-col lg:flex-row justify-between gap-4 text-sm mt-10">
        <div>
          No purchase necessary to play.
          <br />
          Partners:{' '}
          <a href="mailto:partners@brand.com" className="underline">
            partners@brand.com
          </a>
          <br />
          Brand is owned and operated by B2Services OÜ, incorporated in Estonia, European Union with registration number
          16579410 and registered office at Tornimäe 5, 10145, Tallinn 10145.
        </div>
        <div className="flex items-center gap-3">
          <span className={'text-muted-foreground'}>Follow us</span>
          <a href="#" aria-label="Facebook">
            <Icon name={'Facebook'} />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon name={'Instagram'} />
          </a>
        </div>
      </div>

      <div className="pt-7 text-xs">
        <span>@ 2024 &nbsp; All rights reserved.</span>
      </div>
    </FMain>
  );
}

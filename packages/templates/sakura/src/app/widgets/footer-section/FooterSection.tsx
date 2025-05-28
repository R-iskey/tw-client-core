'use client';

import { Icon } from '@triple-win/ui';

export function FooterSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className={'flex space-x-24'}>
          <div>
            <h3 className="font-semibold text-xl">About us</h3>
            <hr className={'my-2 bg-muted-foreground'} />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  Responsible play
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="font-semibold text-xl">Games</h3>
            <hr className={'my-2 bg-muted-foreground'} />
            <div className="flex mt-2 space-x-10">
              <div>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Best games for you
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Newest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Hold and win
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Classic
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Megaways
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Cascading
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Slots
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Exclusive
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-muted-foreground">
                      Unlimited play
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end text-right text-lg">
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
          <div className="text-sm text-muted-foreground mt-2">
            Please use the applicable number for your country of residence.
            <br />
            Calls to the incorrect number for your country of residence may incur additional charges.
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm mt-10">
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
          <a href="#" aria-label="Instagram" >
            <Icon name={'Instagram'} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-7 text-xs flex flex-wrap justify-between">
        <span>@ 2024 &nbsp; All rights reserved.</span>
      </div>
    </div>
  );
}

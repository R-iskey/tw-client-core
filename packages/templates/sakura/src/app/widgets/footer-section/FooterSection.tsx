'use client';

import { Icon } from '@triple-win/ui';

export function FooterSection() {
  return (
    <div className="w-full text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-1">About us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Responsible play</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold mb-1">Games</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
            <div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Best games for you</a></li>
                <li><a href="#" className="hover:underline">Popular</a></li>
                <li><a href="#" className="hover:underline">Newest</a></li>
                <li><a href="#" className="hover:underline">Hold and win</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Classic</a></li>
                <li><a href="#" className="hover:underline">Megaways</a></li>
                <li><a href="#" className="hover:underline">Cascading</a></li>
                <li><a href="#" className="hover:underline">Slots</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Exclusive</a></li>
                <li><a href="#" className="hover:underline">Unlimited play</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end text-right space-y-2">
          <div>
            <span className="font-semibold">Online support 24/7: </span>
            <a href="#" className="underline">Contact Us</a>
          </div>
          <div>
            <span className="font-semibold">US Payment Related Queries (24/7): </span>
            <span>+1 (650) 663-2778 / +1 (424) 842-4264</span>
          </div>
          <div>
            <span className="font-semibold">EU/UK Payment Related Queries (24/7): </span>
            <span>+372 651 0239</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            Please use the applicable number for your country of residence.<br />
            Calls to the incorrect number for your country of residence may incur additional charges.
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div>
          No purchase necessary to play.<br />
          Partners: <a href="mailto:partners@brand.com" className="underline">partners@brand.com</a><br />
          Brand is owned and operated by B2Services OÜ, incorporated in Estonia, European Union with registration number 16579410 and registered office at Tornimäe 5, 10145, Tallinn 10145.
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-3">
          <span>Follow us</span>
          <a href="#" aria-label="Facebook" className="hover:text-blue-500"><Icon name={'Facebook'} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500"><Icon name={'Instagram'} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-4 text-xs flex flex-wrap justify-between">
        <span>@ 2024 &nbsp; All rights reserved.</span>
      </div>
    </div>
  );
}

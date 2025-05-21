'use client';

import { cn, Select, SelectContent, SelectItem, SelectTrigger } from '@triple-win/ui';
import { useState } from 'react';

interface LanguageSelectorProps {
  locale: {
    default: string;
    available: Array<{
      code: string;
      label: string;
      shortLabel: string;
    }>;
  };
}

export function LanguageSelector({ locale }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(locale.default)

  const shortLabel = locale.available.find((lang) => lang.code === selectedLanguage)?.shortLabel;

  return (
    <div>
      <Select
        defaultValue={locale.default}
        onValueChange={(item) => setSelectedLanguage(item)}
      >
        <SelectTrigger
          className={
            'text-md cursor-pointer justify-center font-bold h-auto uppercase bg-black/15 dark:bg-white/15 rounded-full w-[90px] py-4'
          }
          noIcon={true}
        >
          {shortLabel}
        </SelectTrigger>
        <SelectContent className={'bg-background/90 rounded-md mt-1 rounded-xl'}>
          {locale.available.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className={cn('px-6 py-4 text-md', selectedLanguage === lang.code && 'font-bold')}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

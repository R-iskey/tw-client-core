// import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';

export function LanguageSection() {
  // const {
  //   i18n: { changeLanguage, language },
  // } = useTranslation();
  // const { languages } = useAppGlobals();
  // const currentLanguage = useMemo(() => languages?.list?.find((i) => i.code === language)?.label || '', [language]);
  const [isVisible, setIsVisible] = useState(false);
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-black/15 dark:bg-white/15 rounded-3xl relative mt-4 lg:mt-0">
      <span
        onClick={toggleDiv}
        className="cursor-pointer px-4 h-[50px]  text-sm 2xl:text-base lg:flex hidden items-center text-center justify-center font-black"
      >
        EN
      </span>
      {isVisible && (
        <ul className="flex flex-wrap lg:flex-col lg:bg-black lg:dark:bg-white relative gap-4 lg:gap-2 lg:absolute rounded-md p-4 lg:py-2 lg:px-4 left-1">
          {/*{languages?.list?.map(({ code, label }) => (*/}
          {/*  <li key={code}>*/}
          {/*    <button*/}
          {/*      className={`${*/}
          {/*        label === currentLanguage ? 'font-bold' : 'font-light'*/}
          {/*      } bg-transparent text-[14px] lg:text-white/70 lg:dark:text-black/70 w-full block hover:underline lg:font-medium`}*/}
          {/*      onClick={() => changeLanguage(code)}*/}
          {/*    >*/}
          {/*      {label}*/}
          {/*    </button>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      )}
    </div>
  );
}

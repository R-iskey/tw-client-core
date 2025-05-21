'use client';

import Error from 'next/error';
// import { useEffect } from 'react';

export default function GlobalError(props: { params: { locale: string } }) {
  // useEffect(() => {
  //   Sentry.captureException(props.error);
  // }, [props.error]);

  return (
    <html lang={props.params.locale}>
    <body>
    {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
    <Error statusCode={undefined as never} />
    </body>
    </html>
  );
}

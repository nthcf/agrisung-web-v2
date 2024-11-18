import { type Locale } from "@/site.config";

export type PropsWithLocale<TProps = unknown, TParams = unknown> = Readonly<
  {
    params: Promise<{ locale: Locale } & TParams>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  } & React.PropsWithChildren<TProps>
>;

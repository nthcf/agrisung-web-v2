import { type Locale } from "@/site.config";

export type PropsWithLocale<TProps = unknown, TParams = unknown> = Readonly<
  {
    params: Promise<{ locale: Locale } & TParams>;
  } & React.PropsWithChildren<TProps>
>;

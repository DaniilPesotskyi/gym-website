import css from "./Layout.module.css";

import { PrismicDocument } from "@prismicio/client";
import { createClient } from "@/prismicio";

import Header from "../Header/Header";

export default async function Layout({
  children,
  params: { lang },
  locales,
}: {
  children: React.ReactNode;
  params: { lang: string };
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div>
      <Header settings={settings} />
      {children}
      <footer></footer>
      <div className={css.background}></div>
    </div>
  );
}

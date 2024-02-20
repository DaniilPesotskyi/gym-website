import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { getLocales } from "@/lib/getLocales";

import Layout from "@/components/Layout/Layout";

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });

  const locales = await getLocales(page, client);

  return (
    <Layout params={params} locales={locales}>
      <SliceZone slices={page.data.slices} components={components} />
      <br />
      <br />
      <br />
      <h2>qweqweqwe</h2>
      <br />
      <br />
      <br />
      <h2>qweqweqwe</h2>
      <br />
      <br />
      <br />
      <h2>qweqweqwe</h2>
    </Layout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

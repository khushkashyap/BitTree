export const runtime = 'nodejs';

import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import { templateMap } from '@/lib/templateMap';

export default async function Page({ params }) {
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db('bittree');
  const collection = db.collection('links');

  const item = await collection.findOne({ handle });
  const user = JSON.parse(JSON.stringify(item));

  if (!item) {
    notFound();
  }

  const TemplateComponent = templateMap[user.template] || templateMap.minimal;
  return <TemplateComponent user={user} />;
}

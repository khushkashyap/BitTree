export const runtime = 'nodejs';

import Link from 'next/link';
import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import MinimalTemplate from '@/components/templatesDesign/MinimalTemplate';
import DarkDevTemplate from '@/components/templatesDesign/DarkDevTemplate';
import GradientGlowTemplate from '@/components/templatesDesign/GradientGlowTemplate';
import CodeInspiredTemplate from '@/components/templatesDesign/CodeInspiredTemplate';
import PortfolioProTemplate from '@/components/templatesDesign/PortfolioProTemplate';
import CyberPunkTemplate from '@/components/templatesDesign/CyberPunkTemplate';

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

  switch (user.template) {
    case 'dark':
      return <DarkDevTemplate user={user} />;

    case 'gradient':
      return <GradientGlowTemplate user={user} />;

    case 'code':
      return <CodeInspiredTemplate user={user} />;

    case 'portfolio':
      return <PortfolioProTemplate user={user} />;

    case 'cyber':
      return <CyberPunkTemplate user={user} />;

    case 'minimal':
    default:
      return <MinimalTemplate user={user} />;
  }
}

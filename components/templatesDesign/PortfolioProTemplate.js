import BaseTemplate from "./BaseTemplate";

export default function PortfolioProTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-slate-100 text-slate-900"
    />
  );
}
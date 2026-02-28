import BaseTemplate from "./BaseTemplate";

export default function CodeInspiredTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-black text-green-400 font-mono"
    />
  );
}
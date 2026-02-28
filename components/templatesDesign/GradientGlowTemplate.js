import BaseTemplate from "./BaseTemplate";

export default function GradientGlowTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white"
    />
  );
}
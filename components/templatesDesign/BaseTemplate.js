'use client';

export default function BaseTemplate({ user, className = "" }) {
  if (!user) return null;

  const { handle, pic, desc, links } = user;

  return (
    <div className={`min-h-screen flex flex-col items-center px-6 py-16 ${className}`}>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        {pic && (
          <img
            src={pic}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover mb-4 border"
          />
        )}

        <h1 className="text-2xl font-bold">@{handle}</h1>

        {desc && (
          <p className="mt-2 text-sm opacity-70 max-w-md">
            {desc}
          </p>
        )}
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md mt-10 space-y-4">
        {links?.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 rounded-xl font-medium transition-all hover:scale-105 border"
          >
            {item.linktext}
          </a>
        ))}
      </div>

    </div>
  );
}
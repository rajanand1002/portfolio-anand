import { codingProfiles } from "../data";

const profileMeta = {
  leetcode: { label: "LeetCode", icon: "bx bx-code-curly" },
  gfg: { label: "GeeksforGeeks", icon: "bx bx-code-block" },
  hackerrank: { label: "HackerRank", icon: "bx bxl-hackerrank" },
};

export default function CodingProfiles() {
  const activeProfiles = Object.entries(codingProfiles).filter(([, url]) => url);

  if (activeProfiles.length === 0) return null;

  return (
    <section id="coding-profiles">
      <span className="section-index">PROFILES</span>
      <h2>Coding Profiles</h2>
      <div className="coding-profiles-grid">
        {activeProfiles.map(([key, url]) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-card"
            key={key}
          >
            <i className={profileMeta[key]?.icon || "bx bx-code-alt"}></i>
            <span>{profileMeta[key]?.label || key}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

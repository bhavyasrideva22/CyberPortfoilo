export default function TagList({ tags }) {
  return (
    <div className="skill-tags project-tags">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

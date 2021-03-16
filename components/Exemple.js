function Article({ title, subTitle }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </li>
  );
}

const tab = [
  { title: "Learn Angular", subTitle: "It's cool" },
  { title: "No, React", subTitle: "It's better" },
  { title: "Or Vue", subTitle: "It's also cool" },
];

export default function MyPage() {
  return (
    <div>
      <h3>What a nice list</h3>
      <ul>
        {tab.map((article, index) => {
          return (
            <Article
              key={index}
              title={article.title}
              subTitle={article.subTitle}
            />
          );
        })}
      </ul>
    </div>
  );
}

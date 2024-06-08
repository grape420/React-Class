const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: 1,
    imageUrl: `https://placekitten.com/250/200?image=${i}`,
  });
}

const ScrollDOM2 = () => {
  return (
    <>
      <h2>Scroll DOM2</h2>
      <nav></nav>
      <div>
        <ul>
          {cats.map((cat) => (
            <li>
              <img src={cat.imageUrl} alt={`cat ${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScrollDOM2;

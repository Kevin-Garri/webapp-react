function Stars(props) {
  const vote = props.vote;

  let Rating = [];

  for (let i = 0; i < 5; i++) {
    Rating.push(<i key={i} className={`bi bi-star${i < vote && "-fill"}`}></i>);
  }
  return (
    <>
      <div>{Rating}</div>
    </>
  );
}

export default Stars;
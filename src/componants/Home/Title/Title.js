import "./title.css";
function TitelCategory(probs) {
  return (
    <>
      <div className="container">
        <h1>{probs.name}</h1>
        <p>{probs.content}</p>
      </div>
    </>
  );
}
export default TitelCategory;

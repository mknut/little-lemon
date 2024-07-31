import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const onBookClick = () => {
    navigate("/booking");
  }
  return (
    <>
      <section className="call-to-action">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <button onClick={onBookClick}>Reserve a table</button>
        </div>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="call to action image"
        />
      </section>
    </>
  );
}

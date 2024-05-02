export default function Feedback({ reviews }) {
  return (
    <>
      <ul>
        <li>Good: {reviews.good}</li>
        <li> Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
      </ul>
    </>
  );
}

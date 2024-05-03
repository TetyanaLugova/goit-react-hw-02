import css from './Feedback.module.css';
export default function Feedback({ reviews, totalFeedback, positiveFeedback }) {
  return (
    <>
      <ul className={css.list}>
        <li>Good: {reviews.good}</li>
        <li> Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
}

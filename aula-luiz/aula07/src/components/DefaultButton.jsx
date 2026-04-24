import './DefaultButton.css';

export default function DefaultButton({ label }) {
  return (
    <button type="submit" className="default-button">
      {label}
    </button>
  );
}
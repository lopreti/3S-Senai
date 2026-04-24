import './DefaultInput.css';

export default function DefaultInput({ icon: Icon, placeholder, type = 'text' }) {
  return (
    <div className="input-wrapper">
      {Icon && <Icon size="1.25rem" className="input-icon" />}
      <input className="default-input" type={type} placeholder={placeholder} />
    </div>
  );
}
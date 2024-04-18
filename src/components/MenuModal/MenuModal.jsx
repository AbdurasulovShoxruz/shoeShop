
import "./MenuModal.scss";

function MenuModal({menuHandler}) {
  return (
    <div className="menuModal">
        <h1>Sign Up & Sign In</h1>
        <button onClick={menuHandler} className="menuModal__close">x</button>
      <div className="menuModal__signUp">
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default MenuModal;

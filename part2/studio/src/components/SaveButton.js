import "./styling.css";
import "./recipe.json";
// TO DO's
function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;

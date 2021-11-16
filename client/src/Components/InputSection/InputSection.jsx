import "./InputSection.scss";

const InputSection = () => {
  return (
    <div className="inputSection">
      <input type="text" name="to-do-item-input" />
      <button>Add Item</button>
    </div>
  );
};

export default InputSection;

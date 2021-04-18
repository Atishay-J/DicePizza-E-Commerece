export default function FilterToggleBtn({ handleToggle }) {
  return (
    <>
      <div className="toggleBtnContainer">
        <label className="toggleSwitch">
          <input
            className="toggleBtnInput"
            type="checkbox"
            name="toggleVeg"
            onChange={(event) => handleToggle(event)}
          />{" "}
          <div className="thumbBtn"></div>
        </label>
      </div>
    </>
  );
}

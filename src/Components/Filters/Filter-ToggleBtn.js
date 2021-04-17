export default function FilterToggleBtn({ handleToggle }) {
  return (
    <>
      <div class="toggleBtnContainer">
        <label class="toggleSwitch">
          <input
            class="toggleBtnInput"
            type="checkbox"
            name="toggleVeg"
            onChange={(event) => handleToggle(event)}
          />{" "}
          <div class="thumbBtn"></div>
        </label>
      </div>
    </>
  );
}

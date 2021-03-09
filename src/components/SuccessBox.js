import Button from './button'

const SuccessBox = () => {
  let modal = document.getElementsByClassName("modal");
  function handleClick(e) {
    e.preventDefault();

    if (e.target.id === "go-to-profile") {
      console.log(e);
    } else {
      console.log(e);
      modal[0].style.display = "none";
    }
  }

  window.onclick = function (event) {
    if (event.target === modal[0]) {
      modal[0].style.display = "none";
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>
          Welcome to Trime, <br />
          Happy to have you onboard!
        </h3>
        <p>
          To book a session we need a little more information from you, but you
          don't need to fill out this right now if you don't want to. Just close
          this window and Let's go explore the app!
        </p>
        <Button
          onClick={handleClick}
          styleClass="not-important-button"
          id="go-to-profile"
          text="Edit profile"
        />
        <Button
          onClick={handleClick}
          styleClass="yellow-button"
          id="close-window"
          text="Let's explore"
        />
      </div>
    </div>
  );
};

export default SuccessBox;

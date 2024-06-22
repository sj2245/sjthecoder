import ReactDOM from 'react-dom/client';

export const dismissAlert = (overlay: any = document.querySelector(`.overlay`), alertDialog: any = document.querySelector(`.alert`)) => {
  overlay.style.opacity = 0;
  alertDialog.style.opacity = 0;
  alertDialog.style.transform = `translateY(-50px)`;

  // Remove the alert and overlay from the DOM after the animation is complete
  setTimeout(() => {
    document.body.removeChild(overlay);
    localStorage.setItem(`alertOpen`, `false`);
  }, 240);
}

export const showAlert = async (title, component, width, height) => {
  let isAlertOpen = JSON.parse(localStorage.getItem(`alertOpen`)) == true;
  if (isAlertOpen) return;
  let overlay: any = document.createElement(`div`);
  overlay.className = `overlay`;
  document.body.appendChild(overlay);

  let alertDialog: any = document.createElement(`div`);
  alertDialog.className = `alert`;

  // Add transition styles for smooth fade-in/out
  overlay.style.opacity = 0;
  // overlay.style.transform = `translateY(-50px)`;
  overlay.style.transition = `opacity 240ms ease-out, transform 240ms ease-out`;
  alertDialog.style.opacity = 0;
  if (width) alertDialog.style.width = `${width}`;
  if (height) alertDialog.style.height = `${height}`;
  alertDialog.style.transform = `translateY(-50px)`;
  alertDialog.style.transition = `opacity 240ms ease-out, transform 240ms ease-out`;

  // ReactDOM.createRoot(alertDialog).render(<div>
  //   <h2 className={`alertTitle`}> { title } < /h2>
  //   <div className={`inner`}>
  //     {component}
  //   </div>
  //   <button onClick={(e) => {
  //     dismissAlert(overlay, alertDialog);
  //   }} className = {`alertButton iconButton`}>
  //     <span>X < /span>
  //   </button>
  // </div>);

overlay.appendChild(alertDialog);
localStorage.setItem(`alertOpen`, `true`);

// Trigger reflow to ensure the styles are applied before animating
void alertDialog.offsetWidth;

// Fade in the alert
overlay.style.opacity = 1;
// overlay.style.transform = `translateY(0)`;
alertDialog.style.opacity = 1;
alertDialog.style.transform = `translateY(0)`;

// Add a click event listener to the overlay that dismisses the alert if clicked outside the alert content
overlay.addEventListener(`click`, (e) => {
  if (!alertDialog.contains(e.target) && !e.target.classList.contains(`alertActionButton`)) {
    // Click occurred outside the alert content
    // Fade out the alert and overlay
    dismissAlert(overlay, alertDialog);
  }
});
}
export default function Form({ id, className }) {

  const onFormSubmit = (onSubmitEvent) => {
    onSubmitEvent.preventDefault();

    let form = onSubmitEvent.target;
    let { email: emailField, subject: subjectField, message: messageField } = form;

    console.log(`Contact Form Submit`, {
      email: emailField.value,
      subject: subjectField.value,
      message: messageField.value,
    });
  }

  return <>
    <form id={id} method={`submit`} className={className} onSubmit={(onSubmitEvent) => onFormSubmit(onSubmitEvent)}>
      <div className={`formField gradientBorder taller`}>
        <input name={`email`} type={`email`} className={`email`} placeholder={`Email`} required />
      </div>
      <div className={`formField gradientBorder taller`}>
        <input name={`subject`} type={`text`} className={`subject`} placeholder={`Subject`} />
      </div>
      <div className={`formField gradientBorder taller`}>
        <textarea
          required
          name={`message`}
          className={`message`}
          placeholder={`Message`}
          style={{ minHeight: 91 }}
        />
      </div>
      <div className={`formField gradientBorder taller`}>
        <button type={`submit`} className={`submitButton`}>
          Send
        </button>
      </div>
    </form>
  </>
}
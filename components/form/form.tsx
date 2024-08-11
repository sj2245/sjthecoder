import { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailJS_publicKey, emailJS_serviceID, emailJS_templateID } from '../../server';

export default function Form({ id, className }) {
  let [formStatus, setFormStatus] = useState(``);

  const onFormSubmit = (onSubmitEvent) => {
    onSubmitEvent.preventDefault();
    setFormStatus(`Loading`);
    let form = onSubmitEvent.target;
    let { email: emailField, subject: subjectField, message: messageField } = form;

    emailjs.sendForm(emailJS_serviceID, emailJS_templateID, form, emailJS_publicKey).then((response) => {
      setFormStatus(`✔ Successfully Sent Email from ${emailField.value}`);
        form.reset();
      }, (error) => {
      setFormStatus(`❌ Error Sending Email`);
      },
    );
  }

  return <>
    <form id={id} method={`submit`} className={className} onSubmit={(onSubmitEvent) => onFormSubmit(onSubmitEvent)}>
      {formStatus != `` ? <>
        <div className={`statusField ${formStatus.includes(`Loading`) ? `loading` : formStatus.includes(`Success`) ? `success` : `error`} formField gradientBorder taller`}>
          <div className={`formStatus stacked`}>
            {formStatus.includes(`Success`) ? <img alt={`Form Status Image`} src={`/assets/images/greatSuccess.PNG`} /> : <></>}
            <div className={`statusText`}>{formStatus}</div>
          </div>
        </div>
      </> : <></>}
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
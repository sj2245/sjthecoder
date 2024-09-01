import { useState } from 'react';
import emailjs from 'emailjs-com';
import { States } from '../../enums';
import { emailJS_publicKey, emailJS_serviceID, emailJS_templateID } from '../../server';

const errorsMessages = {
  email: {
    invalid: {
      missingSymbol: `Email Should Include '@' Symbol`,
    },
  },
}

export default function Form({ id, className }) {
  let [formData, setFormData] = useState<any>({errors: []});
  let [formStatus, setFormStatus] = useState<any>(States.Empty);

  const onFormChange = (onChangeEvent) => {
    let { target } = onChangeEvent;
    let { value, name } = target;

    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));

    if (formData.email) {
      if (formData.email.includes(`@`)) {
        setFormData(prevFormData => {
          let newErrors = prevFormData.errors;
          let missingSymbolMsg = errorsMessages.email.invalid.missingSymbol;
          let hasError = newErrors.includes(missingSymbolMsg);
          if (hasError) {
            newErrors = newErrors.filter(err => err != missingSymbolMsg);
          }
          return { ...prevFormData, errors: newErrors };
        });
      } else {
        setFormData(prevFormData => {
          let newErrors = prevFormData.errors;
          let missingSymbolMsg = errorsMessages.email.invalid.missingSymbol;
          let hasError = newErrors.includes(missingSymbolMsg);
          if (!hasError) {
            let newError = missingSymbolMsg;
            newErrors.push(newError);
          }
          return { ...prevFormData, errors: newErrors };
        });
      }
    }

    console.log(`onFormChange`, formData);
  }

  const onFormSubmit = (onSubmitEvent) => {
    onSubmitEvent.preventDefault();
    setFormStatus(States.Loading);
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
    <form id={id} method={`submit`} className={className} onChange={(onChangeEvent) => onFormChange(onChangeEvent)} onSubmit={(onSubmitEvent) => onFormSubmit(onSubmitEvent)}>
      {formStatus != `` ? <>
        <div className={`statusField ${formStatus.includes(States.Loading) ? States.Loading : formStatus.includes(States.Success) ? States.Success : `error`} formField gradientBorder taller`}>
          <div className={`formStatus stacked`}>
            {formStatus.includes(States.Success) ? <img alt={`Form Status Image`} src={`/assets/images/greatSuccess.PNG`} /> : <></>}
            {formStatus.includes(`Error`) ? <img alt={`Form Status Image`} src={`/assets/images/failure.jpg`} /> : <></>}
            <div className={`statusText`}>{formStatus}</div>
          </div>
        </div>
      </> : <></>}
      <div className={`formErrors`}>
        {formData.errors.length > 0 ? <>
          <div className={`errors`}>
            {formData.errors.map((err, idx) => (
              <div key={idx}>{err}</div>
            ))}
          </div>
        </> : <></>}
      </div>
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
        <button type={`submit`} className={`submitButton`} disabled={formStatus.includes(States.Error) || formStatus.includes(States.Failure) || formData.errors.length > 0}>
          Send
        </button>
      </div>
    </form>
  </>
}
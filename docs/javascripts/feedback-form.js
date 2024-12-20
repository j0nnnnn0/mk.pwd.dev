$(function() {
  
  // Initialize the Zammad feedback form with custom settings
    $('#zammad-feedback-form').ZammadForm({
      noCSS: false,
      modal: false, // Enable modal mode
      messageTitle: 'Contact Form', // Title of the form
      showTitle: false, // Show the title of the form
      messageSubmit: 'Submit', // Text on the submit button
      messageThankYou: 'Thank you for your inquiry (#%s)! We\'ll contact you as soon as possible.', // Thank you message after form submission
      debug: false, // Enable debug mode
      attachmentSupport: true, // Enable attachment support
      attributes: [
        {
          display: 'Name:',
          name: 'name',
          tag: 'input',
          type: 'text',
          id: 'zammad-form-name',
          required: true,
          placeholder: 'Your Name...',
          defaultValue: '',
        },
        {
          display: 'Email:',
          name: 'email',
          tag: 'input',
          type: 'email',
          id: 'zammad-form-email',
          required: true,
          placeholder: 'Your Email, must include @',
          defaultValue: '',
        },
        {
          display: 'Message:',
          name: 'body',
          tag: 'textarea',
          id: 'zammad-form-body',
          required: true,
          placeholder: 'Your Message....',
          defaultValue: '',
          rows: 5,
        },
      ]
    });
  });
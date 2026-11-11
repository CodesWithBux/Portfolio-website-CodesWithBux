# Front-End Developer Portfolio

A responsive, four-page portfolio built with HTML5, CSS3 and Bootstrap 5, featuring six web applications and direct **Live View** links on every project card.

## Run the portfolio

Open `index.html` in a browser. For hosting, publish this folder on GitHub Pages from the `main` branch and repository root.

## Projects

| Project | Stack | Live View | GitHub |
|---|---|---|---|
| Pine City Zoo | HTML5 · CSS3 | [Live View](https://codeswithbux.github.io/Zoo-App/) | [Repository](https://github.com/codeswithbux/Zoo-App) |
| Scientific Calculator | HTML5 · CSS3 · JavaScript | [Live View](https://codeswithbux.github.io/Calculator-App/) | [Repository](https://github.com/codeswithbux/Calculator-App) |
| Task Management System | JavaScript ES6+ · Jest · HTML · CSS | [Live View](https://codeswithbux.github.io/Task-Management-System/) | [Repository](https://github.com/codeswithbux/Task-Management-System) |
| Enlighten Library | HTML5 · CSS3 · JavaScript | [Live View](https://codeswithbux.github.io/Enlighten-Library/) | [Repository](https://github.com/codeswithbux/Enlighten-Library) |
| Luminous Recipe App | React · JavaScript · Vite | [Live View](https://codeswithbux.github.io/React_Recipe_App/) | [Repository](https://github.com/CodesWithBux/React_Recipe_App) |
| Little Lemon Restaurant | HTML5 · CSS3 · JavaScript | [Live View](https://codeswithbux.github.io/little-lemon-website/) | [Repository](https://github.com/codeswithbux/little-lemon-website) |

Only these six projects appear on the Projects page. Every card has a **Live View** and a **GitHub** link that opens in a separate tab. Live URLs are sourced from the supplied project READMEs; availability may depend on each project's deployment.

## Portfolio pages

- `index.html` — Home and introduction.
- `about.html` — Background, skills and certificates, including the completed Meta Front-End Developer Professional Certificate (June 2026).
- `projects.html` — Six project cards with previews, summaries and links.
- `contact.html` — Contact interface.

## Files

- `css/styles.css` — layout, responsive styles and project card actions.
- `images/` — existing portfolio assets, new illustrated thumbnails for projects without supplied screenshots, and Meta certificate preview.

**Preview note:** The Task Manager, Enlighten Library, Luminous and Little Lemon card images are *illustrated previews*, not screenshots of the live sites. Zoo and Calculator cards retain the supplied portfolio image assets. The project descriptions are based on the six uploaded READMEs.

**Note:** This is a static portfolio. The contact form uses the external FormSubmit email service rather than a custom backend.


## Contact form delivery

The contact form sends messages to the portfolio owner's email address. After deploying, **submit one test message**, check the inbox/spam folder for FormSubmit's activation email, and **confirm the email address**. Only then can the provider deliver messages to the inbox. The form must be tested on the published website; this project has no independent email backend. The footer email address opens the visitor's email app using `mailto:`.

## Contact page checklist

- Full Name: required (2–100 characters).
- Email: required and checked by the browser for a valid email address.
- Phone: optional; accepts international formats.
- Project Type: required select menu, including general enquiries.
- Services: optional multiple-select checkboxes.
- Message: required (20–5000 characters).
- Consent: required checkbox.
- Send Message: submits the form by POST to FormSubmit, with an anti-spam honeypot and CAPTCHA.
- Footer email: clicking `phatsimobakangmaseng@gmail.com` opens the visitor's mail app.

**One-time activation:** Upload the website to your public host, send a test message, and confirm the email sent by FormSubmit to `phatsimobakangmaseng@gmail.com`. Until this is done, delivery is not activated. FormSubmit hosts the confirmation page. Test sending and receiving from a different email address after activation. Check Spam if necessary. The form must be tested from an HTTP(S) published website, not by opening `contact.html` from local files.

The form doesn't save messages in the GitHub Pages repository; FormSubmit handles delivery. Online delivery has not been end-to-end tested or activated by the creator of this ZIP.

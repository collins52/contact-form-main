# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge]()
This is a contact form, as you can see. The main goal was to create a simple yet effective form that allows users to send messages (queries) directly from the website when they have issues concerning the website service or their accounts. The form needed to include fields for first and last name, email, query type, message, and a consent checkbox to indicate if user wishes to be contacted by the team or not.
  - [Screenshot](#screenshot)
  - [Mobile design screenshot](assets/images/Screenshot%202024-06-12%20085830.png)
  - [Mobile design screenshot](assets/images/Screenshot%202024-06-12%20085031.png)
  - [Links](https://contact-form-main-theta.vercel.app/)
  - [My process](#my-process)
  - [Built with](#Html-Css-and-Javascript)

  - [What I learned](#what-i-learned)
  ### what i learnt
  Was assisted by chatgpt but learnt a lot i mean a lot.
  # Controlflow:
  Understood controlflow when i was handling the Querytype section where they were only two option and only one could be checked at a time while the other remained unchecked. The checked had it's background color changed and it's radio button checked whilst the other had the default background and an unchecked radio btn.
  # iteration with for loop
  In the query type section i had to iterate through a node list of radio-btn to carry out the if and else(control flow) on each radio button it was fun doing it. Although i used chatgpt but i better understood it.
  # Validation:
  I had to do various validations and displayed certain messages if the validations were true or not. I had to validate if any inputs were empty or both radio btn were unchecked and displayed an error message for each and if none of the inputs were empty and at least one of the radio buttons were checked a success message was displayed. Had fun doing this.
  
 - [Continued development](#continued-development)
  - [Useful resources](#Google-fonts,Chatgpt)
- [Author](#Collins-Omonievusa)
- [Acknowledgments](#acknowledgments)
## Acknowledgement
About 40% of the projects success is dedicated to chatgpt. It was very useful as it helped modified my logic and understood it better 60% goes to myself 😂.

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

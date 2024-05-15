import { textWithLink } from "./utils.js";

export const S_Introduction = `
Hey, This is Sahil Singh Rana, I am a software developer. 
My expertise lies in JavaScript, CSS, ReactJs, and Node.js.
I am passionate about creating seamless and dynamic applications
while enjoying music and playing football`;

export const contactMe = [
  ["", ""],
  [
    "Linkedin",
    ...textWithLink(
      "@sahilsinghrana",
      "https://linkedin.com/in/sahilsinghrana"
    ),
  ],
  ["Mail", "ranasahil98@gmail.com"],
  [
    "Github",
    ...textWithLink("@sahilsinghrana", "https://github.com/sahilsinghrana"),
  ],
  [
    "Github2",
    ...textWithLink(
      "@sahilsinghranaofficial",
      "https://github.com/sahilsinghranaofficial"
    ),
  ],
];

import { getYearDifference, textWithLink } from "./utils.js";

const diffDate = getYearDifference(new Date("07-19-2021")) + 1;

export const S_Introduction = `
Hey, This is Sahil Singh Rana, a software developer with around ${diffDate} years of experience. 
My expertise lies in JavaScript, CSS, ReactJs, and Node.js.
I specialize in web development and am passionate about creating seamless and dynamic web applications.`;

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

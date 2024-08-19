import React from "react";
import checkmarkDark from "../assets/checkmark-dark.svg";
import checkmarkLight from "../assets/checkmark-light.svg";
import { useTheme } from "../common/ThemeContext";

function SkillList({ skill }) {
  const { theme } = useTheme();
  const checkMark = theme === "light" ? checkmarkLight : checkmarkDark;

  return (
    <span>
      <img src={checkMark} alt="Checkmark" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

import { icons } from "../assets";

export const iconMapperHelper = (Id) => {
  return icons[`${Id}_icon`];
}

export const textShortner = (text, length) => {
  const desc = text.trim();
  return desc.substr(0, length)+"...";
}
import { CREATE_MESSAGE } from "./types";

//Add create message action
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

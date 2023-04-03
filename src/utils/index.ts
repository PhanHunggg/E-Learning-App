import moment from "moment";

export const formatDate = (date: string) => {
  return moment(new Date(date)).format("DD/MM/yyyy hh:mm:ss");
};

export const formatDateShowTime = (date: string) => {
  return moment(new Date(date)).format("DD/MM/yyyy hh:mm");
};

export const formatDateSearch = (date: string) => {
  return moment(new Date(date)).format("DD/MM/yyyy");
};

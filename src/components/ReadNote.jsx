import React from "react";
import { useNoteMutation, useNotificationByIdQuery } from "../redux/ApiSlice";

const ReadNote = ({ id }) => {
  const { data, isLoading, isSuccess } = useNotificationByIdQuery(id);

  return <div></div>;
};

export default ReadNote;

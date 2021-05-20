import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import firebase from "firebase";

import { closeModalDialog } from "../features/mail/mailSlice";
import { db } from "../firebase";

import { Button } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeModalDialog());
  };

  const dispatch = useDispatch();

  return (
    <div className="rounded-md overflow-hidden absolute right-0 bottom-0 w-1/4 h-2/4 bg-white z-50">
      <header className="flex items-center justify-between bg-gray-700 px-3 py-1 text-white">
        <span>Yeni İleti</span>
        <button onClick={() => dispatch(closeModalDialog())} type="button">
          <CloseIcon />
        </button>
      </header>
      <div className="p-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input {...register("to", { required: true })} type="email" placeholder="Kime" className="w-full focus:outline-none mb-2 border-b border-gray-200 pb-2 py-1 px-2" />
          {errors.to && <span className="text-red-500">*Bu alan boş olamaz</span>}
          <input {...register("subject", { required: true })} type="text" placeholder="Konu" className="w-full focus:outline-none mb-2 border-b border-gray-200 pb-2 py-1 px-2" />
          {errors.subject && <span className="text-red-500">*Bu alan boş olamaz</span>}
          <textarea {...register("message", { required: true })} className="w-full focus:outline-none mb-2 border-b border-gray-200 pb-2 py-1 px-2 resize-none" rows="4"></textarea>
          {errors.message && <span className="text-red-500">*Bu alan boş olamaz</span>}
          <Button type="submit" variant="contained" color="primary" className="w-24 focus:outline-none">
            Gönder
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;

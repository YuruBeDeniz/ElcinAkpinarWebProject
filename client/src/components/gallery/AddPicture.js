import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import axios from "axios";
// import { response } from "express";
// import { ShowGallery } from "./ShowGallery";
import Swal from "sweetalert2";

export function AddPicture() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "elcinTurca");
    data.append("cloud_name", "thusspokedata");
    fetch("https://api.cloudinary.com/v1_1/thusspokedata/image/upload", {
      method: "post",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
        const requestBody = {
          title,
          imgUrl: data.url,
        };
        if (data.url.length > 1) {
          axios
            .post("/api/gallery/add-picture", requestBody)
            .then((response) => {
              console.log(response);
              if (response) {
                Swal.fire({
                  icon: "success",
                  title: "The picture has been saved",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            });
        }
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
    setTitle("");
    setImage("");
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-6">
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              name="title"
              value={title}
              placeholder="Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="file"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Add a picture"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            px-6
            py-2.5
            bg-gray-900
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-gray-700 hover:shadow-lg
            focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-gray-800 active:shadow-lg
           
            transition
            duration-150
            ease-in-out"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

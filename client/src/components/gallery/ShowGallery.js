import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export function ShowGallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setGallery(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Helmet>
        <title>Elçin Akpınar | Gallery</title>
      </Helmet>
      {gallery ? (
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {gallery.map((item) => (
                <div className="flex flex-wrap w-1/3" key={item._id}>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                      src={item.imgUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

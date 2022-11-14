import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import { DeletePicture } from "./DeletePicture";

export function ShowGallery() {
  const { isLoggedIn } = useContext(AuthContext);

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
        <section className="overflow-hidden text-gray-700 mb-32">
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
                  {isLoggedIn ? <DeletePicture id={item._id} /> : ""}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        null
      )}

    {isLoggedIn ? 
    <div className="flex justify-center">
    <div className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-32 border border-gray-400 rounded shadow flex justify-center mb-36'>
      <Link to='/gallery/add-photo'>Add photo</Link>
    </div>
    </div> : null}
    </>
  );
}

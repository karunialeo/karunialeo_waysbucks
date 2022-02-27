import { useEffect, useState } from "react";
import { globalTitle } from "../../components/App";
import { UploadIcon } from "../../exports/exportImages";
import { API } from "../../config/api";

export default function AddProduct() {
  console.clear();
  useEffect(() => {
    document.title = globalTitle + "Add Product";
  }, []);

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
  });

  const { title, price, image } = form;

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      console.log(form);

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("price", form.price);
      formData.set("image", form.image[0], form.image[0].name);

      // Insert product data
      const response = await API.post("/product", formData, config);
      console.log(response);

      if (response.data.status === "Success...") {
        const alert = (
          <div
            className="flex items-center bg-green-600 rounded-md text-white text-sm px-4 py-3"
            role="alert"
          >
            <p>Product successfully added.</p>
          </div>
        );
        setMessage(alert);
        setTimeout(() => {
          setMessage(null);
        }, 4000);
        setForm({
          title: "",
          price: "",
          image: "",
        });
      } else {
        const alert = (
          <div
            className="flex justify-center items-center bg-red-600 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <p>Error. Try Again</p>
          </div>
        );
        console.log(response);
        setMessage(alert);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-28 my-10">
      <div className="w-full lg:w-7/12">
        <h4 className="text-3xl lg:text-5xl font-bold font-['Avenir-Black'] text-brand-red mb-4">
          Add New Product
        </h4>
        {message && message}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 my-10 font-['Avenir-Book'] text-center"
        >
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
            placeholder="Product Name"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={price}
            placeholder="Price (Rp.)"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <label
            htmlFor="image"
            className="block text-left w-full p-3 outline outline-2 cursor-pointer outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          >
            <div className="flex justify-between">
              <p className="text-sm opacity-100 font-normal text-gray-400">
                Photo Product
              </p>
              <input
                id="image"
                name="image"
                onChange={handleChange}
                value={price}
                type="file"
                className="sr-only"
              />
              <img className="h-5 mr-2" src={UploadIcon} alt="" />
            </div>
          </label>
          <button
            type="submit"
            className="w-full lg:w-9/12 py-2 rounded-md text-white text-center bg-brand-red"
          >
            Add Product
          </button>
        </form>
      </div>
      {preview && (
        <div className="w-full lg:w-4/12 mb-8 lg:mb-0 flex justify-center">
          <img src={preview} alt="preview" className="w-9/12 lg:w-full" />
        </div>
      )}
    </div>
  );
}

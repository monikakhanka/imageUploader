import { useState, useRef } from "react";
import { DEFAULT_IMG } from "../utils/constants";

const ImageUpload = () => {
  const [avatarUrl, setAvatarUrl] = useState(DEFAULT_IMG);
  const loadingGig =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXlpbmMyNTQxMHA1cm04aDgzNzJrZDMzMDNhNzR5OWd6MnRmZ3hxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/giphy.webp";

  const fileUploadRef = useRef();

  const uploadImageDisplay = async () => {
    try {
      setAvatarUrl(loadingGig);
      const uploadedFile = fileUploadRef.current.files[0];

      if (!uploadedFile) {
        setAvatarUrl(DEFAULT_IMG);
        return;
      }

      // create an empty form
      const formData = new FormData();

      // "file" is the name of field
      // upploaded file is actual file
      formData.append("file", uploadedFile);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "post",
          body: formData,
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        setAvatarUrl(data?.location || DEFAULT_IMG);
      }
    } catch (error) {
      console.error(error);
      setAvatarUrl(DEFAULT_IMG);
    }
  };

  // for client side uploading
  // const cachedUrl = URL.createObjectURL(uploadedFile);
  // setAvatarUrl(cachedUrl);

  const handleImageUpload = (event) => {
    event.preventDefault();
    // simulating a click on inpu file when we click on button
    fileUploadRef.current.click();
  };

  return (
    <div className="text-white flex justify-center">
      <div>
        <img
          src={avatarUrl}
          alt="image"
          className="w-96 h-96 rounded-full bg-cyan-100 content-center items-center mt-20 object-cover"
        />

        <form>
          <button
            type="submit"
            className="absolute"
            onClick={handleImageUpload}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Edit_Notepad_Icon.svg"
              alt="edit"
              className="w-12 h-12 z-20 ml-64 -mt-20"
            />
          </button>
          <input
            type="file"
            ref={fileUploadRef}
            className="hidden"
            onChange={uploadImageDisplay}></input>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;

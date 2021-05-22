import React, {useState} from 'react';

const Upload = () => {
  const [image, setImage] = useState({preview: '', raw: ''});

  const handleChange = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image.raw);

    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }

    // await fetch('YOUR_URL', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: formData,
    // });
  };

  return (

      <div id="upload"
           className="w-1/2 shadow-md rounded-lg p-10 bg-white mx-auto text-gray-700">

        <h2 className="text-2xl mb-4 font-bold ">Image Upload</h2>
        <div
            className="bg-yellow-100 w-full h-96 overflow-hidden mb-5 rounded-xl mx-auto">
          {image.preview &&
          <img src={image.preview} alt="upload"
               className="w-full h-96  object-contain"/>}
        </div>

        <input
            type="file"
            id="upload-button"
            className="hidden"
            onChange={handleChange}
        />

        <div className="mt-5 flex justify-between">

          <label htmlFor="upload-button"
                 className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
            Upload photo
          </label>

          <button disabled
                  className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mt">
            Save photo
          </button>


        </div>
      </div>

  );
};

export default Upload;
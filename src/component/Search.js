import React, {useState} from 'react';
import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';
import img4 from '../static/img4.jpg';
import img5 from '../static/img5.jpg';
import img6 from '../static/img6.jpg';

const Search = () => {

  const [image, setImage] = useState({preview: '', raw: ''});
  const [results, setResults] = useState(null);
  const [tags, setTags] = useState('');

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

  const onSearchByImage = async e => {

    if(image.preview !== '') {
      setResults([""]);
    }

    // await fetch('YOUR_URL', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: formData,
    // });
  };

  const onSearchByTag = async e => {

    if(tags !== '') {
      setResults(['']);
    }

    // await fetch('YOUR_URL', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: formData,
    // });
  };

  const onTextChange = (e) => {
    console.log(e.target.value);
    setTags(e.target.value);
  }


  return (
      <div>
        <div id="search"
             className="w-1/2 shadow-md rounded-lg p-10 bg-white mx-auto mt-10 text-gray-700">
          <h2 className="text-2xl mb-4 font-bold ">Search</h2>
          <div
              className="bg-yellow-100 w-full h-96 overflow-hidden mb-5 rounded-2xl mx-auto">
            {image.preview &&
            <img src={image.preview} alt="upload"
                 className="w-full h-96  object-contain"/>}
          </div>
          <label htmlFor="upload-button2"
                  className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
            Upload photo
          </label>
          <input
              type="file"
              id="upload-button2"
              className="hidden"
              onChange={handleChange}
          />

          <div className="field-group mt-5">
            <label className="field-label mr-2"
                   htmlFor="first_name">Tags:</label>
            <input className="field border-2 rounded border-gray-600 p-1 w-full"
                   type="text" name="first_name" id="first_name"
                   value={tags}
                   onChange={onTextChange}
                   placeholder="car, dog, desk"/>
          </div>

          <div className="mt-5 flex justify-between">
            <button onClick={onSearchByImage}
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Search by image
            </button>
            <button onClick={onSearchByTag}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              Search by tags
            </button>
          </div>
        </div>
        { results && (
          <div id="search-result"
               className="w-4/5 shadow-md rounded-lg p-10 bg-white mx-auto mt-10 text-gray-700">
            <h2 className="text-2xl mb-4 font-bold">Search result</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img1} alt="tag" className="rounded-md shadow-sm"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p className="my-2">Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img2} alt="tag" className="rounded-md shadow-md"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p>Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img3} alt="tag" className="rounded shadow-md"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p>Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img4} alt="tag" className="rounded shadow-md"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p>Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img5} alt="tag" className="rounded shadow-md"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p>Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
              <div className="shadow-md px-5 py-6 mb-4 rounded-lg">
                <img src={img6} alt="tag" className="rounded shadow-md"/>
                <p className="my-2">Url: &nbsp;&nbsp;&nbsp;<a
                    className="font-bold text-green-700"
                    href="https://www.codewell.cc/">https://www.codewell.cc/</a>
                </p>
                <p>Tags:&nbsp;
                  <span
                      className="rounded font-bold text-green-800 bg-green-200 px-2 pb-1 mr-2 round-xl shadow-sm">house</span>
                  <span
                      className="rounded font-bold text-yellow-800 bg-yellow-200 px-2 pb-1 mr-2 round-xl shadow-sm">desk</span>
                  <span
                      className="rounded font-bold text-blue-800 bg-blue-200 px-2 pb-1 mr-2 round-xl shadow-sm">car</span>
                  <span
                      className="rounded font-bold text-red-800 bg-red-200 px-2 pb-1 mr-2 round-xl shadow-sm">dog</span>
                </p>
                <p className="my-2">Add new tags:</p>
                <p className="my-2 field-group">

                  <input
                      className="field border-0 rounded bg-yellow-100 py-2 px-2 w-full shadow-sm"
                      type="text" name="first_name" id="first_name"
                      placeholder="car, dog, desk"/>
                </p>
                <p className="mt-3 flex justify-end">
                  <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Add
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default Search;
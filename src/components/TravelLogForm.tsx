'use client';
import { useState } from 'react';

const TravelLogForm = () => {
  const [title, setTitle] = useState('');
  return (
    <>
    <div className="flex justify-end">
      <button className="btn mr-5  btn-sm  btn-success">CANCEL</button>
    </div>
    <form className="mx-auto max-w-md flex gap-4 flex-col my-4">
      {/* {formError && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formError}</span>
          </div>
        </div>
      )} */}
      <div className="form-control w-full">
        <label className="label"><span className="label-text capitalize">Title</span></label>
        <input value={title} type='text'
        onChange={(e) => setTitle(e.target.value)}
         className="input input-bordered w-full disabled"/>
      </div>
      <button className="btn btn-success">Create</button>
    </form>
  </>
  );
};
export default TravelLogForm;

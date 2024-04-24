import React, { FormEvent, useEffect } from "react";

const BootstrapForm = ({ type, onSubmit }: { type: string, onSubmit: (e: FormEvent<HTMLFormElement>) => void }) => {
  return (
    <div className="row pt-5">
      <div className="col-4 mx-auto mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BootstrapForm;

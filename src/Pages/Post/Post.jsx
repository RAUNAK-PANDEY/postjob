import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="cardglobe">
      <div className="cards">
        <p class="heading">Basic Details</p>
        <hr></hr>
        <form className="form">
          <div className="formInput">
            <label className="formlabel">Job Title*</label>
            <div className="inputFlex">
              <input
                className="input-1"
                type="text"
                placeholder="Write a title that appropriately describes this job."
                required
              />
            </div>
          </div>

          <div className="formInput">
            <label className="formlabel">Location*</label>
            <div className="inputFlex">
              <input
                className="input-1"
                type="text"
                placeholder="+Add Location"
                required
              />
            </div>
          </div>
          <div className="formrow">
            <div className="formInput1">
              <div>
                {" "}
                <label className="formlabel12">Years of experience*</label>
              </div>

              <div className="inputFlex12">
                <select name="years" id="years">
                  <option value="" selected>
                    Select Min
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className="formInput1 frm">
              {/* <div>
        <label className='formlabel1'>Location*</label>
        </div> */}

              <div className="inputFlex12">
                <select name="years" id="years">
                  <option value="" selected>
                    Select Max
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="formInput">
            <label className="formlabel56">Job Description*</label>
            <div className="inputFlex56">
              <input
                className="input-18"
                type="text"
                placeholder="Describe the role and responsibilities, skills required
                for the job and help the candidates understand the role better"
                required
              />
            </div>
          </div>
          <p class="heading">Basic Details</p>
          <hr></hr>
          <div className="formrow">
            <div className="formInput1">
              <div>
                {" "}
                <label className="formlabel16">Category*</label>
              </div>

              <div className="inputFlex12">
                <select name="category" id="category">
                  <option value="" selected>
                    Select
                  </option>
                  <option value="Software Dev">Software Dev</option>
                  <option value="App Dev">App Dev</option>
                  <option value="Frontend Dev">Frontend Dev</option>
                  <option value="Backend Dev">Backend Dev</option>
                </select>
              </div>
            </div>
            <div className="formInput1">
              <div>
                {" "}
                <label className="formlabel17">Functional Area*</label>
              </div>

              <div className="inputFlex12">
                <select name="functions" id="functions">
                  <option value="" selected>
                    Select
                  </option>
                  <option value="Software">software</option>
                  <option value="App">App</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>
            </div>
          </div>
          <div className="formrow">
            <div className="formInput1">
              <div>
                {" "}
                <label className="formlabel12">Graduating Year*</label>
              </div>

              <div className="inputFlex12">
                <select name="years" id="years">
                  <option value="" selected>
                    Min Batch
                  </option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>

            <div className="formInput1 frm">
              {/* <div>
        <label className='formlabel1'>Location*</label>
        </div> */}

              <div className="inputFlex12">
                <select name="years" id="years">
                  <option value="" selected>
                    Select Max
                  </option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
          </div>
          <div className="formInput">
            <label className="formlabel">Tags*</label>
            <div className="inputFlex">
              <input
                className="input-1"
                type="text"
                placeholder="+Add job tag"
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Post;

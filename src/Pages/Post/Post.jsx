import React, { useState } from "react";
import "./post.css";
import axios from "axios";
const Post = () => {
  const [data, setData] = useState({
    jobTitle: "",
    location: [],
    selectMinYear: "",
    selectMaxYear: "",
    jobDesc: "",
    category: [],
    functionalArea: "",
    minBatch: "",
    maxBatch: "",
    tags: [],
  });

  //here location , category and tags are arrays.
  //here elements are added in these array on clicking Enter Key
  const handle = (e1) => data.location.push(e1);
  const handle1 = (e1) => data.tags.push(e1);
  // console.log(data);

  //Function for submitting this form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    //Checking for Validation for each Field
    if (
      data.jobTitle.trim().length < 1 ||
      data.location.length < 1 ||
      data.selectMinYear.trim().length < 1 ||
      data.selectMaxYear.trim().length < 1 ||
      data.jobDesc.trim().length < 1 ||
      data.category.length < 1 ||
      data.functionalArea.trim().length < 1 ||
      data.minBatch.trim().length < 1 ||
      data.maxBatch.trim().length < 1 ||
      data.tags.length < 1
    ) {
      alert("Please Fill all the fields");
      // return
    }
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    //Here we are axios for sending data to backend
    // I have done proxying by adding proxy field to my package.json
    // I have added "proxy": "http://localhost:8001/", in package.json
    //It’s an intermediate server between client and servers by forwarding client requests to backend
    try {
      const { res } = await axios.post("/v1jobs/job", data, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cardglobe">
      <div className="cards">
        <p class="heading">Basic Details</p>
        <hr></hr>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formInput">
            <label className="formlabel">Job Title*</label>
            <div className="inputFlex">
              <input
                className="input-1"
                type="text"
                placeholder="Write a title that appropriately describes this job."
                required
                onChange={(e) => {
                  setData({ ...data, jobTitle: e.target.value });
                }}
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
                onKeyDown={(e) => e.key === "Enter" && handle(e.target.value)}
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
                <select
                  defaultValue={"DEFAULT"}
                  value={data.selectMinYear}
                  name="years"
                  id="years"
                  onChange={(e) => {
                    setData({ ...data, selectMinYear: e.target.value });
                  }}
                >
                  <option value="DEFAULT">Select Min</option>
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
                <select
                  defaultValue={"DEFAULT"}
                  value={data.selectMaxYear}
                  name="years"
                  id="years"
                  onChange={(e) => {
                    setData({ ...data, selectMaxYear: e.target.value });
                  }}
                >
                  <option value="DEFAULT">Select Max</option>
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
                onChange={(e) => {
                  setData({ ...data, jobDesc: e.target.value });
                }}
              />
            </div>
          </div>
          <p class="heading">Targeting</p>
          <hr></hr>
          <div className="formrow">
            <div className="formInput1">
              <div>
                {" "}
                <label className="formlabel16">Category*</label>
              </div>

              <div className="inputFlex12">
                <select
                  defaultValue={"DEFAULT"}
                  value={data.category}
                  name="category"
                  id="category"
                  onChange={(e) => {
                    data.category.push(e.target.value);
                    // setData({...data , category : e.target.value})
                  }}
                >
                  <option value="DEFAULT">Select</option>
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
                <select
                  defaultValue={"DEFAULT"}
                  value={data.functionalArea}
                  name="functions"
                  id="functions"
                  onChange={(e) => {
                    setData({ ...data, functionalArea: e.target.value });
                  }}
                >
                  <option value="DEFAULT" selected>
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
                <select
                  defaultValue={"DEFAULT"}
                  value={data.minBatch}
                  name="years"
                  id="years"
                  onChange={(e) => {
                    setData({ ...data, minBatch: e.target.value });
                  }}
                >
                  <option value="DEFAULT" selected>
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
                <select
                  defaultValue={"DEFAULT"}
                  value={data.maxBatch}
                  name="years"
                  id="years"
                  onChange={(e) => {
                    setData({ ...data, maxBatch: e.target.value });
                  }}
                >
                  <option value="DEFAULT" selected>
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
                onKeyDown={(e) => e.key === "Enter" && handle1(e.target.value)}
              />
            </div>
          </div>
          <div><button type="submit">Post Job</button> <button type="submit" className="btnnew">Post Job and Add Another Job</button> <p>Cancel</p>
       </div>
           </form>
      </div>
    </div>
  );
};

export default Post;

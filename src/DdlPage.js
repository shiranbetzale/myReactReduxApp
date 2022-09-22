import React from 'react';
import { useForm } from "react-hook-form";

function DdlList(props) {
  const {handleChange, str, subNameDog ,options, subDogs, handleChangeSubDogs, handleChangeNumOfImages}=props;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => handleChangeNumOfImages(data.numOfImages);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      choose impage:

      <select {...register("type", { required: true})}
          defaultValue={'select...'}
          onChange={e=>handleChange(e.target.value)}
        >
        <option value="">Select your option</option>
        {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
        ))}
      </select> 
      {errors.type && <span>This field is required</span>}

      {
        str !== "" &&
        <select {...register("subType", { required: true})}
          defaultValue={'select...'}
          onChange={e=>handleChangeSubDogs(e.target.value)}
        >
          <option value="">Select your option</option>
         {subDogs.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      }
      {errors.subType && <span>This field is required</span>}

      {
        subNameDog !== "" &&
        <input type="number" {...register("numOfImages", { required: true, min: 1, max: 6 })} />
      }

      {errors.numOfImages && <span>This field is required and between 1-6</span>}


      <button  className='btn' data-testid="btn" >submit</button>
      {/* <input type="submit" className='btn' data-testid="btn" value='submit' /> */}
    </form>
  );
}

export default DdlList;

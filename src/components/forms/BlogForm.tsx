"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();


const BlogForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Comment submit successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
               <div className="postbox__comment-input">
                  <label>Your Name*</label>
                  <input type="text" {...register("name")} placeholder="Your Name*" />
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
               <div className="postbox__comment-input">
                  <label>Your Email*</label>
                  <input type="email" {...register("email")} placeholder="Your Email*" />
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-xxl-12">
               <div className="postbox__comment-input">
                  <label>Your Review*</label>
                  <textarea {...register("message")} placeholder="Write Message"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-xxl-12">
               <div className="postbox__comment-btn">
                  <button type="submit" className="primary-btn-1 btn-hover">
                     POST comment
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default BlogForm

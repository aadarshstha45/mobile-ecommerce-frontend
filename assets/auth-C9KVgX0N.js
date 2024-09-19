import{o as a,s}from"./zod-D--hjMPf.js";const i=a({name:s().min(1,{message:"Name is required"}),email:s().email({message:"Enter a valid email address"}).min(1,{message:"Email is required"}),password:s().min(1,{message:"Password is required"}).min(8,{message:"Password must be at least 8 characters"}),confirm_password:s().min(1,{message:"Confirm password is required"})}).refine(e=>e.password===e.confirm_password,{message:"Passwords did not match",path:["confirm_password"]}),m=a({email:s().min(1,{message:"Email is required"}).email({message:"Enter a valid email address"}),password:s().min(1,{message:"Password is required"})}),d=a({current_password:s().min(1,{message:"Old password is required"}),new_password:s().min(1,{message:"New password is required"}).min(6,{message:"Password must be at least 8 characters"}),c_new_password:s().min(1,{message:"Confirm password is required"})}).refine(e=>e.new_password===e.c_new_password,{message:"Passwords did not match",path:["c_new_password"]});export{d as C,m as L,i as R};

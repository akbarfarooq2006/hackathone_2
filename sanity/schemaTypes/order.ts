import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Car Rental Order",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Name is required"),
    }),
    defineField({
      name: "orderId",
      title: "Order Id",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Name is required"),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule) => Rule.required().min(1).error("Address is required"),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email().error("Please enter a valid email"),
    }),
    defineField({
      name: "pickupLocation",
      title: "Pickup Location",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Pickup location is required"),
    }),
    defineField({
      name: "pickupDate",
      title: "Pickup Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Pickup date is required"),
    }),
    defineField({
      name: "pickupTime",
      title: "Pickup Time",
      type: "string",
      validation: (Rule) => Rule.required().error("Pickup time is required"),
    }),
    defineField({
      name: "dropoffLocation",
      title: "Drop-off Location",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Drop-off location is required"),
    }),
    defineField({
      name: "dropoffDate",
      title: "Drop-off Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Drop-off date is required"),
    }),
    defineField({
        name: "dropoffTime",
        title: "Pickup Time",
        type: "string",
        validation: (Rule) => Rule.required().error("Pickup time is required"),
      }),
    //   no od days
    defineField({
        name: "dropoffTime",
        title: "Pickup Time",
        type: "number",
        
      }),
  ],
});

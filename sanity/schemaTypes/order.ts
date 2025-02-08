import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Order Car Rental",
  type: "document",
  fields: [
    // order id
    defineField({
      name: "bookingId",
      title: "Order Id",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Name is required"),
    }),
    // order time
    defineField({
      name: "bookingTime",
      title: "Order Time",
      type: "string",
      validation: (Rule) => Rule.required().error("Pickup time is required"),
    }),
    // order date
    defineField({
      name: "bookingDate",
      title: "Order Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Pickup date is required"),
    }),
    // name
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Name is required"),
    }),
    //  phone no.
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",

    }),
    // address
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule) => Rule.required().min(1).error("Address is required"),
    }),
    // email
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email().error("Please enter a valid email"),
    }),
    // pickup location
    defineField({
      name: "pickupLocation",
      title: "Pickup Location",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Pickup location is required"),
    }),
    // pickup date
    defineField({
      name: "pickupDate",
      title: "Pickup Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Pickup date is required"),
    }),
    // pickup time
    defineField({
      name: "pickupTime",
      title: "Pickup Time",
      type: "string",
      validation: (Rule) => Rule.required().error("Pickup time is required"),
    }),
    // dropoff location
    defineField({
      name: "dropoffLocation",
      title: "Drop-off Location",
      type: "string",
      validation: (Rule) => Rule.required().min(1).error("Drop-off location is required"),
    }),
    // dropoff date
    defineField({
      name: "dropoffDate",
      title: "Drop-off Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Drop-off date is required"),
    }),
    // dropoff
    defineField({
      name: "dropoffTime",
      title: "Pickup Time",
      type: "string",
      validation: (Rule) => Rule.required().error("Pickup time is required"),
    }),
    //   No of days of rent
    defineField({
      name: "rentalDays",
      title: "No of Days",
      type: "number",
    }),
    // products
    defineField({
      name: "products",
      title: "Product Oreder",
      type: "reference",
      to: [{ type: "products" }],
    }),
    // status
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Pending", value: "pending" },
          { title: "Cancel", value: "cancel" },
        ],
        layout: "radio", // optional: dropdown ya radio ke liye
      }
    }),
    // total cost


  ],
});

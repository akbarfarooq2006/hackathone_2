import { client } from "@/sanity/lib/client";
import { BookingDetails,BookingAdditionalDetails } from "@/types/order";

interface Data extends BookingDetails, BookingAdditionalDetails {}
export async function createOrder(data:Data){
 



    try {
        console.log(data,  'function');
        const createOrder = await client.create({ 
            _type: "order",
            bookingId: data.bookingId,
            bookingDate: data.bookingDate,
            bookingTime: data.bookingTime,
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            pickupLocation: data.pickupLocation,
            pickupDate: data.pickupDate,
            pickupTime: data.pickupTime,
            dropoffLocation: data.dropoffLocation,
            dropoffDate: data.dropoffDate,
            dropoffTime: data.dropoffTime,
            products: {
                _type: "reference",
                _ref: data.products, // product document ID
              },
            rentalDays: data.rentalDays,
            status: data.status,

    })
 // Commit changes to the Sanity database
    const result = await createOrder
        console.log("Updated product:", result);
        return result;
      } catch (error) {
        console.error("Error updating product:", error);
        throw error; // Rethrow error so you can handle it elsewhere
      }
    }
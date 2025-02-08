export interface BookingDetails {
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    pickupLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffLocation: string;
    dropoffDate: string;
  }
 export interface BookingAdditionalDetails {
    bookingId?: string,
    bookingTime?: string,
    bookingDate?: string,
    rentalDays?: number,
    dropoffTime?: string,
    products?:string,
    status?: string
  }
  
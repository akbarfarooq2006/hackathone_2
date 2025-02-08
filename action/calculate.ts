 export default function calculateRentalDays(pickupDate: string, pickupTime: string, dropoffDate: string) {
    // Combine pickup date and time
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}:00`).getTime();
    
    // Set drop-off time same as pickup time
    const dropoffDateTime = new Date(`${dropoffDate}T${pickupTime}:00`).getTime();
  
    // Calculate difference in milliseconds and convert to days
    const rentalDays = Math.ceil((dropoffDateTime - pickupDateTime) / (1000 * 60 * 60 * 24));
    return rentalDays;
  }


  export function timeCalsulate(time: string): string {
    const [hours, minutes] = time.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? "0" + minutes : minutes} ${suffix}`;
  }
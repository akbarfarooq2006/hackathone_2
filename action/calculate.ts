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

  export const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours || 12; // '0' ko '12' banane ke liye
  
    // Minutes ko 2-digit format me dikhane ke liye
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time= `${hours}:${formattedMinutes} ${ampm}`;
// console.log(time);
return time  
};

export function getCurrentDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0'); // 2-digit day
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 2-digit month (0-based index)
  const year = now.getFullYear();

  return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
}

  

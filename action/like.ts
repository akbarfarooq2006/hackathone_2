import { client } from "@/sanity/lib/client";

export async function likeHandle(id:string,like:boolean){
 
    try {
        console.log(id, like, 'function');
        const updatedProduct = await client
          .patch(id) // Specify the document ID to patch
          .set({ islike: like }) // Update the field
          .commit(); // Commit changes to the Sanity database
    const result = await updatedProduct
        console.log("Updated product:", result);
        return result;
      } catch (error) {
        console.error("Error updating product:", error);
        throw error; // Rethrow error so you can handle it elsewhere
      }
    }
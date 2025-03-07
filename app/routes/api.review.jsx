// routes/app.proxy.js
// import { Page } from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import prisma from "../db.server"; // Import Prisma

export const action = async ({ request }) => {
  console.log("Proxy endpoint hit");

  // Authenticate the request
  const { session } = await authenticate.public.appProxy(request);

  if (session) {
    console.log("Session Success");

    try {
      // Parse JSON body only once
      const formData = await request.json();

      // Extract data from request
      const { productId, title, rating, comment } = formData;

      console.log("Received data:", { productId, title, rating, comment });

      // Basic validation
      if (!productId || !title || !rating || !comment) {
        return json(
          { success: false, message: "All fields are required" },
          { status: 400 },
        );
      }

      // Save to the database using Prisma
      const newReview = await prisma.review.create({
        data: {
          name: title,
          rating: parseInt(rating), // Convert rating to integer
          review: comment,
        },
      });

      console.log("Review saved:", newReview);

      return json({
        success: true,
        message: "Review submitted successfully!",
        review: newReview,
      });
    } catch (error) {
      console.error("Error saving review:", error);
      return json(
        { success: false, message: "Database error" },
        { status: 500 },
      );
    }
  }
  return null;
};

// This is a proxy endpoint that will handle the form submission with review image upload ----------

// import {
//   unstable_parseMultipartFormData,
//   unstable_createFileUploadHandler,
//   json,
// } from "@remix-run/node";
// import prisma from "../db.server";
// import { authenticate } from "../shopify.server";

// export const action = async ({ request }) => {
//   console.log("Proxy endpoint hit");

//   const { session } = await authenticate.public.appProxy(request);
//   if (session) {
//     console.log("Session Success");

//     try {
//       // Create upload handler instance with proper configuration
//       const uploadHandler = unstable_createFileUploadHandler({
//         maxFileSize: 5_000_000,
//         directory: "./public/uploads",
//         file: ({ filename }) => filename,
//       });

//       // Parse multipart form data with configured handler
//       const formData = await unstable_parseMultipartFormData(
//         request,
//         uploadHandler
//       );

//       // Log received data
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value);
//       }

//       const title = formData.get("title");
//       const rating = formData.get("rating");
//       const comment = formData.get("comment");
//       const image = formData.get("image");

//       // Get the filename if an image was uploaded
//       const imageUrl = image?.name || null;

//       console.log();

//       // Validate required fields
//       if (!title || !rating || !comment) {
//         return json({ success: false, message: "Required fields missing" }, { status: 400 });
//       }

//       // Save the review with Prisma
//       const newReview = await prisma.review.create({
//         data: {
//           name: title,
//           rating: parseInt(rating),
//           review: comment,
//           imageUrl
//         },
//       });

//       console.log("Review saved:", newReview);

//       return json({ success: true, message: "Review submitted successfully!", review: newReview });
//     } catch (error) {
//       console.error("Error saving review:", error);
//       return json({ success: false, message: "Database or parsing error" }, { status: 500 });
//     }
//   }
//   return null;
// };

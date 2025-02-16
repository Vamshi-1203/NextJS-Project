// import { env } from "../config";
// import { delay } from "../utils";

// let customClientInstance: any | null = null;

// async function createCustomIndex(client: any, indexName: string) {
//   try {
//     // Simulate the index creation
//     console.log(`Creating index with name: ${indexName}`);

//     console.log(
//       `Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`,
//     );
//     await delay(env.INDEX_INIT_TIMEOUT);
//     console.log("Index created !!");
//   } catch (error) {
//     console.error("Error", error);
//     throw new Error("Index creation failed");
//   }
// }

// async function initCustomClient() {
//   try {
//     // Use PINECONE_API_KEY for authentication or client initialization
//     const apiKey = env.PINECONE_API_KEY;

//     if (!apiKey) {
//       throw new Error("Pinecone API key is missing.");
//     }

//     // Initialize the client (replace with actual logic)
//     console.log("Initializing custom client with Pinecone API key...");

//     const indexName = env.CUSTOM_INDEX_NAME;

//     // Simulate listing existing indexes
//     const existingIndexes = ["existingIndex1", "existingIndex2"]; // Example data

//     if (!existingIndexes.includes(indexName)) {
//       createCustomIndex({}, indexName);
//     } else {
//       console.log("Your index already exists. Nice!!");
//     }

//     return {}; // Return custom client object (replace with actual logic)
//   } catch (error) {
//     console.error("Error", error);
//     throw new Error("Failed to initialize Custom Client");
//   }
// }

// export async function getCustomClient() {
//   if (!customClientInstance) {
//     customClientInstance = await initCustomClient();
//   }

//   return customClientInstance;
// }

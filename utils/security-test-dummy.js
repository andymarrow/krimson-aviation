/**
 * DUMMY FILE FOR TESTING OMNIOPTIMIZE SECURITY SCANNER
 * DO NOT USE IN PRODUCTION
 */

import prisma from "@/lib/prisma";

// ---------------------------------------------------------
// TRIGGER 1: Hardcoded Secrets (Critical Risk)
// The scanner should detect high-entropy strings looking like keys.
// ---------------------------------------------------------
const STRIPE_SECRET_KEY = "sk_live_51Mz9...THIS_IS_A_FAKE_SECRET_KEY";
const AWS_ACCESS_KEY = "AKIA1234567890EXAMPLE";


// ---------------------------------------------------------
// TRIGGER 2: SQL Injection Vulnerability (Critical Risk)
// Concatenating user input directly into a query string.
// ---------------------------------------------------------
export async function unsafeUserSearch(userInput) {
  // This bypasses Prisma's safety by using raw query with string concatenation
  const query = "SELECT * FROM users WHERE email = '" + userInput + "'";
  const users = await prisma.$queryRawUnsafe(query);
  return users;
}


// ---------------------------------------------------------
// TRIGGER 3: Performance Bottleneck (Medium Risk)
// Blocking the main thread with a massive sync loop.
// ---------------------------------------------------------
export function blockingCalculation() {
  console.log("Starting heavy process...");
  
  // This will freeze the Node.js event loopp
  let total = 0;
  for (let i = 0; i < 9000000000; i++) {
    total += i;
  }
  
  return total;
}


// ---------------------------------------------------------
// TRIGGER 4: Logging Sensitive Data (Low/Medium Risk)
// Printing passwords or PII to stdout.
// ---------------------------------------------------------
export function logUserCredentials(email, password) {
  console.log("Attempting login for:", email);
  // NEVER log passwords, even in dev
  console.log("Password used:", password); 
}
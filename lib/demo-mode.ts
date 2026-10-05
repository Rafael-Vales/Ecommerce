// Explicit opt-in: database failures never silently switch to sample data.
export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

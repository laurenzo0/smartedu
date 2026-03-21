import rateLimit from "express-rate-limit";

export const api_rate_limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 500,
  message: {
    message: "Too many attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

//route rate limit
export const route_rate_limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 500,
  message: {
    message: "Too many attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});


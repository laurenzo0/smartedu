import rateLimit from "express-rate-limit";

export const api_rate_limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 10000,
  message: {
    message: "Too many attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.headers["x-forwarded-for"] || req.ip,
});

//route rate limit
export const route_rate_limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 10000,
  message: {
    message: "Too many attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.headers["x-forwarded-for"] || req.ip,
});

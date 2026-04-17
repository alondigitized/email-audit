import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// S3: per-IP and per-email rate limits on the unauthenticated sign-in endpoint.
// Lazy Redis client so local dev / tests can skip rate limiting if Upstash vars
// are absent — production MUST have these set (see cutover checklist).

let redis: Redis | null = null;
function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

function makeLimiter(prefix: string, limit: number, windowSec: number) {
  return () => {
    const r = getRedis();
    if (!r) return null;
    return new Ratelimit({
      redis: r,
      limiter: Ratelimit.slidingWindow(limit, `${windowSec} s`),
      prefix: `rl:${prefix}`,
      analytics: false,
    });
  };
}

const emailLimiter = makeLimiter("signin:email", 3, 60 * 60);
const ipLimiter = makeLimiter("signin:ip", 10, 60 * 60);

export async function checkSigninRateLimit(email: string, ip: string) {
  const el = emailLimiter();
  const il = ipLimiter();
  const results = await Promise.all([
    el ? el.limit(`e:${email}`) : Promise.resolve({ success: true }),
    il ? il.limit(`i:${ip}`) : Promise.resolve({ success: true }),
  ]);
  return results.every((r) => r.success);
}

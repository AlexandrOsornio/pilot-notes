# Stage 1: Build the app (uses full Node image for dev tools)
FROM node:22-alpine AS builder

# Set working dir
WORKDIR /app

# Enable corepack for pnpm (included in Node >=16.10)
RUN corepack enable

# Copy package files and lockfile (assumes pnpm-lock.yaml exists; generate it locally with pnpm install)
COPY package.json pnpm-lock.yaml ./

# Install production dependencies (frozen-lockfile for reproducibility)
RUN pnpm install --frozen-lockfile --prod

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build

# Stage 2: Runtime (slim image for production)
FROM node:22-alpine AS runner

# Set working dir
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Enable corepack in runtime stage (if needed, though deps are copied)
RUN corepack enable

# Copy built artifacts from builder stage
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Env var for production
ENV NODE_ENV=production

# Start the app
CMD ["pnpm", "start"]
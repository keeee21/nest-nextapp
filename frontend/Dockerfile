FROM --platform=linux/amd64 node:16 AS build

# Create App dir
RUN mkdir -p /app

# RUN npm install

FROM --platform=linux/amd64 node:16 AS app

# ## Copy built node modules and binaries without including the toolchain
COPY --from=build /app .

WORKDIR /app

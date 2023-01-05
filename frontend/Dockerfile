FROM node:lts-alpine AS build

# Create App dir
RUN mkdir -p /app

# RUN npm install

FROM node:lts-alpine as app

# ## Copy built node modules and binaries without including the toolchain
COPY --from=build /app .

WORKDIR /app

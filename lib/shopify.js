import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});

export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));

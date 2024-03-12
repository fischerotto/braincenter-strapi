module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: "deepl",
      // Pass credentials and other options to the provider
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: "bfbf3a8a-1c22-4413-b02d-e6aae15e1c3c:fx",
        // use custom api url - optional
        apiUrl: "https://api-free.deepl.com",
        // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
        localeMap: {
          // use uppercase here!
          EN: "EN-US",
        },
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way.
          // use with caution, as non-default values may break translation of markdown
          formality: "default",
          // ...
        },
      },
    },
  },
});
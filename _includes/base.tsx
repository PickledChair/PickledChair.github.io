export default ({ title, children }) => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">

      // For old IEs
      <link rel="shortcut icon" href="img/favicon.ico" />

      // For new browsers - multisize ico
      <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="img/favicon.ico">

      // For iPad with high-resolution Retina display running iOS ≥ 7:
      <link rel="apple-touch-icon" sizes="152x152" href="img/favicon-152-precomposed.png">

      // For iPad with high-resolution Retina display running iOS ≤ 6:
      <link rel="apple-touch-icon" sizes="144x144" href="img/favicon-144-precomposed.png">

      // For iPhone with high-resolution Retina display running iOS ≥ 7:
      <link rel="apple-touch-icon" sizes="120x120" href="img/favicon-120-precomposed.png">

      // For iPhone with high-resolution Retina display running iOS ≤ 6:
      <link rel="apple-touch-icon" sizes="114x114" href="img/favicon-114-precomposed.png">

      // For iPhone 6+
      <link rel="apple-touch-icon" sizes="180x180" href="img/favicon-180-precomposed.png">

      // For first- and second-generation iPad:
      <link rel="apple-touch-icon" sizes="72x72" href="img/favicon-72-precomposed.png">

      // For non-Retina iPhone, iPod Touch, and Android 2.1+ devices:
      <link rel="apple-touch-icon" sizes="57x57" href="img/favicon-57.png">

      // For Old Chrome
      <link rel="icon" sizes="32x32" href="img/favicon-32.png" >

      // For IE10 Metro
      <meta name="msapplication-TileColor" content="#FFFFFF">
      <meta name="msapplication-TileImage" content="img/favicon-144.png">
      <meta name="theme-color" content="#ffffff">

      // Chrome for Android
      <link rel="manifest" href="manifest.json">
      <link rel="icon" sizes="192x192" href="img/favicon-192.png">

      <title>{title}</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);

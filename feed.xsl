<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Inter:300,400,700,400italic|Crimson+Text:400,400italic&amp;subset=latin,latin-ext" media="screen" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;display=swap" media="screen" rel="stylesheet" type="text/css" />
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Inter", system-ui, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: rgba(0, 0, 0, 0.87);
            background: #F9F9F9;
            padding: 20px;
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
          }
          .header {
            border-bottom: 1px solid hsl(220, 20%, 88%);
            padding-bottom: 24px;
            margin-bottom: 32px;
          }
          .header h1 {
            color: rgba(0, 0, 0, 0.6);
            margin-bottom: 8px;
            font-size: 2.5em;
            font-weight: 400;
            line-height: 1.4;
            font-family: "Inter", sans-serif;
          }
          .header p {
            color: rgba(0, 0, 0, 0.6);
            font-size: 1.1em;
            font-weight: 300;
          }
          .info-box {
            background: hsl(220, 20%, 96%);
            border-left: 4px solid hsl(220, 20%, 60%);
            padding: 20px 24px;
            margin-bottom: 32px;
            border-radius: 8px;
          }
          .info-box h2 {
            color: rgba(0, 0, 0, 0.8);
            font-size: 1.3em;
            margin-bottom: 12px;
            font-weight: 600;
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 8px;
          }
          .info-box p {
            color: rgba(0, 0, 0, 0.7);
            font-size: 0.95em;
            line-height: 1.6;
          }
          .info-box code {
            background: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-family: "Monaco", "Menlo", monospace;
            color: rgba(0, 0, 0, 0.8);
            font-size: 0.9em;
          }
          .item {
            margin-bottom: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid hsl(220, 20%, 92%);
            display: flex;
            gap: 24px;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item-image {
            flex-shrink: 0;
            width: 150px;
            height: 150px;
          }
          .item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .item-content {
            flex: 1;
            min-width: 0;
          }
          .item h3 {
            margin-bottom: 8px;
          }
          .item h3 a {
            color: hsl(210, 98%, 42%);
            text-decoration: none;
            font-size: 1.5em;
            font-weight: 600;
            line-height: 1.3;
          }
          .item h3 a:hover {
            color: hsl(210, 98%, 35%);
            text-decoration: underline;
          }
          .item-meta {
            color: rgba(0, 0, 0, 0.5);
            font-size: 0.9em;
            margin-bottom: 12px;
            font-weight: 400;
          }
          .item-description {
            color: rgba(0, 0, 0, 0.7);
            line-height: 1.7;
            font-weight: 400;
          }
          .footer {
            margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid hsl(220, 20%, 88%);
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
            font-size: 0.9em;
          }
          @media (max-width: 600px) {
            .item {
              flex-direction: column;
            }
            .item-image {
              max-width: 150px;
              width: 100%;
              height: auto;
              aspect-ratio: 1;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
          </div>
          
          <div class="info-box">
            <h2>
              <img src="/img/rss-icon.svg" alt="RSS" style="width: 24px; height: 24px;"/>
              <span>This is an RSS Feed</span>
            </h2>
            <p>This is a web feed in RSS format. Subscribe to it using your favorite RSS reader to get automatic updates when new content is published.</p>
            <p style="margin-top: 10px;">
              <strong>Feed URL:</strong> <code><xsl:value-of select="/rss/channel/link"/>/feed.xml</code>
            </p>
          </div>

          <div class="items">
            <xsl:for-each select="/rss/channel/item">
              <div class="item">
                <xsl:if test="enclosure/@url">
                  <div class="item-image">
                    <img>
                      <xsl:attribute name="src">
                        <xsl:value-of select="enclosure/@url"/>
                      </xsl:attribute>
                      <xsl:attribute name="alt">
                        <xsl:value-of select="title"/>
                      </xsl:attribute>
                    </img>
                  </div>
                </xsl:if>
                <div class="item-content">
                  <h3>
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                      </xsl:attribute>
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                  <div class="item-meta">
                    <xsl:value-of select="pubDate"/>
                    <xsl:if test="category">
                      · <xsl:value-of select="category"/>
                    </xsl:if>
                  </div>
                  <div class="item-description">
                    <xsl:value-of select="description"/>
                  </div>
                </div>
              </div>
            </xsl:for-each>
          </div>

          <div class="footer">
            <p>
              © 2025 <a href="https://rerdavies.github.io/">Robin Davies</a>. 
              Licensed under <a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>
              <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style="max-width: 1em; max-height: 1em; margin-left: 0.2em; vertical-align: middle;"/>
              <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style="max-width: 1em; max-height: 1em; margin-left: 0.2em; vertical-align: middle;"/>
              <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="ND" style="max-width: 1em; max-height: 1em; margin-left: 0.2em; vertical-align: middle;"/>
            </p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

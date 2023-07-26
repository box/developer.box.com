---
hide_title: true
alias_paths:
  - /docs/faqs
  - /docs/frequently-asked-questions
  - /incubator/FAQs
  - /box-hack-day
  - /boxdev
  - /box-dev
  - /incubator
  - /console
  - /ja_JP/home
  - /api
  - /docs/overview
---

# Box Platform

<Banner>

  <BannerTitle>
    Start building with **Box Platform**
  </BannerTitle>
  <BannerTitle>
    Manage users with **Box Platform**
  </BannerTitle>
  <BannerTitle>
    Build experiences with **Box Platform**
  </BannerTitle>
  <BannerTitle>
    Power content portals with **Box Platform**
  </BannerTitle>
  <BannerTitle>
    Integrate apps with **Box Platform**
  </BannerTitle>

  Extend the power of Box with APIs

</Banner>

<!-- <Centered wide>
  <Header to='/guides' centered>
    Guides
  </Header>
  <GuidesList>
    Get started, learn tips and tricks, and discover how to use the Box 
    Platform API with our comprehensive guides. Here are six of the most used 
    guides to get you started.

    <GuideList href='/guides/authentication/'>
      Authentication
    </GuideList>
    <GuideList href='/guides/cli/quick-start/'>
      CLI Quick Start
    </GuideList>
    <GuideList href='/guides/tooling/postman/quick-start/'>
      Postman Quick Start
    </GuideList>
    <GuideList href='/guides/api-calls/permissions-and-errors/common-errors/'>
      Common Errors
    </GuideList>
    <GuideList href='/guides/api-calls/pagination/offset-based/'>
      API Pagination
    </GuideList>
    <GuideList href='/guides/embed/ui-elements/'>
      UI Elements
    </GuideList>
  </GuidesList>

  <More to='/guides' right>
    More Guides
  </More>
</Centered> -->

<Centered wide>
  <Header to='/' centered>
    I'm new to Box Platform. How do I start?
  </Header>
    So - you wanna use the Box API? We love to see it!
    Follow along with the steps below to help get you up and running today.

  <TileGrid>
    <Tile type="users" title="Explore user types"
      href="/guides/getting-started/user-types/">
      Box Platform has different user options depending on the use case.
      Before developing, review this guide to understand the differences.
    </Tile>
    <Tile type="apps" title="Understand application types"
      href="/guides/applications/select/">
      When creating a new application, you have three choices: custom, limited
      access, and skill. This section describes the differences between them.
    </Tile>
    <Tile type="authentication" title="Learn authentication methods"
      href="/guides/authentication/select/">
      Box Platform supports OAuth 2.0, JSON Web Token(JWT), Client
      Credentials, and App Token authentication. The methods available are
      based on the application type selected.  
    </Tile>
    <Tile type="cli" title="Setup the Box CLI"
      href="/guides/cli/quick-start/">
      Optionally, follow the Box CLI quick start
      guide in order to have an API testing space. This tool can come to your
      aide when you get stuck. It takes less than five minutes! 
    </Tile>
    <Tile type="architecture" title="Create an architecture pattern"
      href="/guides/getting-started/architecture-patterns/">
      We always recommended putting pen to paper and drawing out your solution.
      Checkout the most common architecture patterns in this guide.
    </Tile>
    <Tile type="create" title="Create the application"
      href="https://app.box.com/developers/console">
      Now, you can start building! Visit the Developer Console. Create an
      application based on the choices
      you've selected from the learnings in the other steps.
    </Tile>
    <Tile type="authorize" title="Authorize the application"
      href="/guides/authorization/">
      Depending on the authentication method selected, you may have to
      have the primary administrator of your Box instance authorize
      you new app. Check details here!
    </Tile>
    <Tile type="code" title="Start coding"
      href="/reference/">
      Finally, explore the endpoints in our API reference
      pages. The site allows you to try out any of the endpoints, and you will
      find code snippets from all of our SDKs directly embedded
      in each page.
    </Tile>
  </TileGrid>
</Centered>

<Centered wide>
  <FeaturedBoard type="community" />
</Centered>

<Centered wide>
  <Header to='/' centered>
    Additional Box Platform concepts
  </Header>
    Want to learn more?
    Use these guides to discover supplementary information on the inner
    workings of Box Platform, broadening your understanding and improving
    your custom applications.

  <TileSlider>
    <Tile type="guide" title="Download a file" href="/guides/downloads/">
      The Box API allows for downloading files to the application's
      server, or directly by the end user in a browser. Read more in our guide!
    </Tile>
    <Tile type="guide" title="Uploads" href="/guides/uploads/">
      The Box API supports two distinct methods of file upload.
      The direct file upload API or the chunked upload APIs. 
      Review this guide to learn more.
    </Tile>
    <Tile type="guide" title="Common Errors" 
    href="/guides/api-calls/permissions-and-errors/common-errors/">
      Box APIs use HTTP status codes to communicate
      if a request has been successfully processed.
      See the common errors reference for more information.
    </Tile>
    <Tile type="guide" title="Metadata" href="/guides/metadata/">
      Metadata allows users and applications to define and store custom data
      associated with files and folders. See this guide on how to do so using
      the API.
    </Tile>
    <Tile type="guide" title="Webhooks" href="/guides/webhooks/">
      Webhooks allow you to monitor Box content for events,
      and receive notifications to a URL of your choice when they occur.
      This guide will help walk you through the options.
    </Tile>
    <Tile type="guide" title="Saleforce" 
      href="/guides/tooling/salesforce-toolkit/">
      Integrate Box and Salesforce! Most
      recently we launched support for Salesforce Flows, their low code/no code
      solution. Find out more in this section.
    </Tile>
  </TileSlider>

  <More to='/guides/' center>
    Browse all guides
  </More>
</Centered>

<!-- <Dark>
  <Centered wide>
    <Header to='/sdks-and-tools' centered>
      SDKS & Tools
    </Header>
    <SDKS>
      Development with Box Platform is made easier with SDKs for your
      programming language, a command line interface, front-end UI elements,
      and much more.

      <SDK language='python' href='https://github.com/box/box-python-sdk'>
        Python SDK
      </SDK>
      <SDK language='java' href='https://github.com/box/box-java-sdk'>
        Java SDK
      </SDK>
      <SDK language='node' href='https://github.com/box/box-node-sdk'>
        Node SDK
      </SDK>
      <SDK language='dotnet' href='https://github.com/box/box-windows-sdk'>
        Windows .NET SDK
      </SDK>
      <SDK language='cli' href='https://github.com/box/boxcli'>
        Box CLI
      </SDK>
      <SDK language='uielements' href='https://github.com/box/box-ui-elements'>
        UI Elements
      </SDK>
    </SDKS>

    <More to='/sdks-and-tools' right>
      More SDKs & Tools
    </More>
  </Centered>
</Dark> -->

<Centered wide>
  <FeaturedBoard type="sampleCode" />
</Centered>

<Centered wide>
  <Header to='/' centered>
    Browse by SDK and tools
  </Header>
    Development with Box Platform is made easier with SDKs,
    a command line interface, Postman collection,
    front-end UI elements, and much more.

  <TileSlider>
    <Tile type="java" title="Java" href="https://github.com/box/box-java-sdk">
      *box-java-sdk*
    </Tile>
    <Tile type="python" title="Python"
      href="https://github.com/box/box-python-sdk">
      *box-python-sdk*
    </Tile>
    <Tile type="node" title="Node" href="https://github.com/box/box-node-sdk">
      *box-node-js-sdk*
    </Tile>
    <Tile type="net" title=".NET"
      href="https://github.com/box/box-windows-sdk-v2">
      *box-windows-sdk-v2*
    </Tile>
    <Tile type="tool" title="iOS" href="https://github.com/box/box-ios-sdk">
      *box-ios-sdk*
    </Tile>
    <Tile type="box-orange" title="Box CLI" href="/guides/cli/">
      *box-cli*
    </Tile>
    <Tile type="box-orange" title="Box UI Elements"
      href="/guides/embed/ui-elements/">
      *box-ui-elements*
    </Tile>
    <Tile type="box-orange" title="Box Embed" href="/guides/embed/box-embed/">
      *Box Embed*
    </Tile>
    <Tile type="tool" title="Postman collection"
      href="/guides/tooling/postman">
      *Box Postman Collection*
    </Tile>
  </TileSlider>

  <More to='/sdks-and-tools/' center>
    See more details
  </More>
</Centered>

<Centered wide>
  <Header to='https://medium.com/box-developer-blog' centered>
    Developer News
  </Header>

  <BlogCards />

  <More to='https://medium.com/box-developer-blog' right>
    Developer Blog
  </More>
</Centered>

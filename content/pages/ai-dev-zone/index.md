---
hide_title: true
alias_paths: []
centered: false
---
# Box AI Developer Zone

<Centered wide id="ai-developer-zone" >
  <HeroImage type="AiDevZone" imageWidth="600" imageHeight="400">
    <Header>
      Box AI</br>
      Developer Zone
    </Header>

    Box AI Developer Zone features interactive
    demos, sample code, and tools for building
    AI agents and intelligent workflows. Explore 
    use cases, get hands-on experience with 
    Box AI API, and build agents with Box AI Studio!
  </HeroImage>
</Centered>

<Centered mid>
  <Header centered>
    Try out interactive demos
  </Header>
    Box AI API is available to all Enterprise Plus and Enterprise Advanced customers.

  <TileGrid rows="4">
    <Tile type="ai" title="Get a summary" href="/ai-dev-zone-summary">
        Summarize a document in a selected tone of voice.

        <strong style="background-color: #e8e8e8">Demo</strong>
    </Tile>
    <Tile type="ai" title="Extract metadata from files (freeform)"
      href="/ai-dev-zone-metadata">
        Use natural langage, or pass a stringified data structure
        to extract metadata with Box AI API.

        <strong style="background-color: #e8e8e8">Demo</strong>
    </Tile>
    <Tile type="ai" title="Extract metadata from files (structured)" href="/ai-dev-zone-metadata-structured">
        Extract document metadata suggestions. Pass a Box metadata template 
        ID or a predefined data structure.

        <strong style="background-color: #e8e8e8">Demo</strong>
    </Tile>
    <Tile type="ai" title="Use Box AI Enhanced Extract Agent" href="https://medium.com/box-developer-blog/box-ai-enhanced-extract-agent-a-developers-guide-41eb59b2cc54">
        Extract document metadata suggestions with the new Enhanced Extract Agent. Get the best answers thanks to chain-of-thought processing.

      <div>
        <strong style="background-color: #92e0c0">New</strong>
        <strong style="background-color: #e8e8e8">Tutorial</strong>
      </div>
    </Tile>
  </TileGrid>
</Centered>

<Centered mid>
  <Header>
    Documentation
  </Header>
  <p style="text-align: left; margin-left: 0;">
    These resources will get you up and running with Box AI API.
  </p>

  <TileGrid rows="4">
    <Tile type="code-new" title="Box AI API reference"
      href="/reference/resources/ai-response/">
        Check the API reference for specification details.

        <strong style="background-color: #e8e8e8">Documentation</strong>
    </Tile>
    <Tile type="code-new" title="Get started with Box AI API"
      href="/guides/box-ai/">
        Browse the guides to learn how to use Box AI API.

        <strong style="background-color: #e8e8e8">Documentation</strong>
    </Tile>
    <Tile type="code-new" title="Supported AI models"
      href="/guides/box-ai/supported-models/">
        Box supports a variety of AI models, categorized along two dimensions: access level and capability tier. Check table list of the supported AI models.

        <strong style="background-color: #e8e8e8">Documentation</strong>
    </Tile>
    <Tile type="code-new" title="Override AI model configuration"
      href="/guides/box-ai/ai-agents/ai-agent-overrides/">
        Override the default AI model configuration and fine 
        tune LLMs with Box AI API.

        <strong style="background-color: #e8e8e8">Documentation</strong>
    </Tile>
  </TileGrid>
</Centered>

<Centered mid>
  <Header>
    MCP Servers
  </Header>
  <p style="text-align: left; margin-left: 0;">
    These resources will get you up and running with Box MCP server.
  </p>

  <TileGrid rows="4">
    <Tile type="mcp" title="Remote Box MCP server"
      href="/guides/box-mcp/remote">
        The remote Box MCP server allows third party AI systems to securely connect and interact with your content in Box.

        <div>
          <strong style="background-color: #92e0c0">New</strong>
          <strong style="background-color: #e8e8e8">MCP</strong>
        </div>
    </Tile>
    <Tile type="mcp" title="Self-hosted Box MCP server"
      href="/guides/box-mcp/self-hosted">
        A Python Developer Community open source project. It integrates with the Box API to perform various operations such as file search, text extraction, AI-based querying, and data extraction.

        <strong style="background-color: #e8e8e8">MCP</strong>
    </Tile>
    <Tile type="mcp" title="Box MCP server and Pydantic AI"
      href="https://medium.com/box-developer-blog/building-ai-powered-document-generation-with-box-mcp-and-pydantic-ai-48775b18ae32">
        Use Box Doc Gen through the Box MCP server for AI-Powered Document Generation

        <div>
          <strong style="background-color: #e8e8e8">Tutorial</strong>
        </div>
    </Tile>
    <Tile type="mcp" title="Box MCP server and LangChain MCP Adapters"
      href="https://medium.com/box-developer-blog/using-an-existing-mcp-server-with-langchain-mcp-adapters-94cdd4af6d1b">
        Turn Box MCP server into a LangChain-compatible agent using the LangChain MCP Adapters.

        <div>
          <strong style="background-color: #e8e8e8">Tutorial</strong>
        </div>
    </Tile>
  </TileGrid>
</Centered>

<Centered mid>
  <Header>
    AI agents
  </Header>
  <p style="text-align: left; margin-left: 0;">
    Learn how to create advanced AI agents with Box.
  </p>
  <TileGrid rows="4">
    <Tile type="model" title="Manage agents with Box AI Studio API"
      href="/guides/ai-studio/getting-started-ai-studio/">
        Create and manage custom AI agents with Box AI Studio API.

      <div>
        <strong style="background-color: #92e0c0">New</strong>
        <strong style="background-color: #e8e8e8">Box AI Studio</strong>
      </div>
    </Tile>
    <Tile type="model" title="Box for Agentforce Extension package"
      href="/guides/tooling/salesforce-toolkit/box-agentforce-package/">
        Get started with reusable Agentforce actions that help automate workflows and enhance intelligent agent—based processes within Salesforce.

        <div>
          <strong style="background-color: #92e0c0">New</strong>
          <strong style="background-color: #e8e8e8">Salesforce</strong>
        </div>
    </Tile>
    <Tile type="model" title="Multi-agent workflows with Box and OpenAI"
      href="https://medium.com/box-developer-blog/building-multi-agent-workflows-with-openais-new-sdk-and-box-3e3c81cf4715">
        Use OpenAI Responses API and a Box Agent to add unstructured data from your Box instance into your agentic workflows.
        
        <div>
          <strong style="background-color: #e8e8e8">OpenAI</strong>
        </div>
    </Tile>
    <Tile type="model" title="Box AI Agents Toolkit"
      href="https://pypi.org/project/box-ai-agents-toolkit/">
        Get started with a Python library for building AI agents for Box.

        <strong style="background-color: #e8e8e8">Beta</strong>
    </Tile>
  </TileGrid>
</Centered>

<Centered mid>
  <Header>
    Box for AI Integrations
  </Header>
  <p style="text-align: left; margin-left: 0;">
    Use Box for AI Integrations to extend LLM models' existing knowledge bases.
  </p>
  
  <TileGrid rows="4">
    <Tile type="box-brown" title="Openflow Connector for Box"
      href="https://docs.snowflake.com/en/user-guide/data-integration/openflow/connectors/box/setup">
        Seamlessly connect unstructured content in Box with the powerful analytics capabilities of Snowflake, unlocking new insights and automating data-driven workflows.

        <div>
          <strong style="background-color: #92e0c0">New</strong>
          <strong style="background-color: #e8e8e8">Integration</strong>
        </div>
    </Tile>
    <Tile type="box-brown" title="Airbyte"
      href="https://github.com/box-community/airbyte/blob/barduinor/source-box-devrel/docs/integrations/sources/box-data-extract.md">
        Transform unstructured documents into structured, queryable data by using the “Box data extract”, an Airbyte source connector.
        
        <div>
          <strong style="background-color: #e8e8e8">Integration</strong>
        </div>
    </Tile>
    <Tile type="box-brown" title="Weaviate"
      href="https://medium.com/box-developer-blog/weaviate-box-rag-recipe-with-weaviate-query-agent-1cb41cf9e68b">
        Build RAG workflows by embedding Box content into a Weaviate vector database and leveraging Weaviate's new Query Agent.
        
        <div>
          <strong style="background-color: #e8e8e8">Integration</strong>
        </div>
    </Tile>
    <Tile type="box-brown" title="Pinecone"
      href="https://medium.com/box-developer-blog/demo-box-pinecone-f03783c412bb">
        Connect Box and Pinecone to customize vector embeddings and get more relevant answers from LLM.

        <strong style="background-color: #e8e8e8">Integration</strong>
    </Tile>
    <Tile type="box-brown" title="LlamaIndex"
      href="https://github.com/run-llama/llama_index/tree/main/llama-index-integrations/readers/llama-index-readers-box#readme">
        Enable access to Box content within LLM workflows with Box reader suite for LlamaIndex.

        <strong style="background-color: #e8e8e8">Integration</strong>
    </Tile>
    <Tile type="box-brown" title="LangChain"
      href="https://python.langchain.com/docs/integrations/providers/box/">
        Include Box content in your LLM workflows with Box loader for LangChain.

        <strong style="background-color: #e8e8e8">Integration</strong>
    </Tile>
    <Tile type="box-brown" title="Pydantic AI and Box MCP"
      href="https://github.com/box-community/box-mcp-pydantic-ai">
        Use the Box MCP server to augment Pydantic AI agents with secure content in Box.

        <div>
          <strong style="background-color: #e8e8e8">Demo</strong>
        </div>
    </Tile>
  </TileGrid>
</Centered>

<Centered mid>
  <Header centered>
    Videos
  </Header>
  Watch the latest Box AI API tutorials and demos.

  <TileGrid rows="3">
    <Tile image="AI-API" title="AI API overview"
      href="https://www.youtube.com/watch?v=amhOj0YRVRQ&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q">
        Check out the high-level features of the Box AI API in one minute.

    </Tile>
    <Tile image="API-text-gen" title="Endpoint overview"
      href="https://www.youtube.com/watch?v=xxR8aF4r3g8&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q">
        See a demo of the Box AI API text generation endpoint. 

    </Tile>
    <Tile image="API-q&a" title="Endpoint overview"
      href="https://www.youtube.com/watch?v=UyKfacz6G9g&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q">
        See a demo of the Box AI API document Q&A endpoint.

    </Tile>
    <Tile image="API-extract" title="Endpoint overview"
      href="https://www.youtube.com/watch?v=fijj0CX67c4&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q">
        Extract metadata with various prompt formats with Box AI API.

    </Tile>
    <Tile image="API-extract-structured" title="Endpoint overview"
      href="https://www.youtube.com/watch?v=dU3oo4sHZt0&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q">
        Extract metadata with predefined structure with Box AI API.

    </Tile>
    <Tile image="API-interview" title="Hear from Box CPO Diego Dugatkin"
      href="https://www.youtube.com/watch?v=NA4NiqBdSg4&t=2s">
        Learn why Box chose to expose Box AI through our public API.

    </Tile>
  </TileGrid>

  <More secondary="true" to='https://www.youtube.com/playlist?list=PLCSEWOlbcUyIjaK2hCZMk6rSR1jg4r_4H' center>
    View more videos
  </More>
</Centered>
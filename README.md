# InterSystems IRIS Vector Search

This year, we're adding a powerful [Vector Search capability to the InterSystems IRIS Data Platform](https://www.intersystems.com/news/iris-vector-search-support-ai-applications/), to help you innovate faster and build intelligent applications powered by Generative AI. At the center of the new capability is a new [`VECTOR` native datatype](https://docs.intersystems.com/iris20241/csp/docbook/DocBook.UI.Page.cls?KEY=RSQL_datatype#RSQL_datatype_vector) for IRIS SQL, along with [similarity functions](https://docs.intersystems.com/iris20241/csp/docbook/Doc.View.cls?KEY=GSQL_vecsearch) that leverage optimized chipset instructions (SIMD).

This repository offers code samples to get you started with the new features, and we'll continue to add more, but encourage you to let us know about your own experiments on the [InterSystems Developer Community](https://community.intersystems.com). At the bottom of this page, you'll find links to a few demo repositories we liked a lot!


## InterSystems IRIS Vector Search Quickstart

1. Clone the repo
    ```Shell
    git clone https://github.com/intersystems-community/hackmit-2024.git
    ```
   

### Using a Jupyter container

If you prefer just running the demos from your local Python environment, skip to [Using your local Python environment](#using-your-local-python-environment).


2. For [`langchain_demo.ipynb`](demo/langchain_demo.ipynb) and [`llama_demo.ipynb`](demo/llama_demo.ipynb), you need an [OpenAI API Key](https://platform.openai.com/api-keys). Update the corresponding entry in `docker-compose.yml`:
    ```
      OPENAI_API_KEY: xxxxxxxxx
    ```

3. Change your directory to hackmit-2024
    ```Shell
    cd hackmit-2024
    ```

4. Start the Docker containers (one for IRIS, one for Jupyter):
    ```Shell
    docker-compose up
    ```
5. Once loaded, navigate to http://localhost:8888/lab to access the notebook. To view the container information, run in a new terminal:
    ```Shell
    docker-compose ps
    ```

### Using your local Python environment 

#### Note: if you used the previous method (Jupyter container), you will need to stop the previous docker container before running the following steps, as they will try to use the same port (Alternatively, use a different port)


2. Install IRIS Community Edtion in a container:
    ```Shell
    docker run -d --name iris-comm -p 1972:1972 -p 52773:52773 -e IRIS_PASSWORD=demo -e IRIS_USERNAME=demo intersystemsdc/iris-community:latest
    ```
    :information_source: After running the above command, you can access the System Management Portal via http://localhost:52773/csp/sys/UtilHome.csp. Please note you may need to [configure your web server separately](https://docs.intersystems.com/iris20241/csp/docbook/DocBook.UI.Page.cls?KEY=GCGI_private_web#GCGI_pws_auto) when using another product edition.

3. Create a Python environment and activate it (conda, venv or however you wish) For example:
    
    conda:
    ```Shell
    conda create --name iris-vector-search python=3.10
    conda activate
    ```
    or 

    venv (Windows):
    ```Shell
    python -m venv iris-vector-search
    .\iris-vector-search\Scripts\Activate
    ```
    or 

    venv (Unix):
    ```Shell
    python -m venv iris-vector-search
    source ./iris-vector-search/bin/activate
    ```

4. Install packages for all demos:
    ```Shell
    pip install -r requirements.txt
    ```

5. For [`langchain_demo.ipynb`](demo/langchain_demo.ipynb) and [`llama_demo.ipynb`](demo/llama_demo.ipynb), you need an [OpenAI API Key](https://platform.openai.com/api-keys). Create a `.env` file in this repo to store the key:
    ```
    OPENAI_API_KEY=xxxxxxxxx
    ```
    
6. The demos in this repository are formatted as Jupyter notebooks. To run them, just start Jupyter and navigate to the `/demo/` folder:

    ```Shell
    jupyter lab
    ```

## Using the Management Portal

1. Navigate to http://localhost:52773/csp/sys/UtilHome.csp, login with username: demo, password: demo (or whatever you configured)
2. Change the namespace (on the top left) from %SYS to USER
3. On the left navigation pane, click 'System Explorer'
4. Click 'SQL' -> 'Go'
5. Here, you can execute SQL queries. You can also view the tables by clicking the relevant table on the left, under 'Tables', and then clicking 'Open Table' (above the SQL query box)

## Basic Demos

### [sql_demo.ipynb](demo/sql_demo.ipynb)

IRIS SQL now supports vector search (with other columns)! In this demo, we're searching a whiskey dataset for whiskeys that are priced < $100 and have a taste description similar to "earthy and creamy taste".

### [langchain_demo.ipynb](demo/langchain_demo.ipynb)

IRIS now has a langchain integration as a VectorDB! In this demo, we use the langchain framework with IRIS to ingest and search through a document. 

### [llama_demo.ipynb](demo/llama_demo.ipynb)

IRIS now has a llama_index integration as a VectorDB! In this demo, we use the llama_index framework with IRIS to ingest and search through a document. 

### [IRISDatabaseOperations.ipynb](demo/IRISDatabaseOperations.ipynb)

If you are more comfortable with traditional forms of connection to a relational database like **pyodbc**, this and the next notebook will allow you to use the DB-API connection to IRIS db.
This notebook covers the basic CRUD operations.

### [SemanticSearch.ipynb](demo/SemanticSearch.ipynb)

Building on IRISDatabaseOperations.ipynb, this notebook presents an example of semantic search leveraging the vector search capabilities in IRIS (using the pyodbc style DB-API connection). 

## Quick Start App

### [simpleFlask](Apps/README.md)
This allows you to quickly get started with a full stack app that uses a flask backend connected to an IRIS db. The frontend is basic HTML,javacript and css served from flask. 
This app uses the DB-API connectors, so this starter app along with demo notebooks : [IRISDatabaseOperations.ipynb](demo/IRISDatabaseOperations.ipynb) and  [SemanticSearch.ipynb](demo/SemanticSearch.ipynb)
can be used to make a more advanced app that leverages the vector search capabilities of IRIS


## Which to use?

If you need to use search with filters, use IRIS SQL. This is the most flexible way to build RAG.

If you're building a genAI app that uses a variety of tools (agents, chained reasoning, api calls), go for langchain. 

If you're building a RAG app, go for llama_index.

The fastest and easiest way to contact any InterSystems Mentor is via Slack or Discord - feel free to ask any questions about our technology, or about your project in general!


## More Demos / References:

### [NLP Queries on Youtube Audio Transcription](https://github.com/jrpereirajr/intersystems-iris-notebooks/blob/main/vector/langchain-iris/nlp_queries_on_youtube_audio_transcription_dataset.ipynb)
Uses langchain-iris to search Youtube Audio transcriptions

### [langchain-iris demo](https://github.com/caretdev/langchain-iris/blob/main/demo.ipynb)
Original IRIS langhain demo, that runs the containerized IRIS in the notebook

### [llama-iris demo](https://github.com/caretdev/llama-iris/blob/main/demo.ipynb)
Original IRIS llama_index demo, that runs the containerized IRIS in the notebook

### [InterSystems Documentation](https://docs.intersystems.com/)
Official page for InterSystems Documentation

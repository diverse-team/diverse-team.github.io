---
date: 2024-02-15T13:00:00
title: "Tera-scale graph processing on the Software Heritage graph"
image: https://annex.softwareheritage.org/public/logo/software-heritage-logo-title-motto.svg
abstract: >

  I will present my work on the compressed graph representation of the [Software
  Heritage](https://www.softwareheritage.org/) archive, whose latest version features 34 billion nodes and 520
  billion edges.


  I started by building on top of someone's PhD project (in Java), and am now
  rewriting it in Rust, leading to a 2 to 6x performance gain.


  Lessons learned include unexpected data structures, columnar file formats (ORC),
  annoying multi-threading bugs, and arguments for your future language flamewars.


  ---

  Following Valentin's talk, we will have a tutorial from 14:15 to 17:30 to get
  started with Software Heritage's API. See the program below.


  ## Tutorial: Querying Software Heritage Archive

  With the help of Valentin Lorentz, we will explore the multiple ways data can
  be extracted from the Software Heritage archive: REST API, GraphQL API, remote
  queries of swh-graph via HTTP and gRPC, swh-graph direct API from Rust, Java
  and Python…


  Make sure that you have followed these steps before the tutorial
   - Create an account on https://archive.softwareheritage.org/ so you can use the API with higher rate-limits
   - Send your account name to Valentin to get access to https://archive.softwareheritage.org/api/1/graph/
   - Make sure you can ssh to the team's dedicated machine

  ### Program

   - List all directories and files from a given Git commit
   - List the URL of known origins for a given Git commit
   - Searching for origins
   - Query the swh-graph server on diverci
   - Write your own Rust package that uses swh-graph
   - Find the earliest revision/release containing a particular directory/content

  ### Resources

   - [SWH data model](https://docs.softwareheritage.org/devel/swh-model/data-model.html)

   ![](https://hedgedoc.softwareheritage.org/uploads/e36f4269-720c-40e6-a7e7-080d935833e2.png)


   - [swh-graph documentation](https://docs.softwareheritage.org/devel/swh-graph/) (excluding Java and Rust APIs)
   - [swh-graph Using the HTTP API](https://docs.softwareheritage.org/devel/swh-graph/grpc-api.html) (read first!)
   - [swh-graph Using the gRPC API](https://docs.softwareheritage.org/devel/swh-graph/grpc-api.html)
   - [swh-graph gRPC protocol full description](https://gitlab.softwareheritage.org/swh/devel/swh-graph/-/blob/master/proto/swhgraph.proto)
   - [swh-graph Rust API documentation](https://pktz.fr/swh-graph/swh_graph/index.html) (this is a temporary location for this workshop it will be on docs.rs after we release swh-graph Rust)
   - [Data sources provided by SWH](https://docs.softwareheritage.org/user/using_data/)
   - [Software Heritage REST API](https://archive.softwareheritage.org/api/)
   - [Software Heritage GraphQL API](https://docs.softwareheritage.org/devel/swh-graphql/)
   - [sha1collisiondetection](https://github.com/cr-marcstevens/sha1collisiondetection) (as of now, [it can’t be archived by SWH](https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://github.com/cr-marcstevens/sha1collisiondetection), see the relevant [milestone](https://gitlab.softwareheritage.org/groups/swh/-/milestones/58#tab-issues))

event: DiverSE Coffee
location: Rennes, France
speaker: Valentin Lorentz
---

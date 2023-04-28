# Next.js Auth Sample

## Where to save over tokens?

-  [ ] localStorage
-  [ ] sessionStorage
-  [ ] cookie
-  [x] httpOnly cookie -----------> JavaScript doesn't have access
-  [ ] secure cookie -------------> just Https requests
-  [ ] httpOnly & secure cookie --> both

# Next.js Documentation

# Pre-rendering

-  SSG
-  SSR

## 1- SSG (Static Site Generation) `(uses getStaticProps)`

-  Withouth data
-  with Data

   -  getStaticProps
   -  getStaticPaths
   -  fallbak in getStaticPaths
      -  false -> returns 404
      -  true -> asks server again with loading
      -  'blocking' -> asks server again without loading

-  ISR (Incremental Static Regeneration) `(uses revalidate in getStaticProps)`
   -  revalidates again in new requests
   -  Normal ISR: revalidates by user request
   -  on-demand ISR: revalidates by interval in server

## 2- SSR (Server Side Rendering) `(uses getInitialProps or getServerSideProps)`

# CSR (Client Side Rendering)

# Both `Pre-rendering` and `CSR`

-  Shallow Routing

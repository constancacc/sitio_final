import { createBucketClient } from "@cosmicjs/sdk";

// AUTENTICAÇÃO
const cosmic = createBucketClient({
  bucketSlug: "sitio-production-f54d2e30-938a-11ee-bad3-c399e8060022",
  readKey: "Cp7nTIDRVoAA7k6bhFe2nOrRDzhFdYsP7KKUIuqfaBK8fMdlOu",
  writeKey: "GZBEt3ucsQJ76GkJtRiPxluUVbi7IkgNec6lPhL77NHPpo2tlc",
});

// OBTER TODOS OS ARTISTAS (PARA LISTA)
export async function getAllArtists() {
  const data = await cosmic.objects
    .find({ type: "artistas" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER O ARTISTA CORRESPONDENTE À SLUG
export async function getArtistBySlug(artistSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "artistas",
      slug: artistSlug,
    })
    .props("id,slug,title,metadata")
    .depth(1);

  return data.object;
}

// OBTER TODOS AS GALERIAS (PARA LISTA)
export async function getAllGalleries() {
  const data = await cosmic.objects
    .find({ type: "galerias" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER A GALERIA CORRESPONDENTE À SLUG
export async function getGalleryBySlug(gallerySlug) {
  const data = await cosmic.objects
    .findOne({
      type: "galerias",
      slug: gallerySlug,
    })
    .props("id,type,slug,title,metadata")
    .depth(1);

  return data.object;
}

// OBTER TODOS AS EXPOSIÇÕES (PARA LISTA)
export async function getAllExhibitions() {
  const data = await cosmic.objects
    .find({ type: "exposicoes" })
    .props("slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER A EXPOSIÇÃO CORRESPONDENTE À SLUG
export async function getExhibitionsBySlug(exhibitionsSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "exposicoes",
      slug: exhibitionsSlug,
    })
    .props("id,type,slug,title,metadata")
    .depth(1);

  return data.object;
}

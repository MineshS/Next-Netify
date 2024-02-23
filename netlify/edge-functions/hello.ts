// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
    return new Response("Hello world from the edge!", {headers: {"content-type": "text/html"}})
}